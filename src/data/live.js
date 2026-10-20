import { useEffect, useState } from "react";
import { articles as fallbackArticles } from "./content";

// One request per URL per page load, shared by every component that asks.
const requests = new Map();

export function fetchJson(url) {
  if (!requests.has(url)) {
    requests.set(
      url,
      fetch(url, { headers: { Accept: "application/json" } }).then((response) => {
        if (!response.ok) throw new Error(`${url} responded ${response.status}`);
        return response.json();
      }),
    );
  }
  return requests.get(url);
}

// { status: "loading" | "ready" | "error", data }
export function useLiveJson(url) {
  const [state, setState] = useState({ status: "loading", data: null });
  useEffect(() => {
    let active = true;
    fetchJson(url).then(
      (data) => active && setState({ status: "ready", data }),
      () => active && setState({ status: "error", data: null }),
    );
    return () => {
      active = false;
    };
  }, [url]);
  return state;
}

// Medium posts: live from /api/medium, or the hard-coded list if that fails.
const monthYear = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

const toArticle = (post) => ({
  title: post.title,
  date: post.date ? monthYear.format(new Date(post.date)) : "",
  href: post.link,
  summary: post.summary ?? "",
  image: post.image ?? null,
  tags: post.tags ?? [],
});

let liveArticles = null;

export function loadArticles() {
  return fetchJson("/api/medium").then(
    (data) => {
      if (Array.isArray(data?.posts) && data.posts.length) liveArticles ??= data.posts.map(toArticle);
      return getArticles();
    },
    () => getArticles(),
  );
}

export const getArticles = () => liveArticles ?? fallbackArticles;

export function useArticles() {
  const [state, setState] = useState({ status: liveArticles ? "ready" : "loading", articles: getArticles() });
  useEffect(() => {
    let active = true;
    loadArticles().then((list) => active && setState({ status: "ready", articles: list }));
    return () => {
      active = false;
    };
  }, []);
  return state;
}
