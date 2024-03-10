import React, { useState } from "react";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";
import AnimatedText from "./AnimatedText";
import AnimatedBorder from "./AnimatedBorder";
import EducationTitle from "./EducationTitle";
import useWindowWidth from "@/customHooks/useWindowWidth";
import { useTranslation } from "next-i18next";

const EducationGrid = () => {
  const { isDarkMode } = useTheme();
  const windowWidth = useWindowWidth();
  const { t } = useTranslation();

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
      <div className="flex-grow flex justify-between mx-12 sm:mx-24 mt-5">
        <EducationTitle title={t("education-cards.titles.academic")} />
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
        text={t("education-cards.academic.card1.title")}
        place={t("education-cards.academic.card1.place")}
        dates={t("education-cards.academic.card1.date")}
        isVisible={sectionVisibility["academicStudies"]}
      />
      <AnimatedBorder isVisible={sectionVisibility["academicStudies"]} />
      <AnimatedText
        text={t("education-cards.academic.card2.title")}
        place={t("education-cards.academic.card2.place")}
        dates={t("education-cards.academic.card2.date")}
        isVisible={sectionVisibility["academicStudies"]}
      />

      <div
        className={`border-b border-2 mx-12 sm:mx-20 ${
          isDarkMode ? "border-secondaryDark" : "border-secondaryLight"
        }`}
      ></div>
      <div className="flex-grow flex justify-between mx-12 sm:mx-24 mt-5">
        <EducationTitle title={t("education-cards.titles.courses")} />
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
        text={t("education-cards.courses.card1.title")}
        place={t("education-cards.courses.card1.place")}
        dates={t("education-cards.courses.card1.date")}
        isVisible={sectionVisibility["courses"]}
      />
      <AnimatedBorder isVisible={sectionVisibility["courses"]} />
      <AnimatedText
        text={t("education-cards.courses.card2.title")}
        place={t("education-cards.courses.card2.place")}
        dates={t("education-cards.courses.card2.date")}
        isVisible={sectionVisibility["courses"]}
      />
      <AnimatedBorder isVisible={sectionVisibility["courses"]} />
      <AnimatedText
        text={t("education-cards.courses.card3.title")}
        place={t("education-cards.courses.card3.place")}
        dates={t("education-cards.courses.card3.date")}
        isVisible={sectionVisibility["courses"]}
      />
      <AnimatedBorder isVisible={sectionVisibility["courses"]} />
      <AnimatedText
        text={t("education-cards.courses.card4.title")}
        place={t("education-cards.courses.card4.place")}
        dates={t("education-cards.courses.card4.date")}
        isVisible={sectionVisibility["courses"]}
      />
      <div
        className={`border-b border-2 mx-12 sm:mx-20 ${
          isDarkMode ? "border-secondaryDark" : "border-secondaryLight"
        }`}
      ></div>
      <div className="flex-grow flex justify-between mx-12 sm:mx-24 mt-5">
        <EducationTitle title={t("education-cards.titles.languages")} />
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
        text={t("education-cards.languages.lang1")}
        isVisible={sectionVisibility["languages"]}
      />
      <AnimatedBorder isVisible={sectionVisibility["languages"]} />
      <AnimatedText
        text={t("education-cards.languages.lang2")}
        isVisible={sectionVisibility["languages"]}
      />
    </div>
  );
};

export default EducationGrid;
