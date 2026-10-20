# 👋 Prajjawal Singh — Portfolio

My personal portfolio: who I am, the backend stack I work with, selected projects and how to reach me.

**🔗 Live:** https://portfolio-ashy-three-70.vercel.app

## ✨ Sections

- **Hero**: intro, current focus, key stats, and quick links to projects, resume and LinkedIn
- **About**: summary plus competitive programming highlights (LeetCode Guardian 2130, CodeChef 4★, Codeforces Specialist)
- **Experience**: Backend Engineer at TailNode (Jul 2025 – present)
- **Skills**: languages, Java & frameworks, backend & APIs, integrations, databases, messaging, cloud & DevOps, observability
- **Projects**: selected work with **Live** and **GitHub** links, plus smaller builds
- **GitHub (live)**: my most recently updated public repos (description, language, stars, last update), totals and top languages, loaded from the GitHub API
- **DevOps & Cloud**: Kubernetes lab, DevOps roadmap, production work and toolchain
- **Writing**: my latest [Medium](https://medium.com/@singhprajjawal87) posts, loaded automatically from the RSS feed (title, date, short summary and cover image), with a built-in list as a fallback
- **Contact**: email (with a one-click **Copy email** button), LinkedIn, GitHub, Medium, LeetCode, CodeChef, Codeforces and a resume download

## 🔎 Features

- **Search the whole site**: press <kbd>Ctrl</kbd>+<kbd>K</kbd> (<kbd>⌘</kbd>+<kbd>K</kbd> on Mac), <kbd>/</kbd>, or the search button in the navbar. It finds sections, experience points, skills, projects (titles, descriptions, tags and links), DevOps work and Medium articles. Results are ranked by relevance, matched words are highlighted, and typos or partial words still work (`kubernets`, `postgre`). Use <kbd>↑</kbd> <kbd>↓</kbd> to move, <kbd>Enter</kbd> to jump to the item (projects, articles and profiles also open in a new tab) and <kbd>Esc</kbd> to close. Built with [MiniSearch](https://github.com/lucaong/minisearch), fully in the browser.
- **Live data with a safety net**: two small Vercel functions fetch GitHub and Medium on the server and cache the result at the edge for an hour, so the page stays fast and well under GitHub's rate limit. While loading, the page shows placeholders. If a fetch fails, the GitHub section shows a link to the profile and Writing falls back to the built-in list. New Medium posts also appear in search.
- **Light and dark theme**: follows your system setting by default; the moon/sun button in the navbar switches it and remembers your choice.
- **Filter projects** by name, description or technology.
- Sticky navbar with a mobile menu, keyboard-friendly focus states and reduced-motion support.

## 🛠 Tech Stack

React 19 · Vite · Tailwind CSS 4 · MiniSearch

## ⚙️ API routes

| Route | Source | Returns |
| --- | --- | --- |
| [`/api/github`](api/github.js) | GitHub REST API (`/users/Prajjawalsingh87` and its repos) | profile totals, 6 most recently pushed repos, top languages |
| [`/api/medium`](api/medium.js) | `https://medium.com/feed/@singhprajjawal87` | latest posts: title, link, date, summary, first image, tags |

Both send `Cache-Control: s-maxage=3600, stale-while-revalidate=86400`, and errors return `502` with a short cache. No token is needed. Optionally set `GITHUB_TOKEN` in the Vercel project to raise the GitHub rate limit. `vercel.json` sends every path except `/assets/*` and `/api/*` to the single-page app.

## ▶️ Run locally

```bash
git clone https://github.com/Prajjawalsingh87/portfolio.git
cd portfolio
npm install
npm run dev        # http://localhost:5173 (the /api routes work here too)
npm test           # unit tests for the API routes, with fetch mocked
```

## ✏️ Updating content

Profile links live in [`src/data/profile.js`](src/data/profile.js) and section content (experience, skills, projects, DevOps work, articles) lives in [`src/data/content.js`](src/data/content.js). Each section is a component in [`src/components/`](src/components/). The site search is built from the same data, so anything added there is searchable automatically. The resume served by the site is [`public/resume.pdf`](public/resume.pdf).

## 🚀 Deployment

Deployed on **Vercel**; every push to `main` deploys to production.


## Terminal verification and deployment

```bash
npm ci
npm run lint
npm test
npm run build
npm run dev
```

Node.js 24 is used on Vercel. The production build is written to `dist/`.

```bash
vercel link --project portfolio
vercel deploy          # preview
vercel deploy --prod   # publish production
```

The local `.vercel/` link is ignored by Git. Deployment credentials belong in
the CLI's login session, never in this repository.
