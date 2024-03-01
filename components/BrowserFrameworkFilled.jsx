import React from "react";
import { useTheme } from "@/context/ThemeContext";

const BrowserFrameworkFilled = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-52 h-40 border-solid border-2 rounded-2xl ${
        isDarkMode ? "border-secondaryDark" : "border-black"
      } `}
    >
      <div
        className={`h-8 rounded-t-xl flex items-center ${
          isDarkMode ? "bg-secondaryDark" : "bg-black"
        } `}
      >
        <div className="flex space-x-1 ml-3">
          <div
            className={`h-2 w-2 rounded-full ${
              isDarkMode ? "bg-primaryDark" : "bg-primaryLight"
            }`}
          ></div>
          <div
            className={`h-2 w-2 rounded-full ${
              isDarkMode ? "bg-primaryDark" : "bg-primaryLight"
            }`}
          ></div>
          <div
            className={`h-2 w-2 rounded-full ${
              isDarkMode ? "bg-primaryDark" : "bg-primaryLight"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BrowserFrameworkFilled;
