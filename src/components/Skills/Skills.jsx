import Section from "../Section/Section";

const skillGroups = [
  { title: "Languages", items: ["Java (17+)", "Python", "C++", "SQL", "JavaScript"] },
  {
    title: "Java & Frameworks",
    items: ["Spring Boot", "Spring MVC", "Dependency Injection", "Hibernate/JPA", "MapStruct", "Liquibase/Flyway", "JUnit"],
  },
  {
    title: "Backend & APIs",
    items: ["REST API Design", "Django", "FastAPI", "GraphQL", "OAuth2", "JWT", "Microservices"],
  },
  {
    title: "Third-Party Integrations",
    items: ["Webhooks", "Idempotency Keys", "Retries", "Reconciliation", "Replay Handling", "HMAC Signing", "JWS/JWE", "Payment Gateways"],
  },
  {
    title: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "Query Optimisation", "ClickHouse", "ScyllaDB", "MongoDB", "Redis", "Memcached"],
  },
  {
    title: "Messaging & Architecture",
    items: ["Apache Kafka", "SQS", "RabbitMQ", "Event-Driven", "CQRS", "Event Sourcing", "Stream Processing", "Distributed Systems"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EKS, RDS, S3, Secrets Manager)", "Docker", "Kubernetes", "Helm", "Ingress", "Nginx", "CDN", "Load Balancer", "GitHub Actions"],
  },
  {
    title: "Observability",
    items: ["OpenTelemetry", "SigNoz", "Grafana", "Structured Logging", "Distributed Tracing", "Metrics"],
  },
  {
    title: "Fundamentals & Patterns",
    items: ["DSA", "OOP", "Concurrency", "System Design", "Repository", "Factory", "Strategy", "Observer", "State Machine"],
  },
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="The stack I work with.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-colors hover:border-line-strong"
          >
            <h3 className="text-sm font-semibold text-fg">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-line bg-raised px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
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
