import { useEffect, useRef } from "react";

export function CursorTrail() {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      if (trailRef.current) {
        trailRef.current.style.left = trailX - 10 + "px";
        trailRef.current.style.top = trailY - 10 + "px";
      }

      requestAnimationFrame(animateTrail);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateTrail();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={trailRef}
      className="fixed w-5 h-5 bg-gradient-to-r from-blue-500/80 to-purple-500/40 rounded-full pointer-events-none z-50 transition-transform duration-100"
      style={{
        background: "radial-gradient(circle, rgba(14, 165, 233, 0.8), rgba(139, 92, 246, 0.4))",
      }}
    />
  );
}
