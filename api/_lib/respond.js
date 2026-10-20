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

// Keeps the last good response in memory while the function instance stays warm,
// and remembers failures: Vercel's CDN does not cache 502s, so without this every
// request during an outage would hit the failing upstream again.
export function memoryCache(ttlMs, cooldownMs = 60 * 1000) {
  let entry = null;
  let failedAt = 0;
  return {
    get: () => (entry && Date.now() - entry.at < ttlMs ? entry.value : null),
    // Last good value even if expired; served while the upstream is failing.
    stale: () => entry?.value ?? null,
    set: (value) => {
      entry = { value, at: Date.now() };
      failedAt = 0;
    },
    fail: () => {
      failedAt = Date.now();
    },
    coolingDown: () => Date.now() - failedAt < cooldownMs,
  };
}

// Shared flow: fresh cache -> upstream -> last good copy -> 502.
export async function cachedJson(res, cache, load, errorMessage) {
  const fresh = cache.get();
  if (fresh) return sendJson(res, 200, fresh, CACHE_OK);

  if (!cache.coolingDown()) {
    try {
      const body = await load();
      cache.set(body);
      return sendJson(res, 200, body, CACHE_OK);
    } catch (error) {
      console.error(error.message);
      cache.fail();
    }
  }

  const stale = cache.stale();
  if (stale) return sendJson(res, 200, stale, CACHE_ERROR);
  return sendJson(res, 502, { error: errorMessage }, CACHE_ERROR);
}
