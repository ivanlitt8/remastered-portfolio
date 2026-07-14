"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "next-i18next";

const CvButton = () => {
  const { isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();
  const [hovered, setHovered] = useState(false);

  const lang = i18n.language?.startsWith("es") ? "ES" : "EN";

  const cvUrls = {
    es: "https://docs.google.com/document/d/1USXaI-6KyJ8LokCF2DrzhGsuti9LutqgAffzl79aYQs/edit?usp=sharing",
    en: "https://docs.google.com/document/d/1kOOr7nTzERsGrv8_ZNtFLSC85rnyH6TfGuNmghpU_EU/edit?usp=sharing",
  };

  const downloadCv = () => {
    const key = i18n.language?.startsWith("es") ? "es" : "en";
    window.open(cvUrls[key] || cvUrls.es, "_blank");
  };

  const shell = isDarkMode
    ? "border-secondaryDark/40 bg-transparent text-secondaryDark hover:bg-secondaryDark/10"
    : "border-secondaryLight/25 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]";

  return (
    <motion.button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        downloadCv();
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors duration-300 ${shell}`}
    >
      <span>{t("cvDownload", { lang })}</span>
      <motion.span
        aria-hidden
        className="inline-block origin-center will-change-transform"
        animate={
          hovered
            ? { rotate: 90, y: [0, 2, 0] }
            : { rotate: 0, y: 0 }
        }
        transition={
          hovered
            ? {
                rotate: { type: "spring", stiffness: 260, damping: 18 },
                y: {
                  duration: 0.55,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
            : {
                rotate: { type: "spring", stiffness: 300, damping: 22 },
                y: { duration: 0.2 },
              }
        }
      >
        ↗
      </motion.span>
    </motion.button>
  );
};

export default CvButton;
