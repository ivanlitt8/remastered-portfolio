import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const Project = ({ title, content, imageSrc }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-row mx-20 relative">
      <div
        className={`border-t-2 ${
          isDarkMode ? "border-secondaryDark" : "border-secondaryLight"
        }`}
      >
        <div className="flex flex-row my-5">
          <h2
            className={`text-3xl w-1/5 ${
              isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-xl w-1/4 mx-10 ${
              isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
            }`}
          >
            {content}
          </p>
          <div className="bg-slate-800 relative w-full md:w-2/5 h-52 md:ml-auto">
            <Image
              src={imageSrc}
              layout="fill"
              objectFit="contain"
              // width={300}
              // height={300}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
