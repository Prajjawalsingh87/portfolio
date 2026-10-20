import Section from "../Section/Section";
import { skillGroups, slug } from "../../data/content";

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use every day.">
      <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-card">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            id={`skill-${slug(group.title)}`}
            className="grid gap-3 border-b border-line px-5 py-5 last:border-b-0 md:grid-cols-[11rem_1fr] md:items-center md:px-7"
          >
            <h3 className="font-display font-bold text-fg">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-line bg-ink px-3 py-1.5 text-[0.94rem] font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
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
