import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { isDarkMode } = useTheme();

  return (
    <nav
      className={`py-2 flex items-center justify-between md:px-24 px-4 ${
        isDarkMode ? "bg-primaryDark borderBottomDark" : "bg-secondaryLight"
      }`}
    >
      {/* Toggle de tema a la izquierda */}
      <div className="hidden md:flex items-center">
        <Toggle />
      </div>

      {/* Secciones de la navbar */}
      <div
        className={`hidden md:flex items-center  text-xl font-bold space-x-4 ml-auto mr-8 ${
          isDarkMode ? "text-secondaryDark" : "text-primaryLight"
        }`}
      >
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects </Link>
        <Link href="/services">Services </Link>
      </div>

      {/* Iconos a la derecha */}
      <div className="hidden md:flex items-center space-x-4">
        <Icon
          iconName="github"
          color={isDarkMode ? "#C1CCD6" : "#FFF1DD"}
          size={30}
        />
        <Icon
          iconName="linkedin"
          color={isDarkMode ? "#C1CCD6" : "#FFF1DD"}
          size={30}
        ></Icon>
      </div>
      <div className="md:hidden ml-auto cursor-pointer">
        <Icon
          iconName="menu"
          color={isDarkMode ? "#C1CCD6" : "#FFF1DD"}
          size={40}
        />
      </div>
    </nav>
  );
};

export default Navbar;
