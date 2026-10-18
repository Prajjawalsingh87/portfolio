import { useEffect, useState } from "react";
import { links, navLinks, profile } from "../../data/profile";
import { CloseIcon, GitHubIcon, MenuIcon } from "../Icons/Icons";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-ink/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8"
      >
        <a
          href="#home"
          onClick={close}
          className="flex items-center gap-2.5 font-semibold tracking-tight text-fg"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-ink"
          >
            PS
          </span>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-raised hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg border border-line-strong px-3.5 py-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            <GitHubIcon width={16} height={16} />
            GitHub
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-lg text-fg transition-colors hover:bg-raised md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-fg transition-colors hover:bg-raised"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-accent transition-colors hover:bg-raised"
              >
                <GitHubIcon width={18} height={18} />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
