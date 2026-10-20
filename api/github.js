import { cachedJson, memoryCache } from "./_lib/respond.js";

const USER = "Prajjawalsingh87";
const API = "https://api.github.com";
const cache = memoryCache(10 * 60 * 1000);

function headers() {
  const h = {
    Accept: "application/vnd.github+json",
    "User-Agent": `${USER}-portfolio`,
    "X-GitHub-Api-Version": "2022-11-28",
  };
  // Optional: a token raises the rate limit from 60 to 5,000 requests an hour.
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

async function getJson(path) {
  const response = await fetch(`${API}${path}`, { headers: headers(), signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error(`GitHub ${path} responded ${response.status}`);
  return response.json();
}

// Turns the raw GitHub API data into the small shape the page needs.
export function summarize(user, repos, { recentCount = 6, languageCount = 6 } = {}) {
  const own = repos.filter((repo) => !repo.fork);

  const recent = [...own]
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
    .slice(0, recentCount)
    .map((repo) => ({
      name: repo.name,
      description: repo.description ?? "",
      language: repo.language ?? null,
      stars: repo.stargazers_count ?? 0,
      url: repo.html_url,
      homepage: repo.homepage || null,
      pushedAt: repo.pushed_at,
    }));

  const counts = new Map();
  for (const repo of own) {
    if (repo.language) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }
  const withLanguage = [...counts.values()].reduce((sum, n) => sum + n, 0);
  const languages = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, languageCount)
    .map(([name, repoCount]) => ({ name, repos: repoCount, percent: Math.round((repoCount / withLanguage) * 1000) / 10 }));

  return {
    user: {
      login: user.login,
      url: user.html_url,
      publicRepos: user.public_repos ?? own.length,
      followers: user.followers ?? 0,
    },
    totals: {
      stars: own.reduce((sum, repo) => sum + (repo.stargazers_count ?? 0), 0),
      reposCounted: own.length,
    },
    recent,
    languages,
    updatedAt: new Date().toISOString(),
  };
}

// GitHub returns at most 100 repos per page.
async function getAllRepos(maxPages = 5) {
  const all = [];
  for (let page = 1; page <= maxPages; page++) {
    const batch = await getJson(`/users/${USER}/repos?type=owner&sort=pushed&per_page=100&page=${page}`);
    all.push(...batch);
    if (batch.length < 100) break;
  }
  return all;
}

export default async function handler(req, res) {
  await cachedJson(
    res,
    cache,
    async () => {
      const [user, repos] = await Promise.all([getJson(`/users/${USER}`), getAllRepos()]);
      return summarize(user, repos);
    },
    "Could not load GitHub activity right now.",
  );
}
