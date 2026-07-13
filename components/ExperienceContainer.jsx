"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "next-i18next";
import { ChevronDown } from "lucide-react";

const TECH_LINE_REGEX =
  /(?:Technologies and tools|Tecnologías y herramientas):\s*(.+)$/is;

const layoutTransition = {
  type: "spring",
  stiffness: 280,
  damping: 32,
  mass: 0.85,
};

function parseExperienceContent(description) {
  if (!description) {
    return { intro: [], bullets: [], techs: [] };
  }

  let body = description.trim();
  let techs = [];

  const techMatch = body.match(TECH_LINE_REGEX);
  if (techMatch) {
    techs = techMatch[1]
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    body = body.slice(0, techMatch.index).trim();
  }

  const intro = [];
  const bullets = [];

  body.split(/\n\n+/).forEach((block) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("*")) {
      bullets.push(trimmed.replace(/^\*\s*/, "").trim());
      return;
    }

    intro.push(trimmed);
  });

  return { intro, bullets, techs };
}

function TimelineNode({ isDarkMode, isExpanded, isInFocus }) {
  const isLit = isExpanded || isInFocus;

  return (
    <motion.span
      aria-hidden
      layout
      transition={layoutTransition}
      className={`absolute left-0 top-1.5 flex items-center justify-center border-2 ${
        isExpanded
          ? `h-8 w-3.5 rounded-full ${
              isDarkMode
                ? "border-secondaryDark bg-secondaryDark"
                : "border-secondaryLight bg-secondaryLight"
            }`
          : `h-3.5 w-3.5 rounded-full ${
              isLit
                ? isDarkMode
                  ? "scale-110 border-secondaryDark bg-secondaryDark"
                  : "scale-110 border-secondaryLight bg-secondaryLight"
                : isDarkMode
                  ? "border-secondaryDark bg-primaryDark"
                  : "border-neutral-300 bg-primaryLight"
            }`
      }`}
    >
      <span
        className={`rounded-full transition-colors duration-300 ${
          isExpanded
            ? isDarkMode
              ? "h-3 w-1 bg-primaryDark"
              : "h-3 w-1 bg-primaryLight"
            : isLit
              ? isDarkMode
                ? "h-1.5 w-1.5 bg-primaryDark"
                : "h-1.5 w-1.5 bg-primaryLight"
              : isDarkMode
                ? "h-1.5 w-1.5 bg-secondaryDark"
                : "h-1.5 w-1.5 bg-secondaryLight"
        }`}
      />
    </motion.span>
  );
}

function ExperienceItem({
  experience,
  id,
  index,
  isDarkMode,
  isExpanded,
  onToggle,
  showDetailsLabel,
  hideDetailsLabel,
}) {
  const itemRef = useRef(null);
  const isInFocus = useInView(itemRef, {
    once: false,
    margin: "-38% 0px -38% 0px",
    amount: 0.2,
  });

  const { intro, bullets, techs } = parseExperienceContent(
    experience.description
  );
  const summary = intro[0] ?? "";

  return (
    <motion.li
      ref={itemRef}
      layout
      transition={layoutTransition}
      animate={{ opacity: isInFocus ? 1 : 0.42 }}
      className="relative pb-16 pl-10 last:pb-4"
    >
      <TimelineNode
        isDarkMode={isDarkMode}
        isExpanded={isExpanded}
        isInFocus={isInFocus}
      />

      <motion.div
        layout
        transition={layoutTransition}
        className="max-w-4xl xl:max-w-5xl"
      >
        <button
          type="button"
          onClick={() => onToggle(id)}
          aria-expanded={isExpanded}
          className="w-full cursor-pointer text-left"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3
              className={`text-xl font-bold tracking-tight ${
                isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
              }`}
            >
              {experience.role}
            </h3>
            <time
              className={`shrink-0 font-mono text-xs tracking-wide ${
                isDarkMode ? "text-secondaryDark" : "text-neutral-600"
              }`}
            >
              {experience.period}
            </time>
          </div>

          <p
            className={`mt-1 font-medium tracking-tight ${
              isDarkMode ? "text-secondaryDark" : "text-neutral-700"
            }`}
          >
            {experience.title}
          </p>

          {summary && (
            <p
              className={`mt-3 line-clamp-2 text-[15px] leading-relaxed ${
                isDarkMode ? "text-secondaryDark" : "text-neutral-600"
              }`}
            >
              {summary}
            </p>
          )}
        </button>

        <AnimatePresence initial={false} mode="popLayout">
          {isExpanded && bullets.length > 0 && (
            <motion.div
              key="deep-dive"
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul
                className={`mt-5 grid grid-cols-1 items-start gap-x-8 gap-y-2.5 md:grid-cols-2 text-[15px] leading-relaxed ${
                  isDarkMode ? "text-secondaryDark" : "text-neutral-600"
                }`}
              >
                {bullets.map((bullet) => (
                  <li key={bullet.slice(0, 64)} className="flex gap-2.5">
                    <span
                      aria-hidden
                      className={`mt-[0.55em] h-1 w-1 shrink-0 rounded-full ${
                        isDarkMode ? "bg-secondaryDark" : "bg-neutral-400"
                      }`}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {techs.length > 0 && (
          <ul
            className={`mt-5 flex flex-wrap gap-2 transition-opacity duration-500 ${
              isInFocus ? "opacity-100" : "opacity-70"
            }`}
          >
            {techs.map((tech) => (
              <motion.li
                key={tech}
                layout
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
                className={`cursor-default rounded-md border px-2.5 py-1 text-xs font-medium ${
                  isDarkMode
                    ? "border-secondaryDark bg-primaryDark text-secondaryDark"
                    : "border-neutral-300/30 bg-[#E8DFD2] text-secondaryLight"
                }`}
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        )}

        {bullets.length > 0 && (
          <motion.button
            type="button"
            layout
            onClick={() => onToggle(id)}
            aria-expanded={isExpanded}
            className={`mt-5 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide transition-colors ${
              isDarkMode
                ? "text-secondaryDark hover:text-secondaryDark"
                : "text-secondaryLight/80 hover:text-secondaryLight"
            }`}
          >
            <span>{isExpanded ? hideDetailsLabel : showDetailsLabel}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={14} strokeWidth={1.75} aria-hidden />
            </motion.span>
          </motion.button>
        )}
      </motion.div>
    </motion.li>
  );
}

const ExperienceContainer = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const timelineRef = useRef(null);

  const experiencesData = t("experiences", { returnObjects: true });
  const experiences = Array.isArray(experiencesData)
    ? experiencesData
    : Object.values(experiencesData ?? {});

  const firstId =
    experiences.length > 0
      ? `${experiences[0].title}-${experiences[0].period}-0`
      : null;

  const [expandedExperienceId, setExpandedExperienceId] = useState(null);
  const didInitExpand = useRef(false);

  useEffect(() => {
    if (!didInitExpand.current && firstId) {
      setExpandedExperienceId(firstId);
      didInitExpand.current = true;
    }
  }, [firstId]);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  const pathScale = useTransform(pathProgress, [0, 1], [0, 1]);

  const handleToggle = (id) => {
    setExpandedExperienceId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mx-2 mt-8 max-w-5xl sm:mx-20 lg:max-w-6xl">
      <ol ref={timelineRef} className="relative">
        <div
          aria-hidden
          className={`absolute bottom-2 left-[7px] top-2 w-px ${
            isDarkMode ? "bg-[#C1CCD6]/25" : "bg-neutral-200"
          }`}
        />

        <motion.div
          aria-hidden
          className={`absolute left-[7px] top-2 w-px origin-top ${
            isDarkMode ? "bg-secondaryDark" : "bg-secondaryLight"
          }`}
          style={{
            bottom: 8,
            scaleY: pathScale,
          }}
        />

        {experiences.map((experience, index) => {
          const id = `${experience.title}-${experience.period}-${index}`;

          return (
            <ExperienceItem
              key={id}
              id={id}
              experience={experience}
              index={index}
              isDarkMode={isDarkMode}
              isExpanded={expandedExperienceId === id}
              onToggle={handleToggle}
              showDetailsLabel={t("experienceUi.showDetails")}
              hideDetailsLabel={t("experienceUi.hideDetails")}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default ExperienceContainer;
