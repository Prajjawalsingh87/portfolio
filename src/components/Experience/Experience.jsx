import { profile } from "../../data/profile";
import Section from "../Section/Section";

const impact = [
  { value: "90%", label: "lower static-asset delivery cost (CDN)" },
  { value: "60%", label: "faster global page loads for 50K+ users" },
  { value: "99.9%", label: "uptime SLA on Kubernetes + Helm" },
  { value: "<2 min", label: "reporting latency, down from hours" },
];

const work = [
  {
    title: "Real-time data pipeline",
    text: "Automated the Kafka → ClickHouse ETL for 500K+ daily events, with replication for high availability and CQRS/Event Sourcing for audit-ready data.",
  },
  {
    title: "Low-latency APIs",
    text: "Built REST and FastAPI endpoints at sub-50 ms p99, secured with OAuth2/JWT and layered with Repository, Factory and Strategy patterns.",
  },
  {
    title: "Infrastructure",
    text: "Containerized services with Docker, deployed on Kubernetes with Helm and Ingress behind a load balancer, and set up Nginx as reverse proxy.",
  },
  {
    title: "Performance",
    text: "Added a CDN layer for static assets and implemented Ramer–Douglas–Peucker to shrink GPS payloads by ~90% for faster maps.",
  },
  {
    title: "System design",
    text: "Led design reviews on PostgreSQL sharding and indexing, Redis caching, ScyllaDB write optimisation and CAP trade-offs.",
  },
  {
    title: "Production support",
    text: "Debugged issues across logs, metrics, databases and services, shipping tested fixes faster with AI coding tools.",
  },
];

const stack = ["FastAPI", "Kafka", "ClickHouse", "PostgreSQL", "Redis", "ScyllaDB", "Docker", "Kubernetes", "Helm", "Nginx", "AWS"];

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="What I've shipped at work." className="bg-surface">
      <article className="grid gap-10 lg:grid-cols-[17rem_1fr]">
        <header className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-fg font-display text-lg font-bold text-surface">T</span>
            <div>
              <h3 className="text-xl font-bold text-fg">{profile.company}</h3>
              <p className="text-sm text-subtle">Delhi, India · Full-time</p>
            </div>
          </div>
          <p className="mt-5 font-semibold text-fg">Backend Engineer</p>
          <p className="mt-1 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Jul 2025 – Present
          </p>
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
            {stack.map((tag) => (
              <li key={tag} className="rounded-lg bg-raised px-2.5 py-1 text-sm font-medium text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <div>
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {impact.map((item) => (
              <div key={item.value} className="flex flex-col-reverse rounded-2xl bg-accent-soft p-4">
                <dt className="mt-1 text-sm leading-5 text-muted">{item.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-accent md:text-3xl">{item.value}</dd>
              </div>
            ))}
          </dl>

          <ol className="relative mt-8 space-y-6 border-l-2 border-line pl-6">
            {work.map((item) => (
              <li key={item.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.95rem] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-surface bg-accent ring-2 ring-accent/20"
                />
                <h4 className="font-semibold text-fg">{item.title}</h4>
                <p className="mt-1 leading-7 text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </Section>
  );
}

export default Experience;
