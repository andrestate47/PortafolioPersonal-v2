"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import ThemeToggle from "../components/ThemeToggle";
import AudioToggle from "../components/AudioToggle";
import RetroLoader from "../components/RetroLoader";
import InteractiveBackground from "../components/InteractiveBackground";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      <InteractiveBackground isMuted={isMuted} />
      {loading && <RetroLoader onFinish={() => setLoading(false)} />}
      
      {!loading && (
        <nav className="nav-container">
          <div className="nav-content-wrapper">
            <div className="nav-logo">A.F.Z. _</div>
            <div className="nav-links">
              <AudioToggle isMuted={isMuted} onToggle={() => setIsMuted(!isMuted)} />
              <ThemeToggle />
              <a href="#about">[About]</a>
              <a href="#projects">[Projects]</a>
              <a href="#contact">[Contact]</a>
            </div>
          </div>
        </nav>
      )}

      <main className="timeline-container" style={{ 
        height: loading ? "100vh" : "auto",
        overflow: loading ? "hidden" : "visible",
        visibility: loading ? "hidden" : "visible"
      }}>
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
    </>
  );
}
