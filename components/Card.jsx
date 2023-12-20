import React from "react";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";

const Card = ({ number, title, name }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`max-w-xs mx-auto border-solid border-2 ${
        isDarkMode
          ? "bg-primaryDark border-secondaryDark"
          : "bg-primaryLight border-colorLight"
      } overflow-hidden p-2 w-44 h-60 mb-5`}
    >
      {/* Número en la parte superior izquierda */}
      <div
        className={`text-xl font-bold mb-2 ${
          isDarkMode ? "text-secondaryDark" : "text-colorLight"
        }`}
      >
        {number}
      </div>

      {/* Icono centrado en el medio */}
      <div className="flex items-center justify-center mb-4">
        <Icon
          iconName={name}
          color={isDarkMode ? "#C1CCD6" : "#252525"}
          size={120}
        />
      </div>

      {/* Título debajo del icono */}
      <div className="text-center mt-8">
        <h2
          className={`text-lg font-bold ${
            isDarkMode ? "text-secondaryDark" : "text-colorLight"
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
