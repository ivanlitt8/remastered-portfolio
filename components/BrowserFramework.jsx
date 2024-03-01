import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Icon from "./Icon";

const BrowserFramework = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-52 h-40 border-solid border-2 rounded-2xl ${
        isDarkMode ? "border-secondaryDark" : "border-black"
      } `}
    >
      <div
        className={`h-8 flex items-center border-solid border-b-2 ${
          isDarkMode ? "border-secondaryDark" : "border-primaryDark"
        } `}
      >
        <div className="flex space-x-1 ml-3">
          <div
            className={`h-2 w-2 rounded-full ${
              isDarkMode ? "bg-secondaryDark" : "bg-primaryDark"
            }`}
          ></div>
          <div
            className={`h-2 w-2 rounded-full ${
              isDarkMode ? "bg-secondaryDark" : "bg-primaryDark"
            }`}
          ></div>
          <div
            className={`h-2 w-2 rounded-full ${
              isDarkMode ? "bg-secondaryDark" : "bg-primaryDark"
            }`}
          ></div>
        </div>
      </div>
      {/* <Icon iconName={"linkedin"} color={"#FFFFFF"} size={150} /> */}
    </div>
  );
};

export default BrowserFramework;
