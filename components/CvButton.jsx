import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import Icon from "./Icon";

const CvButton = ({ onClick, label, icon, uppercase }) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
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
