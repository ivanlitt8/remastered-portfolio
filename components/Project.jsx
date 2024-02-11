import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const Project = ({ title, content, imageSrc }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="sm:mx-20 mx-5">
      <div
        className={`border-t-2 ${
          isDarkMode ? "border-secondaryDark" : "border-secondaryLight"
        }`}
      >
        <div className="flex my-5">
          <div className="flex flex-col lg:flex-row w-2/3">
            <h2
              className={`sm:text-3xl text-xl sm:w-1/3 w-auto ${
                isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
              }`}
            >
              {title}
            </h2>
            <p
              className={`md:text-xl sm:text-sm text-xs lg:mx-10 md:mx-0 my-0 md:my-5 sm:w-4/5 w-auto ${
                isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
              }`}
            >
              {content}
            </p>
          </div>
          <div className="bg-slate-800 relative md:w-2/5 w-2/3 md:ml-auto h-52">
            <Image src={imageSrc} layout="fill" objectFit="contain" alt="alt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
