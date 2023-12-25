import React from "react";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";

const MailButton = ({ onClick, label, icon, uppercase }) => {
  const { isDarkMode } = useTheme();

  return (
    <button
      onClick={onClick}
      className={` ${
        isDarkMode
          ? "bg-primaryDark text-secondaryDark border-secondaryDark"
          : "bg-primaryDark  text-activeLight border-primaryDark"
      } border-2 font-medium py-2 px-4 rounded-3xl`}
    >
      <span
        className={`flex items-center text-3xl mx-10 ${
          uppercase ? "uppercase" : "normal-case"
        }`}
      >
        {label}
        <div className="ml-5">
          <Icon
            iconName={icon}
            color={isDarkMode ? "#C1CCD6" : "#FFFFFF"}
            size={20}
          />
        </div>
      </span>
    </button>
  );
};
export default MailButton;
