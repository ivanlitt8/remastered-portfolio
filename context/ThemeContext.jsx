"use client";

import React, { createContext, useState, useContext } from "react";

// Creamos el contexto
export const ThemeContext = createContext();

// Creamos el proveedor del tema
export const ThemeProvider = ({ children }) => {
  // Estado para almacenar el tema
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función para alternar entre modos
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Valor del contexto
  const themeContextValue = {
    isDarkMode,
    toggleTheme,
  };

  // Proporcionamos el contexto a los componentes hijos
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del tema
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }

  return context;
};
