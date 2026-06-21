function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-slate-900/60 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            About
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Developer with a builder mindset.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            I enjoy turning ideas into simple, useful interfaces. My work is
            centered around React, JavaScript, Tailwind CSS, and building pages
            that feel fast, responsive, and clear.
          </p>
          <p>
            I am actively improving my full stack skills and looking for
            opportunities to work on real products, collaborate with teams, and
            ship practical solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
