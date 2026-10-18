import { profile } from "../../data/profile";
import Section from "../Section/Section";

const impact = [
  { value: "90%+", label: "lower S3 storage cost through archival planning" },
  { value: "60–70%", label: "cheaper streaming: self-hosted Kafka → WarpStream" },
  { value: "90%", label: "lower static-asset delivery cost with a CDN" },
  { value: "99.9%", label: "uptime SLA on Kubernetes + Helm" },
];

const work = [
  {
    title: "Real-time data pipeline & CDC",
    text: "Automated the Kafka → ClickHouse ETL for 500K+ daily events, cutting reporting latency from hours to under 2 minutes. Used CDC (change data capture) to stream database changes, with replication for high availability and CQRS/Event Sourcing for audit-ready data.",
  },
  {
    title: "Kafka → WarpStream migration",
    text: "Moved streaming from self-hosted Kafka to WarpStream (Kafka-compatible, backed by object storage), keeping the same Kafka API while cutting streaming cost by about 60–70%.",
  },
  {
    title: "S3 storage cost optimisation",
    text: "Planned and ran a storage strategy for millions of old objects: batched them into large archives, verified every file, and moved them to Glacier Deep Archive with lifecycle rules, reducing S3 storage cost by over 90%.",
  },
  {
    title: "APIs: Django, FastAPI, gRPC",
    text: "Built Django and FastAPI services and REST endpoints at sub-50 ms p99, secured with OAuth2/JWT, plus gRPC for fast service-to-service calls. Layered with Repository, Factory and Strategy patterns.",
  },
  {
    title: "Coordinate payload reduction",
    text: "Implemented a coordinate-reduction algorithm (Ramer–Douglas–Peucker) and served routes over gRPC, shrinking GPS coordinate responses by ~90% for faster map rendering.",
  },
  {
    title: "Infrastructure, networking & DNS",
    text: "Containerized services with Docker and deployed them on Kubernetes with Helm and Ingress. Configured load balancers and Nginx as reverse proxy, and managed DNS with Route 53 hosted zones. Added a CDN that made global page loads 60% faster for 50K+ users.",
  },
  {
    title: "AI tooling & MCP",
    text: "Hands-on with the Model Context Protocol (MCP) for AI tool integrations, and use Claude Code, Cursor and Copilot with careful code review to ship tested code faster.",
  },
  {
    title: "System design",
    text: "Led design reviews on PostgreSQL sharding and indexing, Redis caching, ScyllaDB write optimisation and CAP trade-offs.",
  },
  {
    title: "Production support",
    text: "Debugged production issues across logs, metrics, databases and service responses, and shipped tested fixes quickly.",
  },
];

const stack = ["Django", "FastAPI", "gRPC", "Kafka", "WarpStream", "CDC", "ClickHouse", "PostgreSQL", "Redis", "ScyllaDB", "AWS S3", "Route 53", "Docker", "Kubernetes", "Helm", "Nginx", "Load Balancer", "MCP"];

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
              <div key={item.value} className="flex flex-col-reverse justify-end rounded-2xl bg-accent-soft p-4">
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
