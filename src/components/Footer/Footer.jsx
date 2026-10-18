import { links, profile } from "../../data/profile";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "../Icons/Icons";

function Footer() {
  const year = new Date().getFullYear();
  const social = [
    { label: "GitHub", href: links.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon },
    { label: "Medium", href: links.medium, Icon: MediumIcon },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-1">
          {social.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-raised hover:text-fg"
              >
                <Icon width={18} height={18} />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#home"
              className="ml-2 rounded-lg px-2 py-2 text-muted transition-colors hover:text-fg"
            >
              Back to top ↑
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
