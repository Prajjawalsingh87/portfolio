function Navbar() {
  return (
    <nav className="bg-slate-950 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Prajjawal Singh
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          <li>
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button */}
        <button className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600">
          Resume
        </button>

      </div>
    </nav>
  );
}

export default Navbar;