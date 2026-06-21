const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React, Vite, and Tailwind CSS.",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Task Manager",
    description:
      "A productivity app concept for tracking tasks, priorities, and daily progress.",
    tags: ["JavaScript", "React", "UI"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A clean dashboard concept that displays weather data with readable cards.",
    tags: ["API", "CSS", "Frontend"],
  },
];

function Projects() {
  return (
    <section id="projects" className="border-y border-white/10 bg-slate-900/60 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Projects
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white">
              Selected work.
            </h2>
          </div>
          <a href="#contact" className="font-semibold text-cyan-300 hover:text-cyan-200">
            Let us build something
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-cyan-300/60"
            >
              <div className="mb-6 h-36 rounded-lg bg-[linear-gradient(135deg,#0891b2,#0f172a_58%,#22d3ee)]" />
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
