function Navbar() {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="text-xl font-bold tracking-tight text-cyan-300">
          Prajjawal Singh
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="transition hover:text-cyan-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
