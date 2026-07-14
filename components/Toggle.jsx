import React from "react";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";

const Toggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`relative h-10 w-20 cursor-pointer rounded-full border p-1 ${
        isDarkMode
          ? "border-transparent bg-secondaryDark"
          : "border-secondaryLight/20 bg-white/50"
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
        />
      </div>
    </div>
  );
};

export default Toggle;
