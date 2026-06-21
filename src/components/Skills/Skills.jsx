const skills = [
  "Python",
  "C++",
  "JavaScript",
  "Django",
  "FastAPI",
  "REST APIs",
  "Kafka",
  "PostgreSQL",
  "MySQL",
  "ClickHouse",
  "Redis",
  "Docker",
  "Git",
  "Linux",
  "Prometheus",
  "Grafana",
  "System Design",
];

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Skills
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Backend stack from my GitHub profile.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-5 text-center font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
