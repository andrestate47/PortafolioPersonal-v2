"use client";
import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      // Calculate position relative to center (-1 to 1)
      targetX = (e.clientX / window.innerWidth - 0.5) * -40;
      targetY = (e.clientY / window.innerHeight - 0.5) * -40;
    };

    const animate = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      if (bgRef.current) {
        // Use translate3d for GPU hardware acceleration, maintaining both -50% centerings
        bgRef.current.style.transform = `translate(-50%, -50%) translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={bgRef}
      className="interactive-bg"
    />
  );
}
