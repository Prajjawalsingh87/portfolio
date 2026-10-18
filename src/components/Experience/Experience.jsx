import { profile } from "../../data/profile";
import Section from "../Section/Section";

const highlights = [
  "Integrated a CDN layer that cut static-asset delivery costs by 90% and reduced global page-load times by 60% for 50K+ active users.",
  "Containerized backend services with Docker and deployed them on Kubernetes using Helm charts and Ingress routing behind a load balancer, supporting a 99.9% uptime SLA.",
  "Configured Nginx as a reverse proxy and load balancer for backend services handling high-volume, real-time data streams.",
  "Automated the user-data ETL pipeline (Kafka → ClickHouse) for 500K+ daily events, shrinking reporting latency from hours to under 2 minutes, with replication, CQRS and Event Sourcing.",
  "Built low-latency REST and FastAPI endpoints (sub-50ms p99) secured with OAuth2/JWT, using Repository, Factory and Strategy patterns.",
  "Implemented the Ramer–Douglas–Peucker algorithm, shrinking GPS coordinate payloads by ~90% while preserving spatial accuracy.",
  "Led system design reviews on PostgreSQL sharding and indexing, Redis caching, ScyllaDB write optimisation and CAP trade-offs.",
  "Debugged production issues across logs, metrics, databases and services, shipping tested changes faster with AI coding tools.",
];

const stack = ["FastAPI", "Kafka", "ClickHouse", "PostgreSQL", "Redis", "ScyllaDB", "Docker", "Kubernetes", "Helm", "Nginx", "AWS", "CDN"];

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I work." className="bg-surface/40">
      <article className="rounded-[var(--radius-card)] border border-line bg-surface p-6 md:p-8">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-fg">
              Backend Engineer · {profile.company}
            </h3>
            <p className="mt-1 text-muted">Full-time · Delhi, India</p>
          </div>
          <p className="inline-flex items-center gap-2 self-start rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Jul 2025 – Present
          </p>
        </div>

        <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-muted">
              <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6" aria-label="Technologies">
          {stack.map((tag) => (
            <li key={tag} className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}

export default Experience;
