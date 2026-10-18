import { links } from "../../data/profile";
import { ArrowUpRightIcon } from "../Icons/Icons";
import Section from "../Section/Section";

const inlineLink = "font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent";

const facts = [
  { label: "Role", value: "Backend Engineer, TailNode" },
  { label: "Education", value: "B.Tech ECE, NIT Trichy (2021–25)" },
  { label: "Core stack", value: "Python · Java · FastAPI · Spring Boot" },
  { label: "Data", value: "Kafka · ClickHouse · PostgreSQL · Redis" },
  { label: "Infra", value: "AWS · Docker · Kubernetes · Helm" },
];

const ratings = [
  { site: "LeetCode", rating: "2130", badge: "Guardian · top 1.92%", href: links.leetcode, color: "bg-amber-500" },
  { site: "CodeChef", rating: "1922", badge: "4★ peak", href: links.codechef, color: "bg-orange-700" },
  { site: "Codeforces", rating: "~1550", badge: "Specialist", href: links.codeforces, color: "bg-cyan-600" },
];

function About() {
  return (
    <Section id="about" eyebrow="About me" title="I like backend problems that have to work at scale.">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <div className="space-y-5 text-lg leading-8 text-muted">
          <p>
            For the last year I&apos;ve been building production systems at TailNode: APIs that answer in under
            50&nbsp;ms, an event pipeline moving half a million events a day, and the Docker, Kubernetes and Nginx
            setup that keeps it all at 99.9% uptime.
          </p>
          <p>
            I care about clean API design, reliable integrations (webhooks, idempotency, retries) and knowing
            what my database is really doing. I write about that on{" "}
            <a href={links.medium} target="_blank" rel="noreferrer" className={inlineLink}>Medium</a>, and keep my
            problem-solving sharp with competitive programming: over 1,000 problems solved.
          </p>

          <ul className="grid gap-3 pt-2 sm:grid-cols-3">
            {ratings.map((r) => (
              <li key={r.site}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-line bg-surface p-4 shadow-card transition hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <span className="flex items-center justify-between text-sm font-medium text-subtle">
                    <span className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${r.color}`} aria-hidden="true" />
                      {r.site}
                    </span>
                    <ArrowUpRightIcon className="text-subtle transition-colors group-hover:text-accent" />
                  </span>
                  <span className="mt-2 block font-display text-2xl font-extrabold text-fg">{r.rating}</span>
                  <span className="block text-sm text-subtle">{r.badge}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <dl className="self-start overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-card">
          {facts.map((f) => (
            <div key={f.label} className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-line px-5 py-4 last:border-b-0">
              <dt className="text-sm font-medium text-subtle">{f.label}</dt>
              <dd className="font-medium text-fg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export default About;
