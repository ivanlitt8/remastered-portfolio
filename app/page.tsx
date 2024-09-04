"use client";

import { useRef } from "react";
import NavBar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";
import CvButton from "@/components/CvButton";
import { useTheme } from "@/context/ThemeContext";
import IconList from "@/components/IconList";
import MailButton from "@/components/MailButton";
import FilterContainer from "@/components/FilterContainer";
import EducationGrid from "@/components/EducationGrid";
import CopyButton from "@/components/CopyButton";
import CustomTitle from "@/components/CustomTitle";
import CustomParagraph from "@/components/CustomParagraph";
import ExperienceContainer from "@/components/ExperienceContainer";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { isDarkMode } = useTheme();

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);

  const handleClick = () => {
    console.log("Botón clickeado desde App");
  };

  const { t } = useTranslation();

  return (
    <body className={`${isDarkMode ? "bg-primaryDark" : "bg-primaryLight"} `}>
      <NavBar
        aboutRef={aboutRef}
        contactRef={contactRef}
        projectsRef={projectsRef}
        servicesRef={servicesRef}
      />
      <div ref={aboutRef} className="sm:pt-10 pt-16">
        <CustomTitle title={t("titles.landing")} />
      </div>
      <br />
      <br />
      <CustomParagraph text={t("paragraphs.first")} />
      <br />
      <CustomParagraph text={t("paragraphs.second")} />
      <div className="my-10 flex justify-center">
        <CvButton label={t("cv")} icon="download" uppercase={true} />
      </div>
      <div ref={servicesRef} className="sm:pt-10 pt-16 ">
        <CustomTitle title={t("titles.services")} />
      </div>
      <CardContainer />
      <div className="sm:pt-10 pt-16 ">
        <CustomTitle title={t("titles.experience")} />
      </div>
      <ExperienceContainer />
      <div ref={projectsRef} className="sm:pt-10 pt-16 ">
        <CustomTitle title={t("titles.projects")} />
      </div>
      <FilterContainer />
      <CustomTitle title={t("titles.skills")} />
      <div className="flex mt-5 mx-2 sm:mx-20 flex-wrap justify-center">
        <IconList />
      </div>
      <CustomTitle title={t("titles.education")} />
      <EducationGrid />
      <div ref={contactRef}>
        <CustomTitle title={t("titles.contact")} />
      </div>
      <CustomParagraph text={t("paragraphs.third")} />
      <div className="my-10 mx-5 flex justify-center space-x-4">
        <MailButton label={t("mail")} icon="send" uppercase={false} />
        <CopyButton label={t("copy")} icon="copy" uppercase={false} />
      </div>
    </body>
  );
}
