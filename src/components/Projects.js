"use client";

import { useState } from "react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: "robotina",
      title: "RobotinaCentral.com",
      role: "Fundador & Desarrollador",
      desc: "CRM con Inteligencia Artificial diseñado específicamente para optimizar las ventas y gestión de clientes a través de WhatsApp.",
      details: "Sistema avanzado integrado con WhatsApp Web y APIs oficiales que lee conversaciones en tiempo real, califica leads automáticamente usando GPT y gestiona reservas mediante un sistema calendarizado interno. Cuenta con un dashboard de administración en tiempo real con estadísticas de conversión, sincronización con bases de datos SQL y envío automatizado de notificaciones.",
      tags: ["React", "Node.js", "Supabase", "OpenAI API", "WebSockets"],
      link: "https://robotinacentral.com"
    },
    {
      id: "nova",
      title: "Nova AI Software",
      role: "Fundador & Desarrollador",
      desc: "Software de automatización e Inteligencia artificial para empresas, enfocado en escalar la captación de clientes.",
      details: "Motor automatizado de scraping de datos geográficos e integración con modelos de lenguaje. Extrae potenciales leads de plataformas como Google Maps, analiza su perfil corporativo en redes sociales usando IA, y genera secuencias de contacto altamente personalizadas. Aumenta la prospección B2B fría en más del 400% de manera orgánica.",
      tags: ["Next.js", "Python", "Cheerio", "Docker", "LangChain"],
      link: "#"
    },
    {
      id: "caja",
      title: "Control de Caja Chica",
      role: "Desarrollador de Sistemas",
      desc: "Dashboard de contabilidad, administración de viáticos y finanzas internas para PyMEs.",
      details: "Aplicación administrativa de control financiero interno que permite a coleccionistas y administradores reportar gastos cotidianos en ruta. Implementa un sistema de validación doble (Admin-Colaborador) con filtros por rangos de fechas, balances acumulados en tiempo real y descarga de reportes contables auditables.",
      tags: ["React", "Express", "PostgreSQL", "TailwindCSS", "PDFKit"],
      link: "#"
    },
    {
      id: "rutas",
      title: "Rutas del Día",
      role: "Ingeniero de Automatización",
      desc: "Algoritmo inteligente de optimización de rutas de cobro y entregas en tiempo real.",
      details: "Sistema de optimización de geolocalización que filtra clientes activos en la ruta diaria según su frecuencia de pago (diaria, semanal, mensual). Excluye automáticamente a clientes con pagos adelantados y recalcula la ruta de Google Maps del colaborador mediante coordenadas en tiempo real para optimizar traslados.",
      tags: ["JavaScript", "Google Maps API", "Redis", "CronJobs", "Leaflet"],
      link: "#"
    }
  ];

  // SVG Pixel Folder Icon
  const FolderIcon = () => (
    <svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      {/* Folder Back/Tab */}
      <path d="M2 3h5v2h8v9H2V3z" fill="#D49B35" />
      {/* Folder Front (slightly lighter retro yellow) */}
      <path d="M1 5h14v8H1V5z" fill="#F0C36D" />
      {/* Shadow/Border accents */}
      <path d="M2 3h4v1H2V3zm5 1h7v1H7V4zm-6 9h14v1H1v-1z" fill="#FFF" opacity="0.3" />
      <path d="M2 13h13v1H2v-1z" fill="#000" opacity="0.2" />
      {/* Outline */}
      <path d="M2 2h5v1H2v-1zm5 1h8v1H7v-1zm8 1h1v9h-1v-1zm-14 9h13v1H1v-1zm0-8h1v8H1V5z" fill="var(--primary)" />
    </svg>
  );

  return (
    <section id="projects" className="section-node">
      <div className="section-content">
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>[03]</span> Proyectos
        </h2>
        
        {/* Retro Desktop Workspace */}
        <div className="desktop-workspace">
          {projects.map((proj) => (
            <button 
              key={proj.id} 
              className={`desktop-icon ${activeProject?.id === proj.id ? 'selected' : ''}`}
              onClick={() => setActiveProject(proj)}
            >
              <FolderIcon />
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Windows 95 Style Modal Window */}
        {activeProject && (
          <div className="window-overlay" onClick={() => setActiveProject(null)}>
            <div 
              className="retro-window" 
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Window Header */}
              <div className="window-header">
                <div className="window-title">
                  📂 {activeProject.title}
                </div>
                <div className="window-controls">
                  <button className="window-btn" title="Minimizar">_</button>
                  <button className="window-btn" title="Maximizar">▢</button>
                  <button 
                    className="window-btn" 
                    style={{ color: "var(--primary)" }} 
                    onClick={() => setActiveProject(null)}
                    title="Cerrar"
                  >
                    X
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="window-body">
                <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", marginBottom: "0.2rem" }}>
                  {activeProject.title}
                </h3>
                <p style={{ fontSize: "0.9rem", opacity: 0.7, marginBottom: "1rem", fontStyle: "italic" }}>
                  &gt; {activeProject.role}
                </p>

                <div style={{ borderBottom: "1px dashed var(--border)", marginBottom: "1rem" }}></div>

                <p style={{ lineHeight: "1.5", marginBottom: "1.5rem" }}>
                  {activeProject.details}
                </p>

                <h4 style={{ fontSize: "1rem", marginBottom: "0.5rem", textTransform: "uppercase", color: "var(--foreground)" }}>
                  Tecnologías Utilizadas:
                </h4>
                <div className="window-tag-container">
                  {activeProject.tags.map((tag, index) => (
                    <span key={index} className="window-tag">
                      [{tag}]
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
                  {activeProject.link !== "#" ? (
                    <a 
                      href={activeProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn"
                      style={{ fontSize: "1rem", padding: "0.4rem 1rem" }}
                    >
                      Ejecutar Sistema
                    </a>
                  ) : (
                    <span 
                      className="btn" 
                      style={{ 
                        fontSize: "1rem", 
                        padding: "0.4rem 1rem", 
                        opacity: 0.5, 
                        cursor: "not-allowed",
                        borderColor: "var(--border)",
                        color: "var(--border)",
                        boxShadow: "4px 4px 0px var(--border)"
                      }}
                      title="Este proyecto interno se ejecuta de manera privada"
                    >
                      Sistema Privado
                    </span>
                  )}
                  <button 
                    className="btn" 
                    style={{ 
                      fontSize: "1rem", 
                      padding: "0.4rem 1rem", 
                      background: "transparent", 
                      color: "var(--foreground)", 
                      borderColor: "var(--border)", 
                      boxShadow: "4px 4px 0px var(--border)" 
                    }}
                    onClick={() => setActiveProject(null)}
                  >
                    Cerrar ventana
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
