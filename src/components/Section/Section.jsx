function Section({ id, eyebrow, title, intro, action, children, className = "" }) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={`py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
            <h2
              id={headingId}
              className="mt-2 text-3xl font-bold tracking-tight text-fg text-balance md:text-[2.5rem] md:leading-tight"
            >
              {title}
            </h2>
            {intro && <p className="mt-4 text-lg leading-8 text-muted">{intro}</p>}
          </div>
          {action}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export default Section;
