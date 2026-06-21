function Hero() {
  return (
    <section id="home" className="overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Full Stack Developer
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
            Building clean web experiences with React and modern tools.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am Prajjawal Singh, a developer focused on responsive interfaces,
            practical product thinking, and reliable frontend foundations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">Current focus</p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Frontend Development
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                React, Tailwind CSS, JavaScript, reusable components, and
                polished responsive layouts.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-3xl font-bold text-cyan-300">10+</p>
                  <p className="mt-1 text-sm text-slate-400">Skills</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-3xl font-bold text-cyan-300">3</p>
                  <p className="mt-1 text-sm text-slate-400">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
