import Section from "../Section/Section";

const skillGroups = [
  { title: "Languages", items: ["Java 17+", "Python", "C++", "SQL", "JavaScript"] },
  { title: "Frameworks", items: ["Spring Boot", "Spring MVC", "Hibernate/JPA", "FastAPI", "Django", "JUnit", "MapStruct", "Liquibase/Flyway"] },
  { title: "APIs & Auth", items: ["REST API design", "gRPC", "GraphQL", "Microservices", "OAuth2", "JWT"] },
  { title: "Integrations", items: ["Webhooks", "Idempotency keys", "Retries & replay", "Reconciliation", "HMAC signing", "JWS/JWE", "Payment gateways"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "ClickHouse", "ScyllaDB", "MongoDB", "Redis", "Memcached", "Query optimisation"] },
  { title: "Streaming", items: ["Kafka", "WarpStream", "CDC", "SQS", "RabbitMQ", "Event-driven", "CQRS", "Event sourcing", "Stream processing"] },
  { title: "Cloud & DevOps", items: ["AWS EKS · RDS · S3", "S3 Glacier & lifecycle", "Route 53", "Hosted zones", "Load balancers", "Nginx", "CDN", "Docker", "Kubernetes", "Helm", "Ingress", "GitHub Actions"] },
  { title: "Observability", items: ["OpenTelemetry", "SigNoz", "Grafana", "Tracing", "Structured logging"] },
  { title: "AI tooling", items: ["MCP (Model Context Protocol)", "Claude Code", "Cursor", "GitHub Copilot"] },
  { title: "Foundations", items: ["DSA", "System design", "Concurrency", "OOP", "Design patterns"] },
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use every day.">
      <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-card">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-3 border-b border-line px-5 py-5 last:border-b-0 md:grid-cols-[11rem_1fr] md:items-center md:px-7"
          >
            <h3 className="font-display font-bold text-fg">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-line bg-ink px-3 py-1.5 text-[0.94rem] font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
