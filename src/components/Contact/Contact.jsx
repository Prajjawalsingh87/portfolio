import { links, profile } from "../../data/profile";
import {
  ArrowUpRightIcon,
  ChartIcon,
  CodeIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../Icons/Icons";
import Section from "../Section/Section";

const profiles = [
  { label: "LinkedIn", handle: profile.name, href: links.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", handle: "Prajjawalsingh87", href: links.github, Icon: GitHubIcon },
  { label: "LeetCode", handle: "sprajjawalsingh", href: links.leetcode, Icon: CodeIcon },
  { label: "Codeforces", handle: "singhprajjawal87", href: links.codeforces, Icon: ChartIcon },
];

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Connect through my verified profiles."
      intro="GitHub is the source of my technical portfolio. LinkedIn and coding profiles are linked for professional networking and problem-solving activity."
      className="bg-surface/40"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map(({ label, handle, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-raised text-fg transition-colors group-hover:bg-accent-soft group-hover:text-accent">
                <Icon />
              </span>
              <ArrowUpRightIcon className="text-subtle transition-colors group-hover:text-accent" />
            </div>
            <p className="mt-5 text-sm text-subtle">{label}</p>
            <p className="mt-1 break-all font-medium text-fg">{handle}</p>
          </a>
        ))}
      </div>

      <div className="mt-4 flex flex-col items-start justify-between gap-5 rounded-[var(--radius-card)] border border-accent/30 bg-accent-soft p-6 sm:flex-row sm:items-center md:p-8">
        <div>
          <p className="text-lg font-semibold text-fg">Resume</p>
          <p className="mt-1 text-muted">Get the full picture of my background in one PDF.</p>
        </div>
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-ink transition-colors hover:bg-accent-strong sm:w-auto"
        >
          <DownloadIcon width={18} height={18} />
          Download PDF
        </a>
      </div>
    </Section>
  );
}

export default Contact;
