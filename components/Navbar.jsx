import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  // const { isDarkMode } = useTheme();

  // console.log(isDarkMode);

  return (
    <nav className="bg-secondaryLight py-2 flex items-center justify-between px-24">
      {/* Toggle de tema a la izquierda */}
      <div className="hidden md:flex items-center">
        <Toggle />
      </div>

      {/* Secciones de la navbar */}
      <div className="hidden md:flex items-center text-white text-xl font-bold space-x-4 ml-auto mr-8">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects </Link>
        <Link href="/services">Services </Link>
      </div>

      {/* Iconos a la derecha */}
      <div className="hidden md:flex items-center space-x-4">
        <Icon iconName="github" color={"white"} size={30} />
        <Icon iconName="linkedin" color={"white"} size={30}></Icon>
      </div>
    </nav>
  );
};

export default Navbar;
