import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Icon from "./Icon";

const GenericButton = ({ onClick, label, icon, uppercase }) => {
  const { isDarkMode } = useTheme();

  return (
    <button
      onClick={onClick}
      className={` ${
        isDarkMode
          ? "bg-primaryDark text-secondaryDark border-secondaryDark"
          : "bg-primaryLight  text-secondaryLight border-secondaryLight"
      } border-2 font-bold py-2 px-4 rounded-full `}
    >
      <span
        className={`flex items-center ${
          uppercase ? "uppercase" : "normal-case"
        }`}
      >
        {label}
        <Icon
          iconName={icon}
          color={isDarkMode ? "#C1CCD6" : "#252525"}
          size={30}
        />
      </span>
    </button>
  );
};

export default GenericButton;
