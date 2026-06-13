export default function Experience() {
  const experiences = [
    {
      year: "Actualidad",
      title: "Freelancer - Desarrollo & Automatización",
      desc: "Ayudando a empresas a crecer su presencia digital y en la captación de clientes mediante automatización e IA."
    },
    {
      year: "2025",
      title: "TechRitail",
      desc: "Último empleo formal (corporativo). Desarrollo de plataformas frontend e integración de servicios."
    }
  ];

  return (
    <section id="experience" className="section-node">
      <div className="section-content pixel-border">
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>[02]</span> Trayectoria
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ 
              borderLeft: "2px dashed var(--border)", 
              paddingLeft: "1.5rem",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                left: "-7px",
                top: "0",
                width: "12px",
                height: "12px",
                backgroundColor: "var(--background)",
                border: "2px solid var(--primary)",
              }}></div>
              <span style={{ 
                fontFamily: "var(--font-pixel)", 
                color: "var(--primary)", 
                fontSize: "1.2rem",
                display: "block",
                marginBottom: "0.5rem"
              }}>
                {exp.year}
              </span>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "var(--foreground)" }}>{exp.title}</h3>
              <p style={{ opacity: 0.8 }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
