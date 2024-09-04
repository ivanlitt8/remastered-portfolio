import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "next-i18next";

const ExperienceContainer = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  const experience = t("experience", { returnObjects: true });

  console.log(experience);
  return (
    <div className="flex flex-wrap sm:mx-20 mx-2 mt-5">
      <div
        className={`relative p-2 border-solid border-2 duration-1000 transition-all ${
          isDarkMode
            ? "bg-primaryDark border-secondaryDark"
            : "bg-primaryLight border-colorLight"
        }`}
      >
        <h3
          className={`text-xl underline font-semibold text-secondary mb-4 duration-1000 transition-all ${
            isDarkMode ? "text-colorDark" : "text-primaryDark"
          }`}
        >
          {experience.role}
        </h3>
        <h2
          className={`text-lg font-bold mb-2 duration-1000 transition-all ${
            isDarkMode ? "text-colorDark" : "text-primaryDark"
          }`}
        >
          {experience.title}
        </h2>
        <p
          className={`text-base duration-1000 transition-all ${
            isDarkMode ? "text-colorDark" : "text-primaryDark"
          }`}
        >
          {experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceContainer;
