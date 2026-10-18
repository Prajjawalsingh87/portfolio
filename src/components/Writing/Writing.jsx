import { links } from "../../data/profile";
import { ArrowUpRightIcon, MediumIcon } from "../Icons/Icons";
import Section from "../Section/Section";

const post = (slug) => `https://medium.com/@singhprajjawal87/${slug}`;

const articles = [
  {
    title: "Kafka vs WarpStream: same Kafka API, a very different engine",
    date: "Oct 2026",
    href: post("kafka-vs-warpstream-same-kafka-api-a-very-different-engine-1db5f5117e8b"),
  },
  {
    title: "Understanding PACELC and Why R + W > N Matters in Distributed Systems",
    date: "Jul 2026",
    href: post("understanding-pacelc-and-why-r-w-n-matters-in-distributed-systems-73aa99447480"),
  },
  {
    title: "Kubernetes Architecture Explained: From Pod Creation to Deployments, ReplicaSets, and Controllers",
    date: "Jun 2026",
    href: post("kubernetes-architecture-explained-from-pod-creation-to-deployments-replicasets-and-controllers-ee9036ea8ea8"),
  },
  {
    title: "PostgreSQL Shared Memory Architecture",
    date: "Jun 2026",
    href: post("2-postgresql-shared-memory-architecture-aa78436ee54e"),
  },
  {
    title: "How PostgreSQL actually works under the hood",
    date: "May 2026",
    href: post("how-postgresql-actually-works-under-the-hood-056ae22aae1b"),
  },
];

function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="I write about how systems really work."
      action={
        <a
          href={links.medium}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 self-start font-medium text-accent transition-colors hover:text-accent-strong md:self-auto"
        >
          <MediumIcon width={18} height={18} />
          All posts on Medium
          <ArrowUpRightIcon />
        </a>
      }
    >
      <ul className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-card">
        {articles.map((article) => (
          <li key={article.href}>
            <a
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 px-5 py-5 transition-colors hover:bg-ink md:px-7"
            >
              <span className="min-w-0">
                <span className="block font-display text-lg font-bold leading-snug text-fg group-hover:text-accent">{article.title}</span>
                <span className="mt-1 block text-sm text-subtle">{article.date} · Medium</span>
              </span>
              <ArrowUpRightIcon className="shrink-0 text-subtle transition-colors group-hover:text-accent" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Writing;
