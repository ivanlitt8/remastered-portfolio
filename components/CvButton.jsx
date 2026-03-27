import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Icon from "./Icon";
import { useTranslation } from "next-i18next";

const CvButton = ({ label, icon, uppercase }) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const { i18n } = useTranslation();

  const cvUrls = {
    es: "https://docs.google.com/document/d/13qTzahyjQXhoblXCOZ8LZLgfvIEL1dbQl4hg6Cpb-lc/edit?usp=sharing",
    en: "https://docs.google.com/document/d/1zUl9B5np0IDgsJRJtn2UIrAePvWi5vcaD66cHwWfzs0/edit?usp=sharing" // Reemplaza con el ID de tu CV en inglés
  };

  const downloadCv = () => {
    const currentLanguage = i18n.language;
    const fileUrl = cvUrls[currentLanguage] || cvUrls.es; // Usa el CV en español como fallback
    window.open(fileUrl, "_blank");
  };

  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        downloadCv();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` ${
        isDarkMode
          ? "bg-primaryDark text-secondaryDark border-secondaryDark hover:bg-secondaryDark hover:text-primaryDark "
          : "bg-primaryLight  text-secondaryLight border-secondaryLight light-mode hover:bg-colorLight hover:text-activeLight"
      } border-2 font-bold py-2 px-4 rounded-full transition-all ease-in-out duration-300 `}
    >
      <span
        className={`flex items-center text-lg ${
          uppercase ? "uppercase" : "normal-case"
        }`}
      >
        {label}
        <Icon
          iconName={icon}
          color={isDarkMode ? "#C1CCD6" : "#252525"}
          hoverColor={isDarkMode ? "#272329" : "#FFFFFF"}
          size={30}
          isHovered={isHovered}
        />
      </span>
    </button>
  );
};

export default CvButton;
