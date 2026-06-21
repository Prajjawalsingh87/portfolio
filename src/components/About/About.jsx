function About() {
  const linkedInUrl = "https://www.linkedin.com/in/prajjawal-singh-1723621ab/";
  const githubUrl = "https://github.com/Prajjawalsingh87";

  return (
    <section id="about" className="border-t border-white/10 bg-slate-900/60 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            About
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Backend engineer building for scale, reliability, and speed.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            I work on scalable and reliable backend systems, with hands-on
            experience across Django, REST APIs, Kafka, PostgreSQL, Redis, and
            ClickHouse. I enjoy system design, performance optimization, and
            turning backend complexity into dependable product infrastructure.
          </p>
          <p>
            My GitHub profile is the source for the technical stack, featured
            projects, and coding profile links used here. For professional
            networking, you can also connect with me on
            {" "}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-cyan-300 hover:text-cyan-200"
            >
              LinkedIn
            </a>
            {" "}
            or explore my repositories on
            {" "}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-cyan-300 hover:text-cyan-200"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
