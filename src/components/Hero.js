import Typewriter from "./Typewriter";
import Image from "next/image";

export default function Hero() {
  const phrases = [
    "Andrés Alejandro Figueroa Zamora",
    "Desarrollador",
    "Front-end",
    "Automatización",
    "desarrollo a medida"
  ];

  return (
    <section className="section-node">
      <div className="section-content" style={{ textAlign: "center", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
          <div style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid var(--primary)",
            boxShadow: "0 0 15px rgba(74, 222, 128, 0.4)",
            position: "relative",
            backgroundColor: "var(--secondary)"
          }}>
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", color: "var(--primary)" }}>
              👾
            </div>
          </div>
        </div>
        
        <h1 className="retro-text-outline" style={{ fontSize: "2rem", marginBottom: "1rem", minHeight: "3rem" }}>
          {"> "} 
          <Typewriter phrases={phrases} />
        </h1>
        
        <p className="retro-text-outline" style={{ maxWidth: "500px", margin: "0 auto 2rem auto", opacity: 0.9, fontWeight: "bold" }}>
          Especialista en desarrollo Front-end y automatización de procesos, construyendo software moderno, rápido y efectivo.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" className="btn">Contactar</a>
          <a href="#projects" className="btn" style={{ background: "rgba(0,0,0,0.45)", color: "#ffffff", borderColor: "rgba(255,255,255,0.75)", boxShadow: "4px 4px 0px rgba(255,255,255,0.3)" }}>Ver Proyectos</a>
        </div>
      </div>
    </section>
  );
}
