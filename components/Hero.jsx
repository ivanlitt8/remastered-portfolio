"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "next-i18next";
import CvButton from "@/components/CvButton";

const easeOut = [0.22, 1, 0.36, 1];

const TECH_GROUPS = [
  ["React", "Next.js", "Node.js", "TypeScript"],
  ["React", "NestJS", "PostgreSQL", "TypeScript"],
  ["Redux", "Tailwind", "Docker", "Cloud Run"],
];

const STACK_INTERVAL_MS = 3800;

const stackSpring = {
  type: "spring",
  stiffness: 70,
  damping: 18,
  mass: 0.95,
};

const titleItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

const copyContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const copyItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

/**
 * Slot de tecnologías: grupos de 4 rotan cada 3s con slide vertical elástico.
 */
const RollingTechStack = ({ isDarkMode }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % TECH_GROUPS.length);
    }, STACK_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const group = TECH_GROUPS[index];
  const stackColor = isDarkMode ? "text-neutral-400" : "text-neutral-700";

  return (
    <div
      className="relative mt-3 min-h-[4.5rem] w-full overflow-hidden sm:min-h-[5.25rem] md:min-h-[6rem] lg:mt-4 lg:min-h-[7rem]"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          initial={{ y: "45%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: stackSpring,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0 },
          }}
          className={`absolute inset-x-0 top-0 flex w-full flex-wrap items-center gap-x-2 gap-y-1 font-Mersad text-2xl font-bold tracking-tighter will-change-transform sm:text-3xl md:text-4xl lg:text-5xl ${stackColor}`}
          style={{ lineHeight: 1.2 }}
        >
          {group.map((tech, i) => (
            <span key={`${index}-${tech}`} className="contents">
              {i > 0 ? (
                <span className="opacity-40" aria-hidden>
                  ·
                </span>
              ) : null}
              <span className="inline-block">{tech}</span>
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const AvailabilityBadge = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={copyItem}
      className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500"
    >
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      {t("hero.availability")}
    </motion.div>
  );
};

/**
 * Hero editorial: H1 + rolling stack + copy + CV.
 */
const Hero = ({ aboutRef }) => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  const titleColor = isDarkMode ? "text-secondaryDark" : "text-secondaryLight";
  const bodyColor = isDarkMode ? "text-neutral-400" : "text-neutral-600";

  return (
    <section
      ref={aboutRef}
      className="relative mx-5 pt-28 sm:mx-10 md:mx-16 lg:mx-24 lg:pt-32"
    >
      <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <div className="min-w-0 overflow-visible lg:col-span-7">
          <motion.h1
            className={`font-Mersad text-5xl font-bold tracking-tighter md:text-8xl ${titleColor}`}
            style={{ lineHeight: 1.15 }}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
          >
            <motion.span className="block" variants={titleItem}>
              {t("hero.role")}
            </motion.span>
          </motion.h1>

          <motion.div
            className="w-full min-w-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
          >
            <RollingTechStack isDarkMode={isDarkMode} />
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col lg:col-span-5 lg:pt-3"
          variants={copyContainer}
          initial="hidden"
          animate="show"
        >
          <AvailabilityBadge />

          <motion.p
            variants={copyItem}
            className={`max-w-md text-base leading-relaxed ${bodyColor}`}
          >
            {t("hero.lead")}
          </motion.p>
          <motion.p
            variants={copyItem}
            className={`mt-5 max-w-md text-base leading-relaxed ${bodyColor}`}
          >
            {t("hero.support")}
          </motion.p>

          <motion.div variants={copyItem} className="mt-10">
            <CvButton />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
