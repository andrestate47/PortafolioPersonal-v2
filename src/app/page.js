import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";

import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <main className="timeline-container">
      <nav className="nav-container">
        <div className="nav-logo">A.F.Z. _</div>
        <div className="nav-links">
          <ThemeToggle />
          <a href="#about">[About]</a>
          <a href="#projects">[Projects]</a>
          <a href="#contact">[Contact]</a>
        </div>
      </nav>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />

      <footer className="section-node" style={{ 
        textAlign: "center", 
        paddingTop: "2rem", 
        borderTop: "1px dashed var(--border)",
        fontFamily: "var(--font-pixel)",
        opacity: 0.6
      }}>
        <div className="section-content">
          <p>© {new Date().getFullYear()} Andrés Figueroa. Creado con Next.js.</p>
          <p>SYSTEM.HALT()</p>
        </div>
      </footer>
    </main>
  );
}
