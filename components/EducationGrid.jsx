import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";
import AnimatedText from "./AnimatedText";
import AnimatedBorder from "./AnimatedBorder";
import EducationTitle from "./EducationTitle";

const EducationGrid = () => {
  const { isDarkMode } = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      {/* sm:bg-green-500 md:bg-yellow-500 lg:bg-orange-500 xl:bg-red-500 */}
      <div className="flex-grow flex justify-between mx-12 sm:mx-24 mt-5">
        <EducationTitle title="Academic Studies" />
        <div
          className="cursor-pointer"
          onClick={() => handleToggleContent("academicStudies")}
        >
          <Icon
            iconName={sectionVisibility["academicStudies"] ? "minus" : "plus"}
            color={isDarkMode ? "#C1CCD6" : "#545454"}
            size={windowWidth < 640 ? 35 : 50}
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
        className={`border-b border-2 mx-12 sm:mx-20 ${
          isDarkMode ? "border-secondaryDark" : "border-secondaryLight"
        }`}
      ></div>
      <div className="flex-grow flex justify-between mx-12 sm:mx-24 mt-5">
        <EducationTitle title="Courses" />
        <div
          className="cursor-pointer"
          onClick={() => handleToggleContent("courses")}
        >
          <Icon
            iconName={sectionVisibility["courses"] ? "minus" : "plus"}
            color={isDarkMode ? "#C1CCD6" : "#545454"}
            size={windowWidth < 640 ? 35 : 50}
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
        className={`border-b border-2 mx-12 sm:mx-20 ${
          isDarkMode ? "border-secondaryDark" : "border-secondaryLight"
        }`}
      ></div>
      <div className="flex-grow flex justify-between mx-12 sm:mx-24 mt-5">
        <EducationTitle title="Languages" />
        <div
          className="cursor-pointer"
          onClick={() => handleToggleContent("languages")}
        >
          <Icon
            iconName={sectionVisibility["languages"] ? "minus" : "plus"}
            color={isDarkMode ? "#C1CCD6" : "#545454"}
            size={windowWidth < 640 ? 35 : 50}
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
