// Shared helpers for the serverless functions in /api.
// Plain Node `res` methods only, so the handlers run on Vercel and in the Vite dev server.

// Vercel's CDN keeps a response for an hour and serves the old copy while it refreshes,
// so the upstream APIs are called at most about once an hour.
export const CACHE_OK = "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400";
// Errors are cached briefly so a failing upstream isn't hit on every page view.
export const CACHE_ERROR = "public, max-age=0, s-maxage=60";

export function sendJson(res, status, body, cacheControl) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", cacheControl);
  res.end(JSON.stringify(body));
}

// Keeps the last good response in memory while the function instance stays warm.
export function memoryCache(ttlMs) {
  let entry = null;
  return {
    get: () => (entry && Date.now() - entry.at < ttlMs ? entry.value : null),
    set: (value) => {
      entry = { value, at: Date.now() };
    },
  };
}
