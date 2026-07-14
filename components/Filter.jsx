"use client";

import { motion } from "motion/react";
import { useTheme } from "@/context/ThemeContext";

const Filter = ({ id, label, onFilterClick, activeFilter }) => {
  const { isDarkMode } = useTheme();
  const isActive = id === activeFilter;

  return (
    <button
      type="button"
      onClick={() => onFilterClick(id)}
      aria-pressed={isActive}
      className={`relative cursor-pointer px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] transition-colors duration-300 ${
        isActive
          ? isDarkMode
            ? "text-primaryDark"
            : "text-secondaryLight"
          : isDarkMode
            ? "text-secondaryDark/70 hover:text-secondaryDark"
            : "text-secondaryLight/45 hover:text-secondaryLight"
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeFilter"
          className={`absolute inset-0 rounded-full ${
            isDarkMode ? "bg-secondaryDark" : "bg-[#E8DFD2]/90"
          }`}
          transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.7 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default Filter;
