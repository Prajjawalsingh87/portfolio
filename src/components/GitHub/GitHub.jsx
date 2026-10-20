import { links } from "../../data/profile";
import { useLiveJson } from "../../data/live";
import { ArrowUpRightIcon, GitHubIcon, GlobeIcon } from "../Icons/Icons";
import Section from "../Section/Section";

// GitHub's own language colors for the languages likely to show up.
const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Go: "#00add8",
  HTML: "#e34c26",
  CSS: "#663399",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  HCL: "#844fba",
  "Jupyter Notebook": "#da5b0b",
};
const colorOf = (language) => languageColors[language] ?? "#94a3b8";

const relative = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
function updatedAgo(iso) {
  const seconds = (Date.parse(iso) - Date.now()) / 1000;
  const units = [
    ["year", 31536000],
    ["month", 2592000],
    ["week", 604800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ];
  for (const [unit, size] of units) {
    if (Math.abs(seconds) >= size) return relative.format(Math.round(seconds / size), unit);
  }
  return "just now";
}

const card = "rounded-[var(--radius-card)] border border-line bg-surface shadow-card";

function RepoCard({ repo }) {
  return (
    <article className={`${card} flex h-full flex-col p-5`}>
      <div className="flex items-start justify-between gap-3">
        <a
          href={repo.url}
          target="_blank"
          rel="noreferrer"
          className="min-w-0 break-words font-display text-lg font-bold leading-snug text-fg transition-colors hover:text-accent"
        >
          {repo.name}
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noreferrer"
            aria-label={`${repo.name} live site`}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-subtle transition-colors hover:bg-raised hover:text-accent"
          >
            <GlobeIcon />
          </a>
        )}
      </div>
      <p className="mt-2 line-clamp-2 flex-1 text-[0.94rem] leading-6 text-muted">{repo.description || "No description yet."}</p>
      <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-subtle">
        {repo.language && (
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: colorOf(repo.language) }} aria-hidden="true" />
            {repo.language}
          </span>
        )}
        <span aria-label={`${repo.stars} stars`}>★ {repo.stars}</span>
        <span>Updated {updatedAgo(repo.pushedAt)}</span>
      </p>
    </article>
  );
}

function Stats({ data }) {
  const stats = [
    { label: "Public repos", value: data.user.publicRepos },
    { label: "Stars", value: data.totals.stars },
    { label: "Followers", value: data.user.followers },
  ];
  return (
    <div className={`${card} self-start p-5 lg:sticky lg:top-24`}>
      <dl className="grid grid-cols-3 gap-3 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse rounded-xl bg-raised px-2 py-3">
            <dt className="text-xs font-medium text-subtle">{s.label}</dt>
            <dd className="font-display text-2xl font-extrabold text-fg">{s.value}</dd>
          </div>
        ))}
      </dl>

      {data.languages.length > 0 && (
        <>
          <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.12em] text-subtle">Top languages</h3>
          <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-raised" aria-hidden="true">
            {data.languages.map((l) => (
              <span key={l.name} style={{ width: `${l.percent}%`, background: colorOf(l.name) }} />
            ))}
          </div>
          <ul className="mt-4 space-y-2">
            {data.languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between gap-3 text-sm">
                <span className="inline-flex items-center gap-2 font-medium text-fg">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: colorOf(l.name) }} aria-hidden="true" />
                  {l.name}
                </span>
                <span className="text-subtle">
                  {l.percent}% · {l.repos} repo{l.repos === 1 ? "" : "s"}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-subtle">Share of my own public repos, by main language.</p>
        </>
      )}
    </div>
  );
}

function Skeleton() {
  return (
    <div className="grid animate-pulse gap-5 lg:grid-cols-[1fr_20rem]" aria-hidden="true">
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className={`${card} space-y-3 p-5`}>
            <div className="h-5 w-1/2 rounded bg-raised" />
            <div className="h-3.5 w-full rounded bg-raised" />
            <div className="h-3.5 w-2/3 rounded bg-raised" />
            <div className="h-3.5 w-1/3 rounded bg-raised" />
          </div>
        ))}
      </div>
      <div className={`${card} h-72`} />
    </div>
  );
}

function GitHub() {
  const { status, data } = useLiveJson("/api/github");

  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title="What I'm working on lately."
      intro="Live from my public GitHub: recently updated repositories and the languages I use most."
      action={
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 self-start font-medium text-accent transition-colors hover:text-accent-strong md:self-auto"
        >
          <GitHubIcon width={18} height={18} />
          See GitHub profile
          <ArrowUpRightIcon />
        </a>
      }
    >
      <div aria-busy={status === "loading"} aria-live="polite">
        {status === "loading" && <Skeleton />}
        {status === "error" && (
          <p className={`${card} px-5 py-6 text-muted`}>
            Live GitHub activity isn&apos;t available right now.{" "}
            <a href={links.github} target="_blank" rel="noreferrer" className="font-semibold text-accent hover:text-accent-strong">
              See my repositories on GitHub
            </a>
            .
          </p>
        )}
        {status === "ready" && (
          <div className="grid gap-5 lg:grid-cols-[1fr_20rem]">
            <ul className="grid gap-4 sm:grid-cols-2">
              {data.recent.map((repo) => (
                <li key={repo.name}>
                  <RepoCard repo={repo} />
                </li>
              ))}
            </ul>
            <Stats data={data} />
          </div>
        )}
      </div>
    </Section>
  );
}

export default GitHub;
