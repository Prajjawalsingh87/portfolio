import { profile } from "../../data/profile";
import Section from "../Section/Section";
import { experience, experienceStack, impact, slug } from "../../data/content";

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="What I've shipped at work." className="bg-surface">
      <article className="grid gap-10 lg:grid-cols-[17rem_1fr]">
        <header className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-fg font-display text-lg font-bold text-surface">T</span>
            <div>
              <h3 className="text-xl font-bold text-fg">{profile.company}</h3>
              <p className="text-sm text-subtle">Delhi, India · Full-time</p>
            </div>
          </div>
          <p className="mt-5 font-semibold text-fg">Backend Engineer</p>
          <p className="mt-1 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Jul 2025 – Present
          </p>
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
            {experienceStack.map((tag) => (
              <li key={tag} className="rounded-lg bg-raised px-2.5 py-1 text-sm font-medium text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <div>
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {impact.map((item) => (
              <div key={item.value} className="flex flex-col-reverse justify-end rounded-2xl bg-accent-soft p-4">
                <dt className="mt-1 text-sm leading-5 text-muted">{item.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-accent md:text-3xl">{item.value}</dd>
              </div>
            ))}
          </dl>

          <ol className="relative mt-8 space-y-6 border-l-2 border-line pl-6">
            {experience.map((item) => (
              <li key={item.title} id={`exp-${slug(item.title)}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.95rem] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-surface bg-accent ring-2 ring-accent/20"
                />
                <h4 className="font-semibold text-fg">{item.title}</h4>
                <p className="mt-1 leading-7 text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </Section>
  );
}

export default Experience;
