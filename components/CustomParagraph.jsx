import React from "react";
import { useTheme } from "@/context/ThemeContext";

const CustomParagraph = ({ text }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`mx-12 sm:mx-20 text-base sm:text-xl font-medium ${
        isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
      }`}
    >
      <p>{text}</p>
    </div>
  );
};

export default CustomParagraph;
