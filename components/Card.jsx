"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  Code2,
  Database,
  LayoutTemplate,
  Palette,
  Rocket,
  Wrench,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ICON_MAP = {
  letter: Palette,
  chip: Code2,
  carbon: LayoutTemplate,
  deploy: Rocket,
  database: Database,
  wrench: Wrench,
};

const layoutTransition = {
  type: "spring",
  stiffness: 320,
  damping: 30,
  mass: 0.85,
};

const Card = ({
  id,
  number,
  title,
  name,
  content,
  isExpanded,
  gridStyle,
  onSelect,
  onHoverStart,
  onHoverEnd,
}) => {
  const { isDarkMode } = useTheme();
  const IconComponent = ICON_MAP[name] ?? Palette;

  return (
    <motion.button
      type="button"
      layout
      transition={layoutTransition}
      style={gridStyle}
      onClick={() => onSelect(id)}
      onMouseEnter={() => onHoverStart(id)}
      onMouseLeave={() => onHoverEnd(id)}
      onFocus={() => onHoverStart(id)}
      onBlur={() => onHoverEnd(id)}
      aria-expanded={isExpanded}
      className={`group relative flex h-full w-full flex-col overflow-hidden p-5 text-left transition-[border-color,background-color,color] duration-300 sm:p-6 ${
        isExpanded
          ? "border border-[#3A3530] bg-[#1E1B18] text-[#F3EDE4]"
          : isDarkMode
            ? "border border-secondaryDark/25 bg-primaryDark text-secondaryDark hover:border-secondaryDark/70"
            : "border border-secondaryLight/20 bg-primaryLight text-secondaryLight hover:border-secondaryLight/55"
      }`}
    >
      <motion.div
        layout="position"
        className="flex items-start justify-between gap-4"
      >
        <span className="font-mono text-xs opacity-50">{number}</span>

        <motion.div
          layout="position"
          animate={{ scale: isExpanded ? 1.06 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          className={`rounded-xl border p-2.5 transition-all duration-300 group-hover:scale-105 ${
            isExpanded
              ? "border-white/15 bg-white/10 text-[#F3EDE4]"
              : isDarkMode
                ? "border-white/10 bg-white/5 text-secondaryDark group-hover:border-white/20 group-hover:bg-white/10"
                : "border-neutral-200/60 bg-[#E8DFD2] text-secondaryLight group-hover:border-neutral-300 group-hover:bg-neutral-100"
          }`}
        >
          <IconComponent
            size={isExpanded ? 26 : 22}
            strokeWidth={1.5}
            className="shrink-0"
            aria-hidden
          />
        </motion.div>
      </motion.div>

      <motion.h2
        layout="position"
        className="mt-6 font-Mersad text-xl font-bold tracking-tighter sm:text-2xl"
      >
        {title}
      </motion.h2>

      <AnimatePresence initial={false} mode="popLayout">
        {isExpanded && (
          <motion.p
            key="description"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-prose text-sm leading-relaxed text-[#C4B8A8] sm:text-base"
          >
            {content}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default Card;
