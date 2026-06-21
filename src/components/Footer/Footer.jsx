function Footer() {
  const githubUrl = "https://github.com/Prajjawalsingh87";

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2026 Prajjawal Singh. All rights reserved.</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-300 hover:text-cyan-200"
        >
          GitHub Profile
        </a>
      </div>
    </footer>
  );
}

export default Footer;
