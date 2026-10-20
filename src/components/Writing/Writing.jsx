import { links } from "../../data/profile";
import { ArrowUpRightIcon, MediumIcon } from "../Icons/Icons";
import Section from "../Section/Section";
import { articles, slug } from "../../data/content";

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
          <li key={article.href} id={`article-${slug(article.title)}`}>
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
