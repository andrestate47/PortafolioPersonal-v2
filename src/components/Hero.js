import Typewriter from "./Typewriter";

export default function Hero() {
  const phrases = [
    "Andrés Figueroa Zamora",
    "Desarrollador",
    "Front-end",
    "Automatización",
    "Experto en IA",
    "desarrollo a medida"
  ];

  return (
    <section className="section-node">
      <div className="section-content" style={{ textAlign: "center", paddingTop: "clamp(1.5rem, 4vw, 3rem)", paddingBottom: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div style={{ marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}>
          <div style={{
            width: "clamp(130px, 30vw, 185px)",
            height: "clamp(130px, 30vw, 185px)",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid var(--primary)",
            boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)",
            position: "relative",
            backgroundColor: "var(--secondary)"
          }}>
            <img 
              src="/avatar_retro.png" 
              alt="Andrés Figueroa Avatar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                imageRendering: "pixelated"
              }}
            />
          </div>
        </div>
        
        <h1 className="retro-text-outline" style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", marginBottom: "0.75rem", minHeight: "3rem" }}>
          {">"}{" "}
          <Typewriter phrases={phrases} />
        </h1>
        
        <p className="retro-text-outline" style={{ maxWidth: "500px", margin: "0 auto 1.5rem auto", opacity: 0.9, fontWeight: "bold", fontSize: "clamp(0.85rem, 2.5vw, 1.05rem)", padding: "0 0.5rem" }}>
          Desarrollador Front-End especializado en automatización y software a medida. Construyendo soluciones modernas para empresas y emprendedores.
        </p>

        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", padding: "0 0.5rem" }}>
          <a href="#contact" className="btn" style={{ fontSize: "clamp(0.85rem, 2.5vw, 1rem)", padding: "0.4rem 1rem" }}>Contactar</a>
          <a href="#projects" className="btn" style={{ background: "rgba(0,0,0,0.45)", color: "#ffffff", borderColor: "rgba(255,255,255,0.75)", boxShadow: "4px 4px 0px rgba(255,255,255,0.3)", fontSize: "clamp(0.85rem, 2.5vw, 1rem)", padding: "0.4rem 1rem" }}>Ver Proyectos</a>
        </div>
      </div>
    </section>
  );
}
