"use client";

export default function AudioToggle({ isMuted, onToggle }) {
  return (
    <button 
      className="btn"
      onClick={onToggle}
      style={{
        padding: "0.2rem 0.6rem",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.2rem"
      }}
      title={isMuted ? "Activar sonido retro" : "Desactivar sonido retro"}
    >
      {isMuted ? "🔇" : "🔊"}
    </button>
  );
}
