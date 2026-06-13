export default function About() {
  return (
    <section id="about" className="section-node">
      <div className="section-content pixel-border">
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>[01]</span> Sobre Mí
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p>
            Soy <strong>Desarrollador Front-End +5 años</strong>. Especializado en la creación de páginas web, automatizaciones y soluciones a medida para PyMEs y emprendedores.
          </p>
          
          <p>
            Mi objetivo es ayudar a las empresas a crecer mediante tecnología moderna, rápida y eficiente, construyendo herramientas que mejoren su presencia digital y faciliten la captación de clientes.
          </p>

          <p>
            Actualmente trabajo como Freelancer, desarrollando soluciones enfocadas en aportar valor y resultados reales.
          </p>
        </div>
      </div>
    </section>
  );
}
