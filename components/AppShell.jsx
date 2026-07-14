"use client";

import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import AmbientGlow from "@/components/AmbientGlow";

/**
 * Body temático + glow global. Mantiene html/body válidos en el layout.
 */
const AppShell = ({ children }) => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.body.className = isDarkMode ? "bg-primaryDark" : "bg-primaryLight";
  }, [isDarkMode]);

  return (
    <>
      <AmbientGlow />
      <div className="relative z-10">{children}</div>
    </>
  );
};

export default AppShell;
