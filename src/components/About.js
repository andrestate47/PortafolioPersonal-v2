export default function About() {
  return (
    <section id="about" className="section-node">
      <div className="section-content pixel-border">
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>[01]</span> Sobre Mí
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p>
            Soy un <strong>Programador Frontend con más de 5 años de experiencia</strong> construyendo software enfocado en PyMES. 
            Me apasiona crear interfaces modernas, minimalistas y sistemas escalables que realmente aporten valor.
          </p>
          
          <p>
            Actualmente trabajo como Freelancer, ayudando a empresas a crecer su presencia digital y en la captación 
            de clientes mediante tecnología a medida.
          </p>
        </div>
      </div>
    </section>
  );
}
