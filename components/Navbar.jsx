import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { github, linkedin } from "../assets";

const Navbar = () => {
  const { isDarkMode } = useTheme();

  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      {/* Toggle de tema a la izquierda */}
      <div className="flex items-center">
        <Toggle />
      </div>

      {/* Secciones de la navbar */}
      <div className="flex space-x-4">
        <Link href="/about">
          <a className="text-white">About</a>
        </Link>
        <Link href="/contact">
          <a className="text-white">Contact</a>
        </Link>
        <Link href="/projects">
          <a className="text-white">Projects</a>
        </Link>
        <Link href="/services">
          <a className="text-white">Services</a>
        </Link>
      </div>

      {/* Iconos a la derecha */}
      <div className="flex items-center space-x-2">
        <Image
          src={linkedin}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <Image
          src={github}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </nav>
  );
};

export default Navbar;
