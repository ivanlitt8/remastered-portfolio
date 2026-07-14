"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import Icon from "./Icon";
import BurguerButton from "./BurguerButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "next-i18next";

const Navbar = ({ aboutRef, contactRef, projectsRef, servicesRef }) => {
  const { isDarkMode } = useTheme();
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setClicked(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll del body con menú abierto
  useEffect(() => {
    document.body.style.overflow = clicked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [clicked]);

  const onOverlay = clicked;
  const ink = isDarkMode || onOverlay ? "#C1CCD6" : "#252525";
  const linkTone =
    isDarkMode || onOverlay ? "text-secondaryDark" : "text-secondaryLight";

  const shell = isDarkMode ? "bg-primaryDark/90" : "bg-primaryLight/90";
  const edge = scrolled
    ? isDarkMode
      ? "border-b border-white/10"
      : "border-b border-neutral-900/5"
    : "border-b border-transparent";

  const mobilePanelBg = isDarkMode ? "bg-primaryDark" : "bg-secondaryLight";

  const navLinks = (
    <>
      <Link
        href="#"
        className="transition-opacity duration-300 hover:opacity-60"
        onClick={(event) => {
          event.preventDefault();
          scrollToRef(aboutRef);
        }}
      >
        <span>{t("navbar.about")}</span>
      </Link>
      <Link
        href="#"
        className="transition-opacity duration-300 hover:opacity-60"
        onClick={(event) => {
          event.preventDefault();
          scrollToRef(contactRef);
        }}
      >
        <span>{t("navbar.contact")}</span>
      </Link>
      <Link
        href="#"
        className="transition-opacity duration-300 hover:opacity-60"
        onClick={(event) => {
          event.preventDefault();
          scrollToRef(projectsRef);
        }}
      >
        <span>{t("navbar.projects")}</span>
      </Link>
      <Link
        href="#"
        className="transition-opacity duration-300 hover:opacity-60"
        onClick={(event) => {
          event.preventDefault();
          scrollToRef(servicesRef);
        }}
      >
        <span>{t("navbar.services")}</span>
      </Link>
      <div className="flex items-center space-x-3 md:pl-2">
        <a
          href="https://github.com/ivanlitt8"
          className="transition-opacity duration-300 hover:opacity-60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="github" color={ink} size={26} />
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-litt/"
          className="transition-opacity duration-300 hover:opacity-60"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="linkedin" color={ink} size={26} />
        </a>
        <LanguageSwitcher ink={ink} />
      </div>
    </>
  );

  return (
    <>
      <nav
        className={`fixed top-0 z-50 flex w-full items-center justify-between px-5 py-5 sm:px-10 md:px-16 lg:px-24 ${
          clicked
            ? `${mobilePanelBg} border-b border-transparent`
            : `${shell} backdrop-blur-md ${edge}`
        }`}
      >
        <div className="relative z-20">
          <Toggle />
        </div>

        {/* Desktop */}
        <div
          className={`ml-auto mr-2 hidden items-center space-x-5 text-[15px] font-medium tracking-wide md:flex ${linkTone}`}
        >
          {navLinks}
        </div>

        <div className="relative z-20 ml-auto cursor-pointer md:hidden">
          <BurguerButton
            clicked={clicked}
            handleClick={handleClick}
            color={ink}
          />
        </div>
      </nav>

      {/* Panel móvil fullscreen con cuerpo sólido (fuera del blur del nav) */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden ${mobilePanelBg} transition-opacity duration-300 ${
          clicked
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!clicked}
      >
        <div
          className={`flex flex-col items-center gap-1 text-center text-2xl font-medium leading-[3.5rem] tracking-wide ${linkTone}`}
        >
          {navLinks}
        </div>
      </div>
    </>
  );
};

export default Navbar;
