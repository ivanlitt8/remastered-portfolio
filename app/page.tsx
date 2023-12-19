"use client";

import NavBar from "@/components/Navbar";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <body className={`${isDarkMode ? "bg-primaryDark" : "bg-primaryLight"}`}>
      <NavBar />
    </body>
  );
}
