"use client";
import { useEffect, useRef } from "react";

export default function InteractiveBackground({ isMuted }) {
  const videoRef = useRef(null);

  // Sync mute state with video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      
      // Attempt play when unmuted to handle autoplay policy restrictions
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
          clipPath: "inset(0 18.75% 0 18.75%)"
        }}
      />
    </div>
  );
}
