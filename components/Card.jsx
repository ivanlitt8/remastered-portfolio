import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const Card = ({ number, icon, title }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6">
      {/* Número en la parte superior izquierda */}
      <div className="text-xl font-bold mb-2">{number}</div>

      {/* Icono centrado en el medio */}
      <div className="text-center mb-4">
        <Image src={icon} alt="title" width={25} />
      </div>

      {/* Título debajo del icono */}
      <div className="text-center">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
