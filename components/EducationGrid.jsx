import React from "react";
import Icon from "./Icon";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import AnimatedText from "./AnimatedText";

const EducationGrid = () => {
  const { isDarkMode } = useTheme();
  const [isContentVisible, setContentVisibility] = useState(false);

  const handleToggleContent = () => {
    console.log("Toggle content clicked");
    setContentVisibility(!isContentVisible);
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow flex justify-between mx-24">
        <h3 className="text-5xl mx-20">Academic Studies</h3>
        <div className="cursor-pointer" onClick={handleToggleContent}>
          <Icon
            iconName={isContentVisible ? "minus" : "plus"}
            color={isDarkMode ? "#C1CCD6" : "#545454"}
            size={50}
          />
        </div>
      </div>
      {isContentVisible && (
        <>
          <AnimatedText
            text={"ITC Analyst"}
            place={"Universidad Nacional de La Plata"}
            dates={"2021 - present"}
            isVisible={isContentVisible}
          />
          <div className="border-b border-black border-2 mx-52"></div>
          <AnimatedText
            text={"Degree in computer science"}
            place={"Universidad Nacional de La Plata"}
            dates={"2023 - present"}
            isVisible={isContentVisible}
          />
        </>
      )}

      <div className="border-b border-black mx-20"></div>
      {/* <div className="flex-grow flex justify-between mx-24">
        <h3 className="text-5xl mx-20">Courses</h3>
        <Icon
          iconName={"plus"}
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={50}
        />
      </div>
      <div className="border-b border-black mx-20"></div>
      <div className="flex-grow flex justify-between mx-24">
        <h3 className="text-5xl mx-20">Languages</h3>
        <Icon
          iconName={"plus"}
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={50}
        />
      </div>
      <div className="border-b border-black mx-20"></div> */}
    </div>
  );
};

export default EducationGrid;
