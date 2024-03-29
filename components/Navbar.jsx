import React, { useState } from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import Icon from "./Icon";
import BurguerButton from "./BurguerButton";
import LanguageSwitcher from "./LanguageSwitcher";
import styled from "styled-components";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "next-i18next";

const Navbar = ({ aboutRef, contactRef, projectsRef, servicesRef }) => {
  const { isDarkMode } = useTheme();
  const [clicked, setClicked] = useState(false);
  const { t } = useTranslation();
  const handleClick = () => {
    setClicked(!clicked);
  };

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setClicked(false);
  };

  return (
    <nav
      className={`py-2 flex items-center justify-between md:px-24 px-4 fixed w-full z-20 top-0 ${
        isDarkMode ? "bg-primaryDark borderBottomDark" : "bg-secondaryLight"
      }`}
    >
      <div className="z-20">
        <Toggle />
      </div>

      <NavConteiner>
        <div className={`links ${clicked ? "active" : ""}`}>
          <div
            className={`flex items-center text-xl font-bold space-x-4 ml-auto mr-8 ${
              isDarkMode ? "text-secondaryDark" : "text-primaryLight"
            } flex-col md:flex-row`}
          >
            <Link
              href="#"
              className="transition-all transform hover:scale-125 hover:px-3 duration-500"
              onClick={(event) => {
                event.preventDefault();
                scrollToRef(aboutRef);
              }}
            >
              <span>{t("navbar.about")}</span>
            </Link>
            <Link
              href="#"
              className="transition-all transform hover:scale-125 hover:px-3  duration-500"
              onClick={(event) => {
                event.preventDefault();
                scrollToRef(contactRef);
              }}
            >
              <span>{t("navbar.contact")}</span>
            </Link>
            <Link
              href="#"
              className="transition-all transform hover:scale-125 hover:px-3 duration-500"
              onClick={(event) => {
                event.preventDefault();
                scrollToRef(projectsRef);
              }}
            >
              <span>{t("navbar.projects")}</span>
            </Link>
            <Link
              href="#"
              className="transition-all transform hover:scale-125 hover:px-3 duration-500"
              onClick={(event) => {
                event.preventDefault();
                scrollToRef(servicesRef);
              }}
            >
              <span>{t("navbar.services")}</span>
            </Link>
            {/* Iconos a la derecha */}
            <div className="flex items-center space-x-4">
              <div className="hover:scale-125 transition-all cursor-pointer duration-500 hover:px-2">
                <a href="https://github.com/ivanlitt8">
                  <Icon
                    iconName="github"
                    color={isDarkMode ? "#C1CCD6" : "#FFF1DD"}
                    size={30}
                  />
                </a>
              </div>
              <div className="hover:scale-125 transition-all cursor-pointer duration-500 hover:px-2">
                <a href="https://www.linkedin.com/in/ivan-litt/">
                  <Icon
                    iconName="linkedin"
                    color={isDarkMode ? "#C1CCD6" : "#FFF1DD"}
                    size={30}
                  />
                </a>
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        <BgMenu
          className={`initial ${clicked ? "active" : ""}`}
          isDarkMode={isDarkMode}
        ></BgMenu>
      </NavConteiner>
      <div className="md:hidden ml-auto cursor-pointer z-20">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
    </nav>
  );
};

export default Navbar;

const NavConteiner = styled.nav`
  position: relative;
  .links {
    z-index: 10;
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      span {
        display: inline;
      }
    }
  }

  .links.active {
    position: fixed;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    right: 0;
    left: 0;
    text-align: center;
    span {
      font-size: 2rem;
      line-height: 4rem;
    }
    transition: top 0.5s ease;
  }
`;
const BgMenu = styled.div`
  position: fixed;
  background: ${(props) => (props.isDarkMode ? "#272329" : "#252525")};
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.6s ease;
  &.active {
    top: -0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;
