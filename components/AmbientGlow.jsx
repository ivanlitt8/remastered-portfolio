"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useTheme } from "@/context/ThemeContext";

/** Offset = mitad del orbe light md (800) — suficiente para ambos temas. */
const ORB_OFFSET = 400;
const GLOW_SPRING = { stiffness: 150, damping: 40 };

/**
 * Orbe de luz ambiental global: MotionValues (sin re-renders) +
 * calibración clara/oscura (dark: núcleo más concentrado y luminoso).
 */
const AmbientGlow = () => {
  const { isDarkMode } = useTheme();
  const mouseX = useMotionValue(-ORB_OFFSET);
  const mouseY = useMotionValue(-ORB_OFFSET);
  const x = useSpring(mouseX, GLOW_SPRING);
  const y = useSpring(mouseY, GLOW_SPRING);

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX - ORB_OFFSET);
      mouseY.set(e.clientY - ORB_OFFSET);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const shared =
    "absolute left-0 top-0 will-change-transform transition-opacity duration-500";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      aria-hidden
    >
      {/* Light: dispersión amplia, ámbar suave */}
      <motion.div
        className={`${shared} h-[600px] w-[600px] blur-[140px] md:h-[800px] md:w-[800px] md:blur-[180px]`}
        style={{
          x,
          y,
          opacity: isDarkMode ? 0 : 1,
          background:
            "radial-gradient(circle, rgba(226, 154, 91, 0.12) 0%, transparent 70%)",
          willChange: "transform, opacity",
        }}
      />
      {/* Dark: núcleo más concentrado + violeta/índigo luminiscente */}
      <motion.div
        className={`${shared} h-[450px] w-[450px] blur-[120px] md:h-[600px] md:w-[600px] md:blur-[140px]`}
        style={{
          x,
          y,
          opacity: isDarkMode ? 1 : 0,
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, transparent 70%)",
          willChange: "transform, opacity",
        }}
      />
    </div>
  );
};

export default AmbientGlow;
