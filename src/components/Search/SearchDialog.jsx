import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ArrowUpRightIcon, CloseIcon, SearchIcon } from "../Icons/Icons";
import { createSearch, sectionDocs } from "./searchIndex";

let search;
const getSearch = () => (search ??= createSearch());

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Wraps every matched word in <mark>.
function Highlight({ text, terms }) {
  if (!terms?.length || !text) return text;
  const pattern = new RegExp(
    `(?<![\\p{L}\\p{N}])(${[...terms].sort((a, b) => b.length - a.length).map(escape).join("|")})(?![\\p{L}\\p{N}])`,
    "giu",
  );
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    i % 2 ? (
      <mark key={i} className="rounded-[3px] bg-accent/15 px-0.5 font-semibold text-accent-strong">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

// Long descriptions are trimmed to the part around the first match.
function snippet(text, terms, size = 130) {
  if (!text || text.length <= size) return text;
  const lower = text.toLowerCase();
  const hit = Math.min(...(terms ?? []).map((t) => lower.indexOf(t)).filter((i) => i >= 0), Infinity);
  if (!Number.isFinite(hit) || hit < size - 30) return `${text.slice(0, size).trimEnd()}…`;
  const start = Math.max(0, hit - 40);
  return `…${text.slice(start, start + size).trim()}…`;
}

function goTo(result) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const target = document.getElementById(result.target) ?? document.getElementById(result.section);
  if (!target) return;
  const isSection = target.id === result.section;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: isSection ? "start" : "center" });
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
  history.replaceState(null, "", `#${result.section}`);
  if (!isSection) {
    target.classList.remove("search-flash");
    void target.offsetWidth;
    target.classList.add("search-flash");
    window.setTimeout(() => target.classList.remove("search-flash"), 1800);
  }
}

function SearchDialog({ onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const returnFocus = useRef(null);
  const navigated = useRef(false);
  const ids = useId();

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return sectionDocs.map((s) => ({ id: `section:${s.id}`, kind: "Section", title: s.title, text: s.text, section: s.id, target: s.id }));
    return getSearch()(q);
  }, [query]);

  // Remember what had focus, lock page scroll, and restore both on close.
  useEffect(() => {
    returnFocus.current = document.activeElement;
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.documentElement.style.overflow = overflow;
      if (!navigated.current) returnFocus.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const select = (result) => {
    if (!result) return;
    // Open the link first so the browser treats it as a direct user action.
    if (result.url) window.open(result.url, "_blank", "noopener,noreferrer");
    navigated.current = true;
    onClose();
    requestAnimationFrame(() => goTo(result));
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (event.key === "Enter" && event.target === inputRef.current) {
      event.preventDefault();
      select(results[active]);
    } else if (event.key === "Tab") {
      // Keep keyboard focus inside the dialog.
      const focusable = panelRef.current.querySelectorAll("input, button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  const listId = `${ids}-list`;
  const optionId = (i) => `${ids}-option-${i}`;
  const hasQuery = query.trim().length > 0;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[8vh] sm:pt-[12vh]" onKeyDown={onKeyDown}>
      <div aria-hidden="true" className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${ids}-title`}
        className="relative flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-2xl"
      >
        <h2 id={`${ids}-title`} className="sr-only">
          Search the site
        </h2>
        <div className="flex items-center gap-3 border-b border-line px-4 sm:px-5">
          <SearchIcon className="shrink-0 text-subtle" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={results.length ? optionId(active) : undefined}
            aria-label="Search projects, skills, experience and articles"
            placeholder="Search projects, skills, articles…"
            autoComplete="off"
            spellCheck="false"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            className="search-input h-14 min-w-0 flex-1 bg-transparent text-base text-fg placeholder:text-subtle"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-subtle transition-colors hover:bg-raised hover:text-fg"
          >
            <CloseIcon width={18} height={18} />
          </button>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          {hasQuery ? `${results.length} result${results.length === 1 ? "" : "s"}` : ""}
        </p>

        <div className="overflow-y-auto overscroll-contain p-2">
          {!hasQuery && <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.12em] text-subtle">Jump to</p>}
          {hasQuery && results.length === 0 ? (
            <div className="px-4 py-10 text-center">
              <p className="font-semibold text-fg">No results for &ldquo;{query.trim()}&rdquo;</p>
              <p className="mt-1 text-sm text-subtle">Try a technology like Kafka, React or Kubernetes.</p>
            </div>
          ) : (
            <ul ref={listRef} id={listId} role="listbox" aria-label="Search results">
              {results.map((result, i) => (
                <li
                  key={result.id}
                  id={optionId(i)}
                  data-index={i}
                  role="option"
                  aria-selected={i === active}
                  onMouseMove={() => setActive(i)}
                  onClick={() => select(result)}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl px-3 py-3 ${i === active ? "bg-accent-soft" : ""}`}
                >
                  <span
                    className={`mt-0.5 w-[5.5rem] shrink-0 rounded-md px-2 py-0.5 text-center text-xs font-semibold ${
                      i === active ? "bg-accent text-on-accent" : "bg-raised text-muted"
                    }`}
                  >
                    {result.kind}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold leading-snug text-fg">
                      <Highlight text={result.title} terms={result.terms} />
                    </span>
                    {result.text && (
                      <span className="mt-0.5 block text-sm leading-6 text-muted">
                        <Highlight text={snippet(result.text, result.terms)} terms={result.terms} />
                      </span>
                    )}
                  </span>
                  {result.url && (
                    <span className="mt-0.5 flex shrink-0 items-center gap-1 text-xs font-medium text-subtle">
                      <span className="hidden sm:inline">Opens link</span>
                      <ArrowUpRightIcon width={14} height={14} />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden items-center gap-4 border-t border-line px-5 py-2.5 text-xs text-subtle sm:flex">
          <span><kbd className="kbd">↑</kbd> <kbd className="kbd">↓</kbd> to move</span>
          <span><kbd className="kbd">Enter</kbd> to open</span>
          <span><kbd className="kbd">Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}

export default SearchDialog;
