import { useState } from "react";
import { links, profile } from "../../data/profile";
import { ArrowUpRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MediumIcon, PinIcon } from "../Icons/Icons";

const stats = [
  { value: "1+ yr", label: "building production backends" },
  { value: "500K+", label: "events/day through my Kafka → ClickHouse pipeline" },
  { value: "2130", label: "LeetCode rating · Guardian, top 1.92%" },
  { value: "1,000+", label: "DSA problems solved" },
];

const socials = [
  { label: "GitHub", href: links.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon },
  { label: "Medium", href: links.medium, Icon: MediumIcon },
];

function Photo() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-[22rem]">
      <div aria-hidden="true" className="absolute -inset-4 -z-10 rotate-3 rounded-[2.25rem] bg-accent/10" />
      <div aria-hidden="true" className="absolute -inset-4 -z-10 -rotate-2 rounded-[2.25rem] border border-accent/20" />
      {failed ? (
        <div className="grid aspect-square w-full place-items-center rounded-[2rem] bg-surface text-6xl font-bold text-accent shadow-card">
          PS
        </div>
      ) : (
        <img
          src={profile.avatar}
          alt={profile.name}
          width="352"
          height="352"
          onError={() => setFailed(true)}
          className="aspect-square w-full rounded-[2rem] border-4 border-surface object-cover shadow-card"
        />
      )}
      <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-fg shadow-card">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        Backend Engineer at {profile.company}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -top-48 right-[-10%] -z-10 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 pb-16 pt-14 md:px-8 md:pt-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="inline-flex items-center gap-1.5 text-sm font-medium text-subtle">
            <PinIcon />
            {profile.location}
          </p>
          <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-fg text-balance sm:text-6xl">
            Hi, I&apos;m Prajjawal.
            <span className="mt-2 block bg-gradient-to-r from-accent to-violet-600 bg-clip-text dark:to-violet-400 text-transparent">
              I build fast APIs and real-time data pipelines.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Backend engineer working with <strong className="font-semibold text-fg">Django, FastAPI, Spring Boot and gRPC</strong>,
            streaming data with <strong className="font-semibold text-fg">Kafka, WarpStream, CDC and ClickHouse</strong>, and
            running it on <strong className="font-semibold text-fg">AWS, Docker and Kubernetes</strong>, with a habit of cutting cloud costs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-on-accent shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              View my work
              <ArrowUpRightIcon />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line-strong bg-surface px-6 py-3.5 font-semibold text-fg transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <DownloadIcon width={18} height={18} />
              Download resume
            </a>
            <ul className="flex items-center gap-1 sm:ml-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-xl text-muted transition-colors hover:bg-surface hover:text-accent"
                  >
                    <Icon width={20} height={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Photo />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-6 md:px-8">
        <dl className="grid grid-cols-2 overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-card lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`p-5 md:p-6 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-extrabold tracking-tight text-fg md:text-4xl">{stat.value}</dd>
              <dd className="mt-1 text-sm leading-5 text-subtle">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
