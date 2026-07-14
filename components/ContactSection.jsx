"use client";

import { motion } from "motion/react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "next-i18next";
import ContactEmailButton from "@/components/ContactEmailButton";

const CALENDLY_URL = "https://calendly.com/ivanlitt8/30min";

/**
 * Cierre premium: copy + email/copy | tarjeta Calendly (redirect).
 */
const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  const titleColor = isDarkMode ? "text-secondaryDark" : "text-secondaryLight";
  const bodyColor = isDarkMode ? "text-neutral-400" : "text-neutral-600";

  const cardShell = isDarkMode
    ? "border-white/10 bg-white/5 hover:border-white/20"
    : "border-neutral-900/10 bg-neutral-900/5 hover:border-neutral-900/20";

  const ctaShell = isDarkMode
    ? "border-secondaryDark/35 bg-transparent text-secondaryDark hover:bg-secondaryDark/10"
    : "border-secondaryLight/20 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]";

  return (
    <section className="relative z-10 px-5 pb-28 sm:px-20 sm:pb-36 md:pb-44">
      <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2
            className={`font-Mersad text-5xl font-bold tracking-tighter md:text-8xl ${titleColor}`}
          >
            {t("titles.contact")}
          </h2>

          <p
            className={`mt-8 max-w-2xl text-base leading-relaxed ${bodyColor}`}
          >
            {t("paragraphs.contact")}
          </p>

          <div className="mt-10">
            <ContactEmailButton />
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className={`rounded-3xl border p-8 backdrop-blur-sm transition-colors duration-300 ${cardShell}`}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              {t("calendly.eyebrow")}
            </p>
            <h3
              className={`mb-2 mt-3 text-2xl font-semibold tracking-tight ${titleColor}`}
            >
              {t("calendly.title")}
            </h3>
            <p className={`mb-8 text-sm leading-relaxed ${bodyColor}`}>
              {t("calendly.description")}
            </p>

            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className={`inline-flex h-12 items-center justify-center gap-2 rounded-full border px-6 font-mono text-xs font-medium uppercase leading-none tracking-widest transition-colors duration-300 ${ctaShell}`}
            >
              {t("calendly.cta")}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
