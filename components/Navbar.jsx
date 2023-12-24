import React, { useState } from "react";
import Link from "next/link";
import Toggle from "./Toggle";
import Icon from "./Icon";
import BurguerButton from "./BurguerButton";
import styled from "styled-components";

import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { isDarkMode } = useTheme();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav
      className={`py-2 flex items-center justify-between md:px-24 px-4 ${
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
            <Link href="/about" onClick={handleClick}>
              <span>About</span>
            </Link>
            <Link href="/contact" onClick={handleClick}>
              <span>Contact</span>
            </Link>
            <Link href="/projects" onClick={handleClick}>
              <span>Projects</span>
            </Link>
            <Link href="/services" onClick={handleClick}>
              <span>Services</span>
            </Link>

            {/* Iconos a la derecha */}
            <div className="flex items-center space-x-4">
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
    width: 100%;
    position: absolute;
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
  }
`;
const BgMenu = styled.div`
  position: absolute;
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
