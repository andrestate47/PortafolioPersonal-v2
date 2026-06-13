import Typewriter from "./Typewriter";

export default function Hero() {
  const phrases = [
    "Andrés Figueroa Zamora",
    "Desarrollador",
    "Front-end",
    "Automatización",
    "desarrollo a medida"
  ];

  return (
    <section className="section-node">
      <div className="section-content" style={{ textAlign: "center", paddingTop: "clamp(1.5rem, 4vw, 3rem)", paddingBottom: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div style={{ marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}>
          <div style={{
            width: "clamp(100px, 25vw, 150px)",
            height: "clamp(100px, 25vw, 150px)",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid var(--primary)",
            boxShadow: "0 0 15px rgba(74, 222, 128, 0.4)",
            position: "relative",
            backgroundColor: "var(--secondary)"
          }}>
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(2.5rem, 8vw, 4rem)", color: "var(--primary)" }}>
              👾
            </div>
          </div>
        </div>
        
        <h1 className="retro-text-outline" style={{ fontSize: "clamp(1.2rem, 4vw, 2rem)", marginBottom: "0.75rem", minHeight: "2.5rem" }}>
          {">"}{" "}
          <Typewriter phrases={phrases} />
        </h1>
        
        <p className="retro-text-outline" style={{ maxWidth: "500px", margin: "0 auto 1.5rem auto", opacity: 0.9, fontWeight: "bold", fontSize: "clamp(0.8rem, 2.5vw, 1rem)", padding: "0 0.5rem" }}>
          Especialista en desarrollo Front-end y automatización de procesos, construyendo software moderno, rápido y efectivo.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", padding: "0 0.5rem" }}>
          <a href="#contact" className="btn" style={{ fontSize: "clamp(0.85rem, 2.5vw, 1rem)", padding: "0.4rem 1rem" }}>Contactar</a>
          <a href="#projects" className="btn" style={{ background: "rgba(0,0,0,0.45)", color: "#ffffff", borderColor: "rgba(255,255,255,0.75)", boxShadow: "4px 4px 0px rgba(255,255,255,0.3)", fontSize: "clamp(0.85rem, 2.5vw, 1rem)", padding: "0.4rem 1rem" }}>Ver Proyectos</a>
        </div>
      </div>
    </section>
  );
}
