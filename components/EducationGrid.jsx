import React, { useState } from "react";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";
import AnimatedText from "./AnimatedText";
import AnimatedBorder from "./AnimatedBorder";

const EducationGrid = () => {
  const { isDarkMode } = useTheme();

  const [sectionVisibility, setSectionVisibility] = useState({
    academicStudies: false,
    courses: false,
    languages: false,
  });

  const handleToggleContent = (section) => {
    setSectionVisibility((prevVisibility) => {
      return { ...prevVisibility, [section]: !prevVisibility[section] };
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow flex justify-between mx-24 mt-5">
        <h3
          className={`text-5xl mx-20 ${
            isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
          }`}
        >
          Academic Studies
        </h3>
        <div
          className="cursor-pointer"
          onClick={() => handleToggleContent("academicStudies")}
        >
          <Icon
            iconName={sectionVisibility["academicStudies"] ? "minus" : "plus"}
            color={isDarkMode ? "#C1CCD6" : "#545454"}
            size={50}
          />
        </div>
      </div>
      <AnimatedText
        text={"ITC Analyst"}
        place={"Universidad Nacional de La Plata"}
        dates={"2021 - present"}
        isVisible={sectionVisibility["academicStudies"]}
      />
      <AnimatedBorder
        isVisible={sectionVisibility["academicStudies"]}
        isDarkMode={isDarkMode}
      />
      <AnimatedText
        text={"Degree in computer science"}
        place={"Universidad Nacional de La Plata"}
        dates={"2023 - present"}
        isVisible={sectionVisibility["academicStudies"]}
      />
      <div
        className={`border-b border-2 mx-20 ${
          isDarkMode ? "border-secondaryDark" : "border-secondaryLight"
        }`}
      ></div>
      <div className="flex-grow flex justify-between mx-24 mt-5">
        <h3
          className={`text-5xl mx-20 ${
            isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
          }`}
        >
          Courses
        </h3>
        <div
          className="cursor-pointer"
          onClick={() => handleToggleContent("courses")}
        >
          <Icon
            iconName={sectionVisibility["courses"] ? "minus" : "plus"}
            color={isDarkMode ? "#C1CCD6" : "#545454"}
            size={50}
          />
        </div>
      </div>
      <AnimatedText
        text={"ITC Analyst"}
        place={"Universidad Nacional de La Plata"}
        dates={"2021 - present"}
        isVisible={sectionVisibility["courses"]}
      />
      <AnimatedBorder
        isVisible={sectionVisibility["courses"]}
        isDarkMode={isDarkMode}
      />
      <AnimatedText
        text={"Degree in computer science"}
        place={"Universidad Nacional de La Plata"}
        dates={"2023 - present"}
        isVisible={sectionVisibility["courses"]}
      />
      <div
        className={`border-b border-2 mx-20 ${
          isDarkMode ? "border-secondaryDark" : "border-secondaryLight"
        }`}
      ></div>
      <div className="flex-grow flex justify-between mx-24 mt-5">
        <h3
          className={`text-5xl mx-20 ${
            isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
          }`}
        >
          Languages
        </h3>
        <div
          className="cursor-pointer"
          onClick={() => handleToggleContent("languages")}
        >
          <Icon
            iconName={sectionVisibility["languages"] ? "minus" : "plus"}
            color={isDarkMode ? "#C1CCD6" : "#545454"}
            size={50}
          />
        </div>
      </div>
      <AnimatedText
        text={"Native: Spanish"}
        isVisible={sectionVisibility["languages"]}
      />
      <AnimatedBorder
        isVisible={sectionVisibility["languages"]}
        isDarkMode={isDarkMode}
      />
      <AnimatedText
        text={"Others: English C1"}
        isVisible={sectionVisibility["languages"]}
      />
    </div>
  );
};

export default EducationGrid;
