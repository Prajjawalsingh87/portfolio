import { links } from "../../data/profile";
import { TrophyIcon } from "../Icons/Icons";
import Section from "../Section/Section";

const inlineLink =
  "font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent";

const achievements = [
  {
    label: "LeetCode Guardian",
    value: "2130 rating",
    detail: "Top 1.92% globally · 953 problems · 330+ day streak",
    href: links.leetcode,
  },
  {
    label: "CodeChef 4★",
    value: "Peak 1922",
    detail: "Rated contests and long challenges",
    href: links.codechef,
  },
  {
    label: "Codeforces Specialist",
    value: "Max ~1550",
    detail: "1,000+ DSA problems across platforms",
    href: links.codeforces,
  },
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
            I&apos;m a backend engineer with 1+ year of experience building
            production-grade systems and APIs with FastAPI, Django and
            Java/Spring Boot, deploying cloud-hosted services and real-time data
            pipelines. I work hands-on with REST API design, third-party
            integrations (webhooks, idempotency, retries), PostgreSQL/MySQL,
            Redis, Kafka, ClickHouse, AWS, Docker, Kubernetes and Nginx.
          </p>
          <p>
            I graduated from NIT Tiruchirappalli (B.Tech, ECE, 2025) and I&apos;m
            strong in DSA and CS fundamentals. I write about databases,
            distributed systems and Kubernetes on{" "}
            <a href={links.medium} target="_blank" rel="noreferrer" className={inlineLink}>
              Medium
            </a>
            , and my code lives on{" "}
            <a href={links.github} target="_blank" rel="noreferrer" className={inlineLink}>
              GitHub
            </a>
            .
          </p>
        </div>

        <ul className="space-y-3 self-start" aria-label="Competitive programming">
          {achievements.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-colors hover:border-accent/40"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                  <TrophyIcon />
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block font-semibold text-fg group-hover:text-accent">
                    {item.value}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">{item.detail}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default About;
