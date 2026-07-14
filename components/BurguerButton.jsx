"use client";

import React from "react";
import styled from "styled-components";

function BurguerButton({ clicked, handleClick, color = "#252525" }) {
  return (
    <Burguer $color={color}>
      <div
        onClick={handleClick}
        className={`icon nav-icon-5 ${clicked ? "open" : ""}`}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </div>
    </Burguer>
  );
}

export default BurguerButton;

const Burguer = styled.div`
  .nav-icon-5 {
    width: 28px;
    height: 22px;
    margin: 6px;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .nav-icon-5 span {
    background-color: ${(p) => p.$color};
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 2.5px;
    transition-duration: 400ms;
  }
  .nav-icon-5 span:nth-child(1) {
    top: 0;
    left: 0;
  }
  .nav-icon-5 span:nth-child(2) {
    top: 10px;
    left: 0;
    opacity: 1;
  }
  .nav-icon-5 span:nth-child(3) {
    bottom: 0;
    left: 0;
  }
  .nav-icon-5:not(.open):hover span:nth-child(1) {
    transform: rotate(-3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(2) {
    transform: rotate(3deg) scaleY(1.1);
  }
  .nav-icon-5:not(.open):hover span:nth-child(3) {
    transform: rotate(-4deg) scaleY(1.1);
  }
  .nav-icon-5.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 10px;
  }
  .nav-icon-5.open span:nth-child(2) {
    opacity: 0;
  }
  .nav-icon-5.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 10px;
  }
`;
