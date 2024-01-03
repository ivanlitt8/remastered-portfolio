import React from "react";
import { useTheme } from "@/context/ThemeContext";

const Project = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-row mx-20 relative">
      <div
        className={`mt-5 border-t-2 ${
          isDarkMode ? "border-secondaryDark" : "border-secondaryLight"
        }`}
      >
        <div className="flex flex-row my-5">
          <h2
            className={`text-3xl w-1/5 ${
              isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
            }`}
          >
            Web3 Plataform
          </h2>
          <p
            className={`text-xl w-1/4 mx-10 ${
              isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
            }`}
          >
            Decentralized platform that uses blockchain technology to allow
            users to run crowdfunding campaigns without the need for traditional
            financial intermediaries.
          </p>
          <div className="bg-slate-800 w-2/5 ml-auto h-52 "></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
