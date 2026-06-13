export default function Contact() {
  return (
    <section id="contact" className="section-node" style={{ marginBottom: "4rem" }}>
      <div className="section-content pixel-border" style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
          <span>[05]</span> Conectar
        </h2>
        
        <p style={{ marginBottom: "2rem", opacity: 0.8 }}>
          ¿Interesado en crear algo increíble o automatizar tus procesos? 
          Ponte en contacto conmigo.
        </p>

        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "1rem",
          maxWidth: "400px",
          margin: "0 auto"
        }}>
          <a href="https://wa.me/51957363566" target="_blank" rel="noopener noreferrer" className="btn" style={{ justifyContent: "center" }}>
            WhatsApp: +51 957363566
          </a>
          
          <a href="mailto:andresfuigueroaz@gmail.com" className="btn" style={{ justifyContent: "center", background: "transparent", color: "var(--foreground)", borderColor: "var(--border)", boxShadow: "4px 4px 0px var(--border)" }}>
            andresfuigueroaz@gmail.com
          </a>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
            <a href="https://linkedin.com/in/andres-figueroa" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--primary)" }}>
              LinkedIn
            </a>
            <span>|</span>
            <a href="https://instagram.com/andres.a.fz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "var(--primary)" }}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
