"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "next-i18next";

const EMAIL = "ivanlitt8@gmail.com";
const MAGNET_STRENGTH = 0.22;
const MAGNET_SPRING = { stiffness: 160, damping: 18, mass: 0.45 };
const HOVER_SPRING = { type: "spring", stiffness: 400, damping: 22 };

/** Tipografía + altura unificadas con "Book a slot". */
const labelClass =
  "inline-flex items-center justify-center gap-2 font-mono text-xs font-medium uppercase leading-none tracking-widest";

/**
 * Dos botones separados (mailto + copiar), misma altura y tipografía mono.
 */
const ContactEmailButton = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);
  const x = useSpring(magnetX, MAGNET_SPRING);
  const y = useSpring(magnetY, MAGNET_SPRING);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    magnetX.set(dx * MAGNET_STRENGTH);
    magnetY.set(dy * MAGNET_STRENGTH);
  };

  const handleMouseLeave = () => {
    magnetX.set(0);
    magnetY.set(0);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard puede fallar sin permiso; no romper UI
    }
  };

  const shell = isDarkMode
    ? "border-secondaryDark/35 bg-primaryDark text-secondaryDark hover:border-secondaryDark/60"
    : "border-secondaryLight/20 bg-[#1a1a1a] text-white hover:border-secondaryLight/40";

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex items-center gap-3 will-change-transform"
    >
      <motion.a
        href={`mailto:${EMAIL}`}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={HOVER_SPRING}
        className={`relative h-12 min-w-[220px] rounded-full border px-6 sm:min-w-[280px] sm:px-8 ${labelClass} ${shell}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "copied" : "mail"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={`${labelClass}`}
          >
            {copied ? (
              <>
                <Check size={14} strokeWidth={2} className="shrink-0" aria-hidden />
                <span>{t("mailCopied")}</span>
              </>
            ) : (
              <>
                <span>{t("mail")}</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.75}
                  className="shrink-0"
                  aria-hidden
                />
              </>
            )}
          </motion.span>
        </AnimatePresence>
      </motion.a>

      <motion.button
        type="button"
        onClick={handleCopy}
        aria-label={t("copy")}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={HOVER_SPRING}
        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${shell}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "check" : "copy"}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center"
          >
            {copied ? (
              <Check size={16} strokeWidth={2} aria-hidden />
            ) : (
              <Copy size={16} strokeWidth={1.75} aria-hidden />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

export default ContactEmailButton;
