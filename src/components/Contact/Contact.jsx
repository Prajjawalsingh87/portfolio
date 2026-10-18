import { links, profile } from "../../data/profile";
import {
  ArrowUpRightIcon,
  ChartIcon,
  CodeIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MediumIcon,
} from "../Icons/Icons";

const profiles = [
  { label: "LinkedIn", handle: "Prajjawal Singh", href: links.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", handle: "Prajjawalsingh87", href: links.github, Icon: GitHubIcon },
  { label: "Medium", handle: "@singhprajjawal87", href: links.medium, Icon: MediumIcon },
  { label: "LeetCode", handle: "sprajjawalsingh", href: links.leetcode, Icon: CodeIcon },
  { label: "CodeChef", handle: "singhprajjawal", href: links.codechef, Icon: ChartIcon },
  { label: "Codeforces", handle: "singhprajjawal87", href: links.codeforces, Icon: ChartIcon },
];

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-fg px-6 py-12 text-center md:px-12 md:py-16">
          <div aria-hidden="true" className="absolute -top-24 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/40 blur-3xl" />
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">Contact</p>
          <h2 id="contact-heading" className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-white text-balance md:text-5xl">
            Let&apos;s build something reliable together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-300">
            Working on something backend, data or platform? The fastest way to reach me is email.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-fg transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <MailIcon width={18} height={18} />
              {profile.email}
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60"
            >
              <DownloadIcon width={18} height={18} />
              Resume (PDF)
            </a>
          </div>
        </div>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map(({ label, handle, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card transition hover:-translate-y-0.5 hover:border-accent/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-raised text-fg transition-colors group-hover:bg-accent group-hover:text-on-accent">
                  <Icon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-subtle">{label}</span>
                  <span className="block truncate font-semibold text-fg">{handle}</span>
                </span>
                <ArrowUpRightIcon className="text-subtle transition-colors group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
