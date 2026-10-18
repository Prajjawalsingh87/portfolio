import { useState } from "react";
import { links, profile } from "../../data/profile";
import { ArrowUpRightIcon, DownloadIcon, LinkedInIcon, PinIcon } from "../Icons/Icons";

const focus = [
  "Django REST APIs",
  "Kafka pipelines",
  "PostgreSQL",
  "Redis",
  "ClickHouse",
  "FastAPI",
  "Docker",
  "Linux",
  "Prometheus",
  "Grafana",
];

function Avatar() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-hidden="true"
        className="grid h-14 w-14 place-items-center rounded-xl bg-accent-soft font-mono text-lg font-bold text-accent"
      >
        PS
      </div>
    );
  }

  return (
    <img
      src={profile.avatar}
      alt={`${profile.name} GitHub avatar`}
      width="56"
      height="56"
      onError={() => setFailed(true)}
      className="h-14 w-14 rounded-xl border border-line-strong object-cover"
    />
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 h-[28rem] w-[min(56rem,100%)] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/80 px-3 py-1 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {profile.role} · Currently at {profile.company}
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-fg text-balance sm:text-5xl md:text-6xl">
            Hi, I&apos;m {profile.name}.{" "}
            <span className="text-muted">
              I build scalable APIs and reliable distributed systems.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
            Backend engineer focused on Django, Kafka, databases, performance
            optimization, and system design.
          </p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-subtle">
            <PinIcon />
            Based in {profile.location}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-ink transition-colors hover:bg-accent-strong"
            >
              View projects
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line-strong px-5 py-3 font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon width={18} height={18} />
              Resume
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold text-muted transition-colors hover:text-fg"
            >
              <LinkedInIcon width={18} height={18} />
              LinkedIn
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        <aside
          aria-label="Profile summary"
          className="relative rounded-[var(--radius-card)] border border-line bg-surface/90 shadow-2xl shadow-black/40"
        >
          <div className="flex items-center gap-2 border-b border-line px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
            <span className="ml-2 font-mono text-xs text-subtle">profile.json</span>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4">
              <Avatar />
              <div>
                <p className="font-semibold text-fg">{profile.name}</p>
                <p className="text-sm text-muted">{profile.role}</p>
              </div>
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              Current focus
            </p>
            <p className="mt-2 text-xl font-semibold text-fg">
              Scalable backend systems
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {focus.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-raised px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>

            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
              <div className="bg-raised p-4">
                <dt className="text-xs text-subtle">Education</dt>
                <dd className="mt-1 font-semibold text-fg">{profile.education}</dd>
              </div>
              <div className="bg-raised p-4">
                <dt className="text-xs text-subtle">Year</dt>
                <dd className="mt-1 font-semibold text-accent">{profile.educationYear}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
