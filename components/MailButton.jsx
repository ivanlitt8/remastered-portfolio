import React from "react";
import Icon from "./Icon";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const MailButton = ({ label, icon, uppercase }) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="mailto:ivanlitt8@gmail.com"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` ${
        isDarkMode
          ? "bg-primaryDark text-secondaryDark border-secondaryDark hover:bg-secondaryDark hover:text-primaryDark"
          : "bg-primaryDark  text-activeLight border-primaryDark hover:bg-hoverOptional hover:text-secondaryLight"
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
            hoverColor={isDarkMode ? "#272329" : "#252525"}
            size={20}
            isHovered={isHovered}
          />
        </div>
      </span>
    </a>
  );
};
export default MailButton;
