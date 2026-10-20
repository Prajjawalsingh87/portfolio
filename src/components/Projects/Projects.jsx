import { useState } from "react";
import { links } from "../../data/profile";
import { ArrowUpRightIcon, GitHubIcon, GlobeIcon } from "../Icons/Icons";
import Section from "../Section/Section";

const gh = (repo) => `https://github.com/Prajjawalsingh87/${repo}`;

const projects = [
  {
    title: "Orbit — Social Media App",
    description:
      "Full-stack social app: OTP signup, posts, likes, follows and a feed. MongoDB compound indexes cut feed queries by 70%.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://social-media-application-7gjn.vercel.app",
    repo: gh("Social-media-application"),
  },
  {
    title: "SnapLink — URL Shortener",
    description:
      "Short links with custom aliases, expiry and click analytics. Redis caches redirects; PostgreSQL stores every click.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    live: "https://url-shortner-1-xyqj.onrender.com",
    repo: gh("URL_Shortner"),
  },
  {
    title: "Quiz Competition Platform",
    description:
      "Timed solo quizzes with topic selection, answer explanations and results saved on your device.",
    tags: ["React", "React Router", "Tailwind CSS"],
    live: "https://quiz-competition-plum.vercel.app",
    repo: gh("Quiz-Competition"),
  },
  {
    title: "File Agent",
    description:
      "An LLM agent that plans and runs file operations through tools, served as a CLI and a FastAPI API.",
    tags: ["Python", "FastAPI", "LLM", "Groq"],
    live: "https://file-agent.onrender.com",
    repo: gh("FILE_AGENT"),
  },
  {
    title: "FX Live — Currency Converter",
    description:
      "Live rates for 200+ currencies and crypto. Converts as you type, with a searchable picker and popular rates.",
    tags: ["React", "Vite", "Tailwind CSS", "REST API"],
    live: "https://real-time-currencyconverter.vercel.app",
    repo: gh("Real-time-currencyconverter"),
  },
  {
    title: "Segment Tree Solutions",
    description:
      "C++ solutions for the ITMO segment tree course, CSES, Codeforces and AtCoder, each with its key idea.",
    tags: ["C++", "DSA", "Segment Tree"],
    repo: gh("segment-treeITMO-solutions"),
  },
];

const miniApps = [
  { title: "Todo", live: "https://todo-chi-vert.vercel.app", repo: gh("TODO") },
  { title: "Password Generator", live: "https://passwordgenerator-three-steel.vercel.app", repo: gh("passwordgenerator") },
  { title: "Color Playground", live: "https://bacgroundcolorchnager.vercel.app", repo: gh("bacgroundcolorchnager") },
  { title: "LLD in C++", repo: gh("lld-learning") },
  { title: "System Design in C++", repo: gh("system_design") },
];

const tints = ["bg-blue-600", "bg-violet-600", "bg-emerald-600", "bg-amber-500", "bg-sky-600", "bg-rose-600"];

const button =
  "inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm font-semibold transition-colors";

function ProjectLinks({ live, repo, title, compact = false }) {
  return (
    <div className={`flex gap-2 ${compact ? "shrink-0" : "flex-wrap"}`}>
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} live demo`}
          className={`${button} border-accent bg-accent text-on-accent hover:bg-accent-strong`}
        >
          <GlobeIcon />
          Live
        </a>
      )}
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        aria-label={`${title} source code on GitHub`}
        className={`${button} border-line-strong bg-surface text-fg hover:border-fg`}
      >
        <GitHubIcon width={16} height={16} />
        GitHub
      </a>
    </div>
  );
}

function Projects() {
  const [query, setQuery] = useState("");
  const visibleProjects = projects.filter(p => [p.title, p.description, ...p.tags].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built."
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
      <div className="studio-toolbar">
        <input className="studio-input" type="search" aria-label="Search projects" placeholder="Search projects or technologies…" value={query} onChange={e => setQuery(e.target.value)} />
        <span className="studio-note" role="status">{visibleProjects.length} projects</span>
      </div>
      {visibleProjects.length === 0 && <p className="studio-status">No matching projects. Try React, Python, or C++.</p>}
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <li key={project.title}>
            <article className="shadow-card hover:shadow-card-hover flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1">
              <span
                aria-hidden="true"
                className={`grid h-11 w-11 place-items-center rounded-xl font-display text-lg font-bold text-on-accent ${tints[index % tints.length]}`}
              >
                {project.title[0]}
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-fg">{project.title}</h3>
              <p className="mt-2 flex-1 leading-7 text-muted">{project.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-raised px-2.5 py-1 text-xs font-semibold text-muted">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-line pt-5">
                <ProjectLinks {...project} />
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <h3 className="font-display text-lg font-bold text-fg">More small builds</h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {miniApps.map((app) => (
            <li
              key={app.title}
              className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-card"
            >
              <span className="font-semibold text-fg">{app.title}</span>
              <ProjectLinks {...app} compact />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Projects;
