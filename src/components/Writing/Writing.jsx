import { links } from "../../data/profile";
import { slug } from "../../data/content";
import { useArticles } from "../../data/live";
import { ArrowUpRightIcon, MediumIcon } from "../Icons/Icons";
import Section from "../Section/Section";

const SHOWN = 6;

function ArticleSkeleton() {
  return (
    <li className="flex animate-pulse items-center gap-4 px-5 py-5 md:px-7" aria-hidden="true">
      <span className="min-w-0 flex-1 space-y-2.5">
        <span className="block h-5 w-3/4 rounded bg-raised" />
        <span className="block h-3.5 w-24 rounded bg-raised" />
        <span className="block h-3.5 w-full max-w-xl rounded bg-raised" />
      </span>
      <span className="hidden h-16 w-24 shrink-0 rounded-xl bg-raised sm:block" />
    </li>
  );
}

function Writing() {
  const { status, articles } = useArticles();

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
      <ul
        aria-busy={status === "loading"}
        className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-card"
      >
        {status === "loading"
          ? Array.from({ length: 4 }, (_, i) => <ArticleSkeleton key={i} />)
          : articles.slice(0, SHOWN).map((article) => (
              <li key={article.href} id={`article-${slug(article.title)}`}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 px-5 py-5 transition-colors hover:bg-ink md:px-7"
                >
                  <span className="min-w-0">
                    <span className="block font-display text-lg font-bold leading-snug text-fg group-hover:text-accent">{article.title}</span>
                    <span className="mt-1 block text-sm text-subtle">{[article.date, "Medium"].filter(Boolean).join(" · ")}</span>
                    {article.summary && (
                      <span className="mt-2 line-clamp-2 block max-w-2xl text-[0.94rem] leading-6 text-muted">{article.summary}</span>
                    )}
                  </span>
                  <span className="flex shrink-0 items-center gap-4">
                    {article.image && (
                      <img
                        src={article.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={(event) => (event.currentTarget.style.display = "none")}
                        width="112"
                        height="72"
                        className="hidden h-[4.5rem] w-28 rounded-xl border border-line object-cover sm:block"
                      />
                    )}
                    <ArrowUpRightIcon className="text-subtle transition-colors group-hover:text-accent" />
                  </span>
                </a>
              </li>
            ))}
      </ul>
    </Section>
  );
}

export default Writing;
