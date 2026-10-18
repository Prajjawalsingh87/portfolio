import { links } from "../../data/profile";
import { ArrowUpRightIcon, GitHubIcon, GlobeIcon } from "../Icons/Icons";
import Section from "../Section/Section";

const gh = (repo) => `https://github.com/Prajjawalsingh87/${repo}`;

const projects = [
  {
    title: "Orbit — Social Media App",
    description:
      "Full-stack social platform with auth, OTP signup, posts, likes, follows and feeds. REST APIs power a responsive React frontend; MongoDB compound indexes cut average feed query time by 70%.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://social-media-application-7gjn.vercel.app",
    repo: gh("Social-media-application"),
  },
  {
    title: "SnapLink — URL Shortener",
    description:
      "Base62 short links with custom aliases, expiry and click analytics. Redirects are cached in Redis; PostgreSQL stores per-click data. Dockerized with docker-compose.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    live: "https://url-shortner-1-xyqj.onrender.com",
    repo: gh("URL_Shortner"),
  },
  {
    title: "Quiz Competition Platform",
    description:
      "Timed quiz game: play solo or create and join rooms by code, with countdowns, streaks, speed bonuses, an answer review and saved history.",
    tags: ["React", "React Router", "Tailwind CSS"],
    live: "https://quiz-competition-plum.vercel.app",
    repo: gh("Quiz-Competition"),
  },
  {
    title: "File Agent",
    description:
      "LLM agent that plans and runs file operations through a tool registry, exposed as a CLI and a FastAPI service, with health checks and Docker.",
    tags: ["Python", "FastAPI", "LLM", "Groq"],
    live: "https://file-agent.onrender.com",
    repo: gh("FILE_AGENT"),
  },
  {
    title: "FX Live — Currency Converter",
    description:
      "Real-time converter for 200+ currencies, crypto and metals: converts as you type, searchable picker with flags, popular rates and a fallback rate source.",
    tags: ["React", "Vite", "Tailwind CSS", "REST API"],
    live: "https://real-time-currencyconverter.vercel.app",
    repo: gh("Real-time-currencyconverter"),
  },
  {
    title: "Segment Tree Solutions",
    description:
      "Organised C++ solutions for the ITMO Academy segment tree course plus CSES, Codeforces and AtCoder problems, with a key idea per problem and CI builds.",
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

const button =
  "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors";

function ProjectLinks({ live, repo, title }) {
  return (
    <div className="flex flex-wrap gap-2">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} live demo`}
          className={`${button} border-accent/40 bg-accent-soft text-accent hover:bg-accent hover:text-ink`}
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
        className={`${button} border-line-strong text-fg hover:border-accent hover:text-accent`}
      >
        <GitHubIcon width={16} height={16} />
        GitHub
      </a>
    </div>
  );
}

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
            <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/40">
              <span className="font-mono text-sm text-subtle">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">{project.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
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
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">More builds</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {miniApps.map((app) => (
            <li
              key={app.title}
              className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3"
            >
              <span className="font-medium text-fg">{app.title}</span>
              <ProjectLinks {...app} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Projects;
