"use client";

import { motion, useSpring } from "motion/react";
import { useTheme } from "@/context/ThemeContext";

const TOOLTIP_SPRING = { stiffness: 200, damping: 28, mass: 0.55 };

/**
 * Tooltip flotante con lag físico respecto al cursor (coords relativas al stage).
 * Se mantiene montado para no reiniciar los springs del follower.
 */
const SkillTooltip = ({ skill, visible, mouseX, mouseY, lang }) => {
  const { isDarkMode } = useTheme();
  const x = useSpring(mouseX, TOOLTIP_SPRING);
  const y = useSpring(mouseY, TOOLTIP_SPRING);

  const accent = skill
    ? !isDarkMode && skill.accentLight
      ? skill.accentLight
      : skill.accent
    : "#A1A1AA";

  const description =
    skill?.description?.[lang?.startsWith("es") ? "es" : "en"] ??
    skill?.description?.en ??
    "";

  return (
    <motion.div
      className={`pointer-events-none absolute z-50 max-w-[240px] rounded-xl border px-3.5 py-2.5 backdrop-blur-md ${
        isDarkMode
          ? "border-white/20 bg-neutral-900/45"
          : "border-black/10 bg-white/55"
      }`}
      style={{ x, y, left: 14, top: 14 }}
      initial={false}
      animate={{
        opacity: visible && skill ? 1 : 0,
        scale: visible && skill ? 1 : 0.96,
      }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!visible}
    >
      {skill ? (
        <>
          <p
            className="font-mono text-[11px] font-medium tracking-wide"
            style={{ color: accent }}
          >
            {skill.label}
          </p>
          <p
            className={`mt-1 text-xs leading-relaxed ${
              isDarkMode ? "text-neutral-300" : "text-secondaryLight/80"
            }`}
          >
            {description}
          </p>
        </>
      ) : null}
    </motion.div>
  );
};

export default SkillTooltip;
