"use client";
import { useEffect, useRef, useState } from "react";

export default function InteractiveBackground({ isMuted }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sync mute state with video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (!isMuted) {
        videoRef.current.play().catch(err => console.log("Audio play prevented:", err));
      }
    }
  }, [isMuted]);

  return (
    <div className="interactive-bg">
      <video
        ref={videoRef}
        src="/retro.mp4"
        autoPlay
        loop
        playsInline
        muted={isMuted}
        preload="none"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          // On desktop: clip the baked-in black sidebars from the video file
          // On mobile: objectFit cover handles framing naturally
          clipPath: isMobile ? "none" : "inset(0 18.75% 0 18.75%)"
        }}
      />
    </div>
  );
}
