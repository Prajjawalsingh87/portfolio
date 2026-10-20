import { cachedJson, memoryCache } from "./_lib/respond.js";

const FEED = "https://medium.com/feed/@singhprajjawal87";
const cache = memoryCache(10 * 60 * 1000);

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

export function decodeEntities(text) {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code) => {
    if (code[0] === "#") {
      const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : match;
    }
    return ENTITIES[code.toLowerCase()] ?? match;
  });
}

// Reads one tag's text, with or without a CDATA wrapper.
function tag(xml, name) {
  const match = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  if (!match) return "";
  const raw = match[1].trim();
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return cdata ? cdata[1] : decodeEntities(raw);
}

function summaryFrom(html, max = 200) {
  const text = decodeEntities(
    html
      .replace(/<figure[\s\S]*?<\/figure>/gi, " ")
      .replace(/<(h\d|pre)[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,.;:]+$/, "")}…`;
}

// Parses Medium's RSS feed into plain post objects.
export function parseFeed(xml, limit = 10) {
  const items = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];
  return items.slice(0, limit).flatMap((item) => {
    const title = tag(item, "title").trim();
    const link = tag(item, "link").split("?")[0];
    if (!title || !link) return [];
    const content = tag(item, "content:encoded") || tag(item, "description");
    const image = content.match(/<img[^>]+src="([^"]+)"/i)?.[1] ?? null;
    const published = Date.parse(tag(item, "pubDate"));
    return [
      {
        title: decodeEntities(title),
        link,
        date: Number.isFinite(published) ? new Date(published).toISOString() : null,
        summary: summaryFrom(content),
        image,
        tags: [...item.matchAll(/<category>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/category>/gi)].map((m) => decodeEntities(m[1].trim())),
      },
    ];
  });
}

export default async function handler(req, res) {
  await cachedJson(
    res,
    cache,
    async () => {
      const response = await fetch(FEED, {
        headers: { Accept: "application/rss+xml, application/xml, text/xml", "User-Agent": "Mozilla/5.0 (portfolio feed reader)" },
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) throw new Error(`Medium feed responded ${response.status}`);
      const posts = parseFeed(await response.text());
      if (!posts.length) throw new Error("Medium feed had no posts");
      return { posts, updatedAt: new Date().toISOString() };
    },
    "Could not load Medium posts right now.",
  );
}
