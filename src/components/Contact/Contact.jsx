function Contact() {
  const linkedInUrl = "https://www.linkedin.com/in/prajjawal-singh-1723621ab/";
  const githubUrl = "https://github.com/Prajjawalsingh87";
  const leetcodeUrl = "https://leetcode.com/u/sprajjawalsingh/";
  const codeforcesUrl = "https://codeforces.com/profile/singhprajjawal87";

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Connect through my verified profiles.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            GitHub is the source of my technical portfolio. LinkedIn and coding
            profiles are linked for professional networking and problem-solving
            activity.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 p-5 transition hover:bg-slate-800"
            >
              <p className="text-sm text-slate-400">LinkedIn</p>
              <p className="mt-2 font-semibold text-white">Prajjawal Singh</p>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 p-5 transition hover:bg-slate-800"
            >
              <p className="text-sm text-slate-400">GitHub</p>
              <p className="mt-2 font-semibold text-white">Prajjawalsingh87</p>
            </a>
            <a
              href={leetcodeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 p-5 transition hover:bg-slate-800"
            >
              <p className="text-sm text-slate-400">LeetCode</p>
              <p className="mt-2 font-semibold text-white">sprajjawalsingh</p>
            </a>
            <a
              href={codeforcesUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 p-5 transition hover:bg-slate-800"
            >
              <p className="text-sm text-slate-400">Codeforces</p>
              <p className="mt-2 font-semibold text-white">singhprajjawal87</p>
            </a>
            <a
              href="/resume.pdf"
              className="rounded-xl bg-cyan-400 p-5 text-slate-950 transition hover:bg-cyan-300 sm:col-span-2"
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
