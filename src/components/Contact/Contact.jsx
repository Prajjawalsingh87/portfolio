function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Have a project or opportunity?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            I am open to internships, freelance work, collaboration, and
            frontend development roles.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:prajjawalsingh@example.com"
              className="rounded-xl bg-slate-900 p-5 transition hover:bg-slate-800"
            >
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-2 font-semibold text-white">prajjawalsingh@example.com</p>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 p-5 transition hover:bg-slate-800"
            >
              <p className="text-sm text-slate-400">GitHub</p>
              <p className="mt-2 font-semibold text-white">github.com</p>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 p-5 transition hover:bg-slate-800"
            >
              <p className="text-sm text-slate-400">LinkedIn</p>
              <p className="mt-2 font-semibold text-white">linkedin.com</p>
            </a>
            <a
              href="/resume.pdf"
              className="rounded-xl bg-cyan-400 p-5 text-slate-950 transition hover:bg-cyan-300"
            >
              <p className="text-sm font-semibold">Resume</p>
              <p className="mt-2 font-bold">Download PDF</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
