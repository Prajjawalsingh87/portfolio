import Section from "../Section/Section";

const skillGroups = [
  { title: "Languages", span: "lg:col-span-2", items: ["Python", "C++", "JavaScript"] },
  { title: "Backend & APIs", span: "lg:col-span-2", items: ["Django", "FastAPI", "REST APIs"] },
  {
    title: "Data & Messaging",
    span: "sm:col-span-2 lg:col-span-2",
    items: ["Kafka", "PostgreSQL", "MySQL", "ClickHouse", "Redis"],
  },
  {
    title: "Infrastructure & Observability",
    span: "lg:col-span-3",
    items: ["Docker", "Git", "Linux", "Prometheus", "Grafana"],
  },
  { title: "Engineering", span: "lg:col-span-3", items: ["System Design"] },
];

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Backend stack from my GitHub profile."
      className="bg-surface/40"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-colors hover:border-line-strong ${group.span}`}
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
