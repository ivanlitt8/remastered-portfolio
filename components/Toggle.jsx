import React from "react";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";

const Toggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`relative w-20 h-10 rounded-full p-1 cursor-pointer ${
        isDarkMode ? "bg-secondaryDark" : "bg-primaryLight"
      }`}
      onClick={toggleTheme}
    >
      <div
        className={`w-8 h-8 rounded-full absolute transition-transform duration-500 ease-out transform ${
          isDarkMode
            ? "translate-x-10 bg-primaryDark"
            : "translate-x-0 bg-secondaryLight"
        } flex items-center justify-center`}
      >
        <Icon
          iconName={isDarkMode ? "moon" : "sun"}
          color={isDarkMode ? "#C1CCD6" : "#FFF1DD"}
          size="30"
          className={`absolute ${isDarkMode ? "opacity-0" : "opacity-100"}`}
        />
      </div>
    </div>
  );
};

export default Toggle;
