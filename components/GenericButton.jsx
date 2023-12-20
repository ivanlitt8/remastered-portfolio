import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Icon from "./Icon";

const GenericButton = ({ onClick, label }) => {
  const { isDarkMode } = useTheme();

  return (
    <button
      onClick={onClick}
      className="bg-primaryLight text-black border-black border-2 font-bold py-2 px-4 rounded-full"
    >
      {label}
      <Icon
        iconName="github"
        color={isDarkMode ? "#C1CCD6" : "#FFF1DD"}
        size={30}
      />
    </button>
  );
};

export default GenericButton;
