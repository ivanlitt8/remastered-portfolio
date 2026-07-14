"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "next-i18next";

const accordionTransition = {
  type: "spring",
  stiffness: 140,
  damping: 22,
  mass: 0.75,
};

const EducationItem = ({ title, place, date, isDarkMode }) => (
  <li className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
    <div className="min-w-0">
      <p
        className={`text-base font-medium tracking-tight sm:text-lg ${
          isDarkMode ? "text-neutral-100" : "text-neutral-900"
        }`}
      >
        {title}
      </p>
      {place ? (
        <p
          className={`mt-0.5 text-sm ${
            isDarkMode ? "text-neutral-400" : "text-neutral-500"
          }`}
        >
          {place}
        </p>
      ) : null}
    </div>
    {date ? (
      <span className="shrink-0 font-mono text-xs text-neutral-400 sm:text-sm">
        {date}
      </span>
    ) : null}
  </li>
);

const EducationAccordion = ({ title, open, onToggle, children, isDarkMode }) => (
  <div
    className={`border-b last:border-b-0 ${
      isDarkMode ? "border-white/10" : "border-neutral-200/70"
    }`}
  >
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
    >
      <h3
        className={`font-Mersad text-xl font-bold tracking-tighter sm:text-3xl md:text-4xl ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        {title}
      </h3>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
          isDarkMode
            ? "border-secondaryDark/25 text-secondaryDark group-hover:border-secondaryDark/50"
            : "border-neutral-300 text-neutral-600 group-hover:border-neutral-500"
        }`}
      >
        {open ? <Minus size={16} strokeWidth={1.75} /> : <Plus size={16} strokeWidth={1.75} />}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          key="panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={accordionTransition}
          className="overflow-hidden"
        >
          <motion.ul
            initial={{ y: -8 }}
            animate={{ y: 0 }}
            exit={{ y: -6 }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
            className="pb-5"
          >
            {children}
          </motion.ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  </div>
);

const EducationGrid = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const [openId, setOpenId] = useState("academic");

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const academic = [
    {
      title: t("education-cards.academic.card1.title"),
      place: t("education-cards.academic.card1.place"),
      date: t("education-cards.academic.card1.date"),
    },
    {
      title: t("education-cards.academic.card2.title"),
      place: t("education-cards.academic.card2.place"),
      date: t("education-cards.academic.card2.date"),
    },
  ];

  const courses = [
    {
      title: t("education-cards.courses.card5.title"),
      place: t("education-cards.courses.card5.place"),
      date: t("education-cards.courses.card5.date"),
    },
    {
      title: t("education-cards.courses.card1.title"),
      place: t("education-cards.courses.card1.place"),
      date: t("education-cards.courses.card1.date"),
    },
    {
      title: t("education-cards.courses.card2.title"),
      place: t("education-cards.courses.card2.place"),
      date: t("education-cards.courses.card2.date"),
    },
    {
      title: t("education-cards.courses.card3.title"),
      place: t("education-cards.courses.card3.place"),
      date: t("education-cards.courses.card3.date"),
    },
    {
      title: t("education-cards.courses.card4.title"),
      place: t("education-cards.courses.card4.place"),
      date: t("education-cards.courses.card4.date"),
    },
  ];

  const languages = [
    { title: t("education-cards.languages.lang1") },
    { title: t("education-cards.languages.lang2") },
  ];

  return (
    <section className="mx-5 mt-6 max-w-4xl sm:mx-20">
      <EducationAccordion
        title={t("education-cards.titles.academic")}
        open={openId === "academic"}
        onToggle={() => toggle("academic")}
        isDarkMode={isDarkMode}
      >
        {academic.map((item) => (
          <EducationItem key={item.title} {...item} isDarkMode={isDarkMode} />
        ))}
      </EducationAccordion>

      <EducationAccordion
        title={t("education-cards.titles.courses")}
        open={openId === "courses"}
        onToggle={() => toggle("courses")}
        isDarkMode={isDarkMode}
      >
        {courses.map((item) => (
          <EducationItem key={item.title} {...item} isDarkMode={isDarkMode} />
        ))}
      </EducationAccordion>

      <EducationAccordion
        title={t("education-cards.titles.languages")}
        open={openId === "languages"}
        onToggle={() => toggle("languages")}
        isDarkMode={isDarkMode}
      >
        {languages.map((item) => (
          <EducationItem key={item.title} {...item} isDarkMode={isDarkMode} />
        ))}
      </EducationAccordion>
    </section>
  );
};

export default EducationGrid;
