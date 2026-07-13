import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const Project = ({ title, content, imageSrc, link, date }) => {
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
            <div className="sm:w-1/3 w-auto">
              <h2
                className={`sm:text-3xl text-xl ${
                  isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
                }`}
              >
                {title}
              </h2>
              {date && (
                <p
                  className={`mt-1 sm:text-sm text-xs tracking-wide ${
                    isDarkMode ? "text-colorDark" : "text-primaryDark"
                  }`}
                >
                  {date}
                </p>
              )}
            </div>
            <div className="lg:mx-10 md:mx-0 my-0 md:my-5 sm:w-4/5 w-auto">
              <p
                className={`md:text-xl sm:text-sm text-xs mb-5 ${
                  isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
                }`}
              >
                {content}
              </p>
              <a
                href={link}
                className={`underline ${
                  isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
                }`}
              >
                View more &gt;
              </a>
            </div>
          </div>
          <div className="relative md:w-2/5 w-2/3 md:ml-auto h-52">
            <Image
              src={imageSrc}
              fill
              className="object-contain"
              alt={title || "Project image"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
