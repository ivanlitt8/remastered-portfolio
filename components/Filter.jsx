import React from "react";
import { useTheme } from "@/context/ThemeContext";

const Filter = ({ id, label, onFilterClick, activeFilter }) => {
  const { isDarkMode } = useTheme();

  const handleClick = () => {
    // Llama a la función proporcionada desde el padre con el id del filtro clicado
    onFilterClick(id);
  };

  const getButtonStyle = () => {
    const baseStyle =
      "border-2 rounded-full cursor-pointer sm:w-20 w-16 mt-5 text-center sm:text-lg text-sm font-medium uppercase";

    return id === activeFilter
      ? isDarkMode
        ? `${baseStyle} bg-secondaryDark border-primaryDark text-primaryDark`
        : `${baseStyle} bg-secondaryLight border-primaryLight text-primaryLight`
      : isDarkMode
      ? `${baseStyle} bg-primaryDark border-secondaryDark text-secondaryDark`
      : `${baseStyle} bg-primaryLight border-secondaryLight text-secondaryLight`;
  };

  return (
    <div onClick={handleClick} className={getButtonStyle()}>
      {label}
    </div>
  );
};

export default Filter;
