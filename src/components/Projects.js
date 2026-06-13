"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState("image");
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [videoError, setVideoError] = useState(false);
  const [mediaLoading, setMediaLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [activeProject]);

  const projects = [
    {
      id: "robotina",
      title: "RobotinaCentral.com",
      role: "Co-Fundador & Desarrollador",
      desc: "CRM con Inteligencia Artificial diseñado específicamente para optimizar las ventas y gestión de clientes a través de WhatsApp.",
      details: "Sistema de automatización de WhatsApp con CRM, hecho con n8n, Supabase, React, Next.js. Utiliza Inteligencia Artificial para calificar leads y funciona para procesar clientes de una manera más eficiente gracias a la asistente Robotina y al dashboard de centralización de datos.",
      tags: ["React", "Next.js", "n8n", "Supabase", "OpenAI API", "WebSockets"],
      link: "https://robotinacentral.com/",
      image: "/Robotina central landing.png",
      video: "/Robotinacrntralvideo.mp4"
    },
    {
      id: "nova",
      title: "Analizador de Gráficos",
      role: "Co-Fundador & Desarrollador",
      desc: "Software de análisis de gráficos de trading automatizado mediante Inteligencia Artificial.",
      details: "Analizador de gráficos de Mercado para dar una referencia de estrategia para los traders, con métricas avanzadas y un analizador de gráficos con data real de mercado en vivo.",
      tags: ["Next.js", "Python", "AI", "TradingView API", "WebSockets"],
      link: "https://robotina-ia.com/",
      image: "/analizer.png",
      video: "/analizeervideo.mp4"
    },
    {
      id: "caja",
      title: "App de Préstamos y Cobros",
      role: "Desarrollador del Sistemas",
      desc: "Dashboard de contabilidad, administración de viáticos y finanzas internas para PyMEs.",
      details: "Aplicación administrativa de control financiero interno que permite a coleccionistas y administradores reportar gastos cotidianos en ruta. Implementa un sistema de validación doble (Admin-Colaborador) con filtros por rangos de fechas, balances acumulados en tiempo real y descarga de reportes contables auditables.",
      tags: ["React", "Express", "PostgreSQL", "TailwindCSS", "PDFKit"],
      link: "#",
      image: "/app de Prestamos-Cobros.png",
      video: "/cobranzavideo.mp4"
    },

    {
      id: "codemarket",
      title: "CodeMarket",
      role: "Fundador & Desarrollador",
      desc: "Plataforma de comercio electrónico para scripts, productos digitales y servicios tecnológicos.",
      details: "E-commerce diseñado específicamente para la venta y distribución automatizada de soluciones de software, automatizaciones de n8n, plantillas y servicios. Cuenta con sistema de autenticación de usuarios, pasarela de pago (checkout), panel de administración de productos y biblioteca de descargas seguras.",
      tags: ["Next.js", "React", "TailwindCSS", "Node.js", "Stripe"],
      link: "#",
      image: "/codeMarkett.png",
      video: "/codeMarket.mp4"
    },
    {
      id: "unihub",
      title: "Web-Chronos",
      role: "Desarrollador Full Stack",
      desc: "Landing page premium con diseño de alta gama para la exhibición y venta de relojes antiguos de colección.",
      details: "Una web premium con el tema de relojes antiguos para una joyería, desarrollada con un diseño visualmente exquisito, transiciones suaves y micro-animaciones personalizadas que resaltan la exclusividad y elegancia de cada pieza de colección.",
      tags: ["React", "Next.js", "TailwindCSS", "Framer Motion", "Vanilla CSS"],
      link: "#",
      image: "/cronoos.png",
      video: "/chronosvideo.mp4"
    }
  ];

  const handleOpenProject = (proj) => {
    setActiveProject(proj);
    setActiveTab("image");
    setVideoError(false);
    setMediaLoading(true);
    if (proj.video) {
      setSelectedVideoUrl(proj.video);
    } else {
      setSelectedVideoUrl(null);
    }
  };

  const handleCloseProject = () => {
    setActiveProject(null);
    setActiveTab("image");
    setSelectedVideoUrl(null);
    setVideoError(false);
  };

  const handleSelectGalleryVideo = (url) => {
    setSelectedVideoUrl(url);
    setVideoError(false);
    setMediaLoading(true);
    setActiveTab("video");
  };

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
              onClick={() => handleOpenProject(proj)}
            >
              <FolderIcon />
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Windows 95 Style Modal Window rendered in Portal */}
        {mounted && activeProject && createPortal(
          <div className="window-overlay" onClick={handleCloseProject}>
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
                    onClick={handleCloseProject}
                    title="Cerrar"
                  >
                    X
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="window-body">
                {/* Retro Screen Player Container */}
                <div className="retro-media-player crt-effect" style={{ minHeight: "180px", position: "relative" }}>
                  {/* Loading Indicator */}
                  {mediaLoading && !videoError && (
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "var(--primary)",
                      fontFamily: "var(--font-pixel)",
                      zIndex: 2,
                      textAlign: "center"
                    }}>
                      <div className="win95-logo-flag" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⏳</div>
                      <div style={{ fontSize: "0.9rem", animation: "pulse 1.5s infinite" }}>Cargando...</div>
                    </div>
                  )}

                  {activeTab === "video" && selectedVideoUrl ? (
                    videoError ? (
                      // Fallback when video file doesn't exist on this server
                      <div style={{
                        width: "100%",
                        height: "220px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.75rem",
                        color: "var(--primary)",
                        fontFamily: "var(--font-pixel)",
                        background: "#000",
                        textAlign: "center",
                        padding: "1rem"
                      }}>
                        <span style={{ fontSize: "2rem" }}>📼</span>
                        <span style={{ fontSize: "1.1rem" }}>VIDEO DEMO</span>
                        <span style={{ fontSize: "0.85rem", color: "#888", fontFamily: "var(--font-mono)" }}>
                          No disponible en versión demo.<br/>Contáctame para una demostración en vivo.
                        </span>
                        <a
                          href="#contact"
                          className="btn"
                          style={{ fontSize: "0.85rem", padding: "0.3rem 0.8rem", marginTop: "0.5rem" }}
                          onClick={handleCloseProject}
                        >
                          Contactar
                        </a>
                      </div>
                    ) : (
                      <video
                        key={selectedVideoUrl}
                        src={selectedVideoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="retro-video"
                        style={{ opacity: mediaLoading ? 0 : 1, transition: "opacity 0.3s" }}
                        onCanPlay={() => setMediaLoading(false)}
                        onError={() => { setVideoError(true); setMediaLoading(false); }}
                      />
                    )
                  ) : (
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      loading="lazy"
                      className="retro-image"
                      style={{ opacity: mediaLoading ? 0 : 1, transition: "opacity 0.3s" }}
                      onLoad={() => setMediaLoading(false)}
                      onError={() => setMediaLoading(false)}
                    />
                  )}
                </div>

                {/* Media Toggle Navigation (Images & Video) */}
                {activeProject.image && activeProject.video && (
                  <div className="media-toggle-bar">
                    <button
                      className={`media-toggle-btn ${activeTab === "image" ? "active" : ""}`}
                      onClick={() => {
                        if (activeTab !== "image") {
                          setMediaLoading(true);
                          setActiveTab("image");
                        }
                      }}
                    >
                      [📷 Imagen]
                    </button>
                    <button
                      className={`media-toggle-btn ${activeTab === "video" ? "active" : ""}`}
                      onClick={() => {
                        if (activeTab !== "video") {
                          setMediaLoading(true);
                          setActiveTab("video");
                        }
                      }}
                    >
                      [🎬 Video Demo]
                    </button>
                  </div>
                )}

                {/* Video Gallery Selector for projects with multiple videos */}
                {activeProject.gallery && (
                  <div className="retro-video-selector-container" style={{ marginTop: "1rem" }}>
                    <label className="retro-select-label">&gt; Seleccionar Módulo:</label>
                    <select
                      value={selectedVideoUrl || ""}
                      onChange={(e) => handleSelectGalleryVideo(e.target.value)}
                      className="retro-select"
                    >
                      {activeProject.gallery.map((vid, idx) => (
                        <option key={idx} value={vid.url}>
                          {vid.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", marginTop: "1rem", marginBottom: "0.2rem" }}>
                  {activeProject.title}
                </h3>
                <p style={{ fontSize: "0.9rem", opacity: 0.7, marginBottom: "1rem", fontStyle: "italic" }}>
                  &gt; {activeProject.role}
                </p>

                {activeProject.link && activeProject.link !== "#" && (
                  <div style={{ marginBottom: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
                    <span style={{ color: "var(--primary)" }}>&gt; Link: </span>
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "underline", color: "var(--foreground)", fontWeight: "bold" }}
                    >
                      {activeProject.link}
                    </a>
                  </div>
                )}

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
                    onClick={handleCloseProject}
                  >
                    Cerrar ventana
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}

