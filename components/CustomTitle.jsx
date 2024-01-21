import React from "react";
import { useTheme } from "@/context/ThemeContext";

const CustomTitle = ({ title }) => {
  const { isDarkMode } = useTheme();
  return (
    <h1
      className={`text-5xl md:text-8xl font-Mersad font-bold mx-5 sm:mx-20 mt-10 ${
        isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
      }`}
    >
      {title}
    </h1>
  );
};

export default CustomTitle;
