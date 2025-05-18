import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "next-i18next";

const ExperienceContainer = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  const experiences = t("experiences", { returnObjects: true });

  // Función para procesar la descripción y formatear los bullet points
  const formatDescription = (description) => {
    if (!description) return null;
    
    // Dividir el texto por saltos de línea
    const paragraphs = description.split('\n\n');
    
    // Agrupar los elementos para generar la salida con el formato correcto
    const elements = [];
    let bulletPoints = [];
    
    paragraphs.forEach((paragraph, index) => {
      // Si el párrafo comienza con un asterisco, es un bullet point
      if (paragraph.trim().startsWith('*')) {
        bulletPoints.push(
          <li 
            key={`bullet-${index}`}
            className={`ml-5 mb-2 ${isDarkMode ? "text-colorDark" : "text-primaryDark"}`}
          >
            {paragraph.trim().substring(1).trim()}
          </li>
        );
      } else {
        // Si hay bullet points acumulados, agregarlos a la lista
        if (bulletPoints.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc mb-4">
              {bulletPoints}
            </ul>
          );
          bulletPoints = []; // Reiniciar la lista de bullets
        }
        
        // Agregar el párrafo normal
        elements.push(
          <p 
            key={`paragraph-${index}`}
            className={`mb-4 ${isDarkMode ? "text-colorDark" : "text-primaryDark"}`}
          >
            {paragraph}
          </p>
        );
      }
    });
    
    // Si quedan bullet points al final, agregarlos
    if (bulletPoints.length > 0) {
      elements.push(
        <ul key="list-final" className="list-disc mb-4">
          {bulletPoints}
        </ul>
      );
    }
    
    return elements;
  };

  return (
    <div className="flex flex-col gap-6 sm:mx-20 mx-2 mt-5">
      {experiences && experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative p-4 border-solid border-2 duration-1000 transition-all ${
            isDarkMode
              ? "bg-primaryDark border-secondaryDark"
              : "bg-primaryLight border-colorLight"
          }`}
        >
          <div className="flex flex-col md:flex-row md:justify-between mb-3">
            <h3
              className={`text-xl font-semibold duration-1000 transition-all ${
                isDarkMode ? "text-colorDark" : "text-primaryDark"
              }`}
            >
              {experience.role}
            </h3>
            <span
              className={`text-sm md:text-base font-medium italic duration-1000 transition-all ${
                isDarkMode ? "text-colorDark/80" : "text-primaryDark/80"
              }`}
            >
              {experience.period}
            </span>
          </div>
          
          <h2
            className={`text-lg font-bold mb-3 duration-1000 transition-all ${
              isDarkMode ? "text-colorDark" : "text-primaryDark"
            }`}
          >
            {experience.title}
          </h2>
          
          <div className={`duration-1000 transition-all text-base`}>
            {formatDescription(experience.description)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContainer;
