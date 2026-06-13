"use client";
import Image from "next/image";

export default function TechStack() {
  const tech = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    { name: "IA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" }, // Using a generic icon representing AI models or we can use an emoji if image fails
  ];

  return (
    <section id="tech" className="section-node">
      <div className="section-content pixel-border">
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>[04]</span> Tech Stack
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", 
          gap: "1rem" 
        }}>
          {tech.map((t, i) => (
            <div 
              key={i} 
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                border: "1px dashed var(--border)",
                textAlign: "center",
                fontFamily: "var(--font-pixel)",
                fontSize: "1.1rem",
                transition: "all 0.2s",
                cursor: "default"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 85, 0, 0.1)";
                e.currentTarget.style.borderColor = "var(--primary)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <img src={t.icon} alt={t.name} className="retro-logo" />
              <span>{t.name}</span>
            </div>
          ))}
          {/* n8n icon isn't standard in devicon, so we use text/custom */}
          <div 
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              border: "1px dashed var(--border)",
              textAlign: "center",
              fontFamily: "var(--font-pixel)",
              fontSize: "1.1rem",
              transition: "all 0.2s",
              cursor: "default"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 85, 0, 0.1)";
              e.currentTarget.style.borderColor = "var(--primary)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <div className="retro-logo" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>⚙️</div>
            <span>n8n</span>
          </div>
        </div>
      </div>
    </section>
  );
}
