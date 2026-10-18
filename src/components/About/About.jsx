import { links } from "../../data/profile";
import Section from "../Section/Section";

const inlineLink =
  "font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent";

const highlights = [
  { label: "Focus", value: "Backend systems at scale" },
  { label: "Interests", value: "System design & performance" },
  { label: "Core stack", value: "Django · Kafka · PostgreSQL" },
];

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Backend engineer building for scale, reliability, and speed."
    >
      <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
        <div className="space-y-5 text-base leading-8 text-muted md:text-lg">
          <p>
            I work on scalable and reliable backend systems, with hands-on
            experience across Django, REST APIs, Kafka, PostgreSQL, Redis, and
            ClickHouse. I enjoy system design, performance optimization, and
            turning backend complexity into dependable product infrastructure.
          </p>
          <p>
            My GitHub profile is the source for the technical stack, featured
            projects, and coding profile links used here. For professional
            networking, you can also connect with me on{" "}
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={inlineLink}>
              LinkedIn
            </a>{" "}
            or explore my repositories on{" "}
            <a href={links.github} target="_blank" rel="noreferrer" className={inlineLink}>
              GitHub
            </a>
            .
          </p>
        </div>

        <dl className="divide-y divide-line self-start rounded-[var(--radius-card)] border border-line bg-surface">
          {highlights.map((item) => (
            <div key={item.label} className="px-5 py-4">
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">
                {item.label}
              </dt>
              <dd className="mt-1 font-medium text-fg">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

export default About;
