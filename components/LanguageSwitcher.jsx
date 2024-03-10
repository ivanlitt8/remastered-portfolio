import React from "react";
import { useTranslation } from "next-i18next";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [newLanguage, setNewLanguage] = useState("en");
  const { isDarkMode } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false); // Nuevo estado para controlar la animación

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
      className={`transition-transform duration-500 ease-out transform cursor-pointer ${
        isAnimating ? "scale-110" : ""
      }`}
    >
      <Icon
        iconName={newLanguage == "en" ? "langEs" : "langEn"}
        color={isDarkMode ? "#C1CCD6" : "#FFF1DD"}
        size="40"
        className={`absolute ${isDarkMode ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
};

export default LanguageSwitcher;
