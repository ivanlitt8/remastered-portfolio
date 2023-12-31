import React from "react";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";

const Card = ({ number, title, name, content }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="mx-auto py-2">
      <div className="cursor-pointer group perspective max-w-xs overflow-hidden w-44 h-full">
        <div
          className={`relative p-2 border-solid border-2 preserve-3d group-hover:my-rotate-y-180 duration-1000 transition-all ${
            isDarkMode
              ? "bg-primaryDark border-secondaryDark"
              : "bg-primaryLight border-colorLight"
          }`}
        >
          {/* FRONT */}
          <div className="backface-hidden">
            <div
              className={`text-xl font-bold ${
                isDarkMode ? "text-secondaryDark" : "text-colorLight"
              }`}
            >
              {number}
            </div>
            <div className="flex items-center justify-center mb-4">
              <Icon
                iconName={name}
                color={isDarkMode ? "#C1CCD6" : "#252525"}
                size={120}
              />
            </div>
            <div className="text-center mt-8">
              <h2
                className={`text-lg font-bold ${
                  isDarkMode ? "text-secondaryDark" : "text-colorLight"
                }`}
              >
                {title}
              </h2>
            </div>
          </div>
          {/* BACK */}
          <div className="absolute top-0 backface-hidden my-rotate-y-180 p-2">
            <div
              className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-secondaryDark" : "text-colorLight"
              }`}
            >
              {number}
            </div>
            <div className="text-center">
              <p
                className={`text-sm font-bold px-1 ${
                  isDarkMode ? "text-secondaryDark" : "text-colorLight"
                }`}
              >
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
