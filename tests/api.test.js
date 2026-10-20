// Unit tests for the serverless functions, with fetch mocked. Run: npm test
import assert from "node:assert/strict";
import { afterEach, test } from "node:test";

const realFetch = globalThis.fetch;
afterEach(() => {
  globalThis.fetch = realFetch;
});

// Minimal stand-in for Node's ServerResponse.
function mockRes() {
  const headers = {};
  return {
    headers,
    statusCode: 200,
    body: "",
    setHeader(name, value) {
      headers[name.toLowerCase()] = value;
    },
    end(body) {
      this.body = body;
    },
    json() {
      return JSON.parse(this.body);
    },
  };
}

const repo = (name, language, pushed, extra = {}) => ({
  name,
  language,
  pushed_at: pushed,
  description: `${name} description`,
  stargazers_count: 1,
  html_url: `https://github.com/Prajjawalsingh87/${name}`,
  homepage: "",
  fork: false,
  ...extra,
});

const repos = [
  repo("old-js", "JavaScript", "2026-01-01T00:00:00Z"),
  repo("newest-py", "Python", "2026-10-20T00:00:00Z", { stargazers_count: 5 }),
  repo("forked", "Go", "2026-10-21T00:00:00Z", { fork: true }),
  repo("mid-js", "JavaScript", "2026-06-01T00:00:00Z"),
  repo("no-lang", null, "2026-05-01T00:00:00Z"),
];
const user = { login: "Prajjawalsingh87", html_url: "https://github.com/Prajjawalsingh87", public_repos: 5, followers: 3 };

test("github: trims repos, skips forks and ranks languages", async () => {
  const calls = [];
  globalThis.fetch = async (url) => {
    calls.push(String(url));
    return Response.json(String(url).includes("/repos") ? repos : user);
  };
  const { default: handler } = await import(`../api/github.js?t=${Date.now()}`);
  const res = mockRes();
  await handler({}, res);

  assert.equal(res.statusCode, 200);
  assert.match(res.headers["cache-control"], /s-maxage=3600/);
  assert.match(res.headers["cache-control"], /stale-while-revalidate/);
  const body = res.json();
  assert.equal(calls.length, 2);
  assert.deepEqual(body.recent.map((r) => r.name), ["newest-py", "mid-js", "no-lang", "old-js"]);
  assert.deepEqual(body.languages.map((l) => [l.name, l.repos]), [["JavaScript", 2], ["Python", 1]]);
  assert.equal(body.languages[0].percent, 66.7);
  assert.equal(body.totals.stars, 8);
  assert.equal(body.user.followers, 3);
  assert.equal(body.recent[0].homepage, null);

  // A second request is answered from memory without calling GitHub again.
  await handler({}, mockRes());
  assert.equal(calls.length, 2);
});

test("github: sends the token only when GITHUB_TOKEN is set, and returns 502 on errors", async () => {
  process.env.GITHUB_TOKEN = "test-token";
  let auth;
  globalThis.fetch = async (url, options) => {
    auth = options.headers.Authorization;
    return new Response("rate limited", { status: 403 });
  };
  const { default: handler } = await import(`../api/github.js?t=${Date.now()}-err`);
  const res = mockRes();
  const errors = console.error;
  console.error = () => {};
  await handler({}, res);
  console.error = errors;
  delete process.env.GITHUB_TOKEN;

  assert.equal(auth, "Bearer test-token");
  assert.equal(res.statusCode, 502);
  assert.match(res.headers["cache-control"], /s-maxage=60/);
  assert.ok(res.json().error);
});

const feed = `<?xml version="1.0"?><rss><channel><title>x</title>
<item>
  <title><![CDATA[Kafka vs WarpStream: same API]]></title>
  <link>https://medium.com/@singhprajjawal87/kafka-vs-warpstream-1db5?source=rss-abc</link>
  <category><![CDATA[kafka]]></category><category><![CDATA[aws]]></category>
  <pubDate>Sat, 17 Oct 2026 18:41:20 GMT</pubDate>
  <content:encoded><![CDATA[<p>Apache Kafka is how most companies move event data &amp; logs.</p><h3>How Kafka works</h3><figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*a.png" /></figure><p>Second paragraph.</p>]]></content:encoded>
</item>
<item>
  <title>PostgreSQL &amp; memory</title>
  <link>https://medium.com/@singhprajjawal87/pg-2</link>
  <pubDate>not a date</pubDate>
  <description>&lt;p&gt;No image here.&lt;/p&gt;</description>
</item>
<item><title></title><link></link></item>
</channel></rss>`;

test("medium: parses titles, clean links, dates, summaries and first image", async () => {
  const { parseFeed } = await import("../api/medium.js");
  const posts = parseFeed(feed);
  assert.equal(posts.length, 2);
  assert.deepEqual(posts[0], {
    title: "Kafka vs WarpStream: same API",
    link: "https://medium.com/@singhprajjawal87/kafka-vs-warpstream-1db5",
    date: "2026-10-17T18:41:20.000Z",
    summary: "Apache Kafka is how most companies move event data & logs. Second paragraph.",
    image: "https://cdn-images-1.medium.com/max/1024/1*a.png",
    tags: ["kafka", "aws"],
  });
  assert.equal(posts[1].title, "PostgreSQL & memory");
  assert.equal(posts[1].date, null);
  assert.equal(posts[1].image, null);
  assert.equal(posts[1].summary, "No image here.");
});

test("medium: long summaries are cut at a word boundary", async () => {
  const { parseFeed } = await import("../api/medium.js");
  const long = "word ".repeat(100);
  const [post] = parseFeed(`<item><title>T</title><link>https://m/x</link><content:encoded><![CDATA[<p>${long}</p>]]></content:encoded></item>`);
  assert.ok(post.summary.length <= 201);
  assert.ok(post.summary.endsWith("word…"));
});

test("medium handler: caches successes and returns 502 when the feed fails", async () => {
  globalThis.fetch = async () => new Response(feed, { status: 200 });
  const { default: handler } = await import(`../api/medium.js?t=${Date.now()}`);
  const res = mockRes();
  await handler({}, res);
  assert.equal(res.statusCode, 200);
  assert.match(res.headers["cache-control"], /s-maxage=3600/);
  assert.equal(res.json().posts.length, 2);

  globalThis.fetch = async () => new Response("blocked", { status: 403 });
  const { default: failing } = await import(`../api/medium.js?t=${Date.now()}-err`);
  const bad = mockRes();
  const errors = console.error;
  console.error = () => {};
  await failing({}, bad);
  console.error = errors;
  assert.equal(bad.statusCode, 502);
});
