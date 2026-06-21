function Hero() {
  const linkedInUrl = "https://www.linkedin.com/in/prajjawal-singh-1723621ab/";
  const githubUrl = "https://github.com/Prajjawalsingh87";

  return (
    <section id="home" className="overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Backend Developer
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white md:text-7xl">
            Prajjawal Singh builds scalable APIs and reliable distributed systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Backend engineer focused on Django, Kafka, databases, performance
            optimization, and system design. Currently associated with Tailnode
            and based in Gurugram, Haryana.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View GitHub
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              View LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <img
                src="https://github.com/Prajjawalsingh87.png"
                alt="Prajjawal Singh GitHub avatar"
                className="mb-6 h-20 w-20 rounded-2xl border border-white/10"
              />
              <p className="text-sm text-slate-400">Current focus</p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Scalable Backend Systems
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Django REST APIs, Kafka pipelines, PostgreSQL, Redis,
                ClickHouse, FastAPI, Docker, Linux, Prometheus, and Grafana.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-3xl font-bold text-cyan-300">8</p>
                  <p className="mt-1 text-sm text-slate-400">Repos</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-4">
                  <p className="text-3xl font-bold text-cyan-300">2025</p>
                  <p className="mt-1 text-sm text-slate-400">NIT Trichy</p>
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
