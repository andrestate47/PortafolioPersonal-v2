"use client";

import { useEffect, useState } from "react";

export default function RetroLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const duration = 1600; // 1.6 seconds of actual progress incrementing
    const intervalTime = 40;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Hold 100% for 400ms to complete the 2-second experience, then fade out
        setTimeout(() => {
          setIsFading(true);
          // Wait for fade-out animation to complete (400ms) before executing callback
          setTimeout(() => {
            onFinish();
          }, 400);
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  // Determine how many progress chunks to display based on progress (0 to 22 chunks max)
  const maxChunks = 22;
  const activeChunks = Math.floor((progress / 100) * maxChunks);

  // SVG Windows 95 Pixel Flag
  const Windows95Logo = () => (
    <svg width="120" height="120" viewBox="0 0 36 36" fill="none" className="win95-logo-flag" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
      {/* Red Pane (Top Left) */}
      <path d="M4 6h12v11H4z" fill="#FF5353" />
      <path d="M4 6h12v1H4V6zm11 1v10h1V7h-1z" fill="#FFF" opacity="0.3" />
      <path d="M4 16h11v1H4v-1z" fill="#000" opacity="0.2" />

      {/* Green Pane (Top Right) */}
      <path d="M19 4h12v11H19z" fill="#5CE65C" />
      <path d="M19 4h12v1H19V4zm11 1v10h1V5h-1z" fill="#FFF" opacity="0.3" />
      <path d="M19 14h11v1H19v-1z" fill="#000" opacity="0.2" />

      {/* Blue Pane (Bottom Left) */}
      <path d="M5 19h12v11H5z" fill="#5C5CFF" />
      <path d="M5 19h12v1H5v-1zm11 1v10h1V20h-1z" fill="#FFF" opacity="0.3" />
      <path d="M5 29h11v1H5v-1z" fill="#000" opacity="0.2" />

      {/* Yellow Pane (Bottom Right) */}
      <path d="M20 17h12v11H20z" fill="#FFD700" />
      <path d="M20 17h12v1H20v-1zm11 1v10h1V18h-1z" fill="#FFF" opacity="0.3" />
      <path d="M20 27h11v1H20v-1z" fill="#000" opacity="0.2" />

      {/* Black Outline Details & Trailing Pixels */}
      <path d="M3 5h14v13H3zm15-2h14v13H18zM4 18h14v13H4zm15-3h14v13H19z" fill="#000" opacity="0.15" />
      
      {/* Tiny trail dots */}
      <rect x="1" y="8" width="1" height="1" fill="#000" />
      <rect x="2" y="11" width="1" height="1" fill="#000" />
      <rect x="1" y="14" width="2" height="1" fill="#000" />
      <rect x="2" y="22" width="1" height="1" fill="#000" />
      <rect x="3" y="25" width="1" height="1" fill="#000" />
    </svg>
  );

  return (
    <div className={`win95-loader-overlay ${isFading ? 'fade-out' : ''}`}>
      {/* Windows Brand Logo */}
      <div className="win95-logo-container">
        <Windows95Logo />
        <div className="win95-brand">
          <div className="win95-brand-microsoft">Microsoft</div>
          <div className="win95-brand-windows">
            Windows<span>95</span>
          </div>
          <div className="win95-brand-sub">Booting Portfolio</div>
        </div>
      </div>

      {/* Win95 Progress Bar */}
      <div className="win95-progress-section">
        <div className="win95-progress-label">
          Iniciando sistema... {Math.round(progress)}%
        </div>
        <div className="win95-progress-container">
          {Array.from({ length: activeChunks }).map((_, i) => (
            <div key={i} className="win95-progress-chunk" />
          ))}
        </div>
      </div>
    </div>
  );
}
