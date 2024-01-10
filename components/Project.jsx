import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const Project = ({ title, content, imageSrc }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="mx-20">
      <div
        className={`border-t-2 ${
          isDarkMode ? "border-secondaryDark" : "border-secondaryLight"
        }`}
      >
        <div className="flex my-5">
          <div className="flex flex-col lg:flex-row w-2/3 border-red-400 border-2">
            <h2
              className={`text-3xl border-2 border-white ${
                isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-xl md:mx-0 mx-20 my-0 md:my-5 border-2 border-white ${
                isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
              }`}
            >
              {content}
            </p>
          </div>
          <div className="bg-slate-800 relative w-full md:w-2/5 h-52 md:ml-auto border-white border-2">
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
