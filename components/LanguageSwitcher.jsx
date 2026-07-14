"use client";

import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";

const LanguageSwitcher = ({ ink }) => {
  const { i18n } = useTranslation();
  const [newLanguage, setNewLanguage] = useState("en");
  const { isDarkMode } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const color = ink ?? (isDarkMode ? "#C1CCD6" : "#252525");

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const languageToSet = currentLanguage === "en" ? "es" : "en";

    setIsAnimating(true);

    setTimeout(() => {
      setNewLanguage(languageToSet);
      i18n.changeLanguage(languageToSet);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 500);
  };

  return (
    <div
      onClick={changeLanguage}
      className={`cursor-pointer transition-transform duration-500 ease-out ${
        isAnimating ? "scale-110" : ""
      }`}
      role="button"
      aria-label="Switch language"
    >
      <Icon
        iconName={newLanguage === "en" ? "langEs" : "langEn"}
        color={color}
        size="36"
      />
    </div>
  );
};

export default LanguageSwitcher;
