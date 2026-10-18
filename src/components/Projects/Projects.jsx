import { links } from "../../data/profile";
import { ArrowUpRightIcon, GitHubIcon } from "../Icons/Icons";
import Section from "../Section/Section";

const projects = [
  {
    title: "Distributed Event Processing Platform",
    description:
      "High-throughput Kafka-based pipeline for real-time event processing with durable backend storage.",
    tags: ["Kafka", "Django", "PostgreSQL", "Redis"],
  },
  {
    title: "Real-Time Analytics Engine",
    description:
      "ClickHouse-powered analytics backend designed for fast reads and practical product metrics.",
    tags: ["ClickHouse", "FastAPI", "Analytics"],
  },
  {
    title: "College Name Matching System",
    description:
      "High-accuracy fuzzy matching engine for normalizing and comparing college names.",
    tags: ["Python", "Pandas", "RapidFuzz"],
  },
  {
    title: "Distributed Rate Limiter",
    description:
      "Token-bucket based distributed rate limiter backed by Redis and Lua scripting.",
    tags: ["Redis", "Lua", "Python"],
  },
  {
    title: "Real-Time Currency Converter",
    description:
      "API-based currency conversion project listed in the public GitHub project categories.",
    tags: ["JavaScript", "API", "Frontend"],
    href: "https://github.com/prajjawalsingh87/real-time-currencyconverter",
  },
  {
    title: "NoteVault",
    description:
      "React application project listed as a medium-level project on the GitHub profile.",
    tags: ["React", "App", "UI"],
    href: "https://github.com/prajjawalsingh87/NoteVault",
  },
];

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      action={
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 self-start font-medium text-accent transition-colors hover:text-accent-strong md:self-auto"
        >
          See GitHub profile
          <ArrowUpRightIcon />
        </a>
      }
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.title}>
            <article className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/40 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {project.href && (
                  <GitHubIcon
                    width={18}
                    height={18}
                    className="text-subtle transition-colors group-hover:text-fg"
                  />
                )}
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="after:absolute after:inset-0 after:rounded-[var(--radius-card)] focus-visible:outline-none"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-muted">{project.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {project.href && (
                <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors group-hover:text-accent">
                  Open repository
                  <ArrowUpRightIcon />
                </p>
              )}
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Projects;
