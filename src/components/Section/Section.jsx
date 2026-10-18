function Section({ id, eyebrow, title, intro, action, children, className = "" }) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-line py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
            <h2
              id={headingId}
              className="mt-3 text-3xl font-semibold tracking-tight text-fg text-balance md:text-4xl"
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">
                {intro}
              </p>
            )}
          </div>
          {action}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export default Section;
