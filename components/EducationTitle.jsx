import React from "react";
import { useTheme } from "@/context/ThemeContext";

const EducationTitle = ({ title }) => {
  const { isDarkMode } = useTheme();

  return (
    <h3
      className={`text-2xl md:text-5xl mx-2 md:mx-20 ${
        isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
      }`}
    >
      {title}
    </h3>
  );
};

export default EducationTitle;
