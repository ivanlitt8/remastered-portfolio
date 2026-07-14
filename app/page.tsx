"use client";

import { useEffect, useRef } from "react";
import NavBar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";
import SkillsMatrix from "@/components/SkillsMatrix";
import FilterContainer from "@/components/FilterContainer";
import EducationGrid from "@/components/EducationGrid";
import ContactSection from "@/components/ContactSection";
import CustomTitle from "@/components/CustomTitle";
import ExperienceContainer from "@/components/ExperienceContainer";
import Hero from "@/components/Hero";
import { useTranslation } from "next-i18next";

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    document.title = "Ivan Litt Portfolio";
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <NavBar
        aboutRef={aboutRef}
        contactRef={contactRef}
        projectsRef={projectsRef}
        servicesRef={servicesRef}
      />
      <Hero aboutRef={aboutRef} />
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
      <SkillsMatrix />
      <CustomTitle title={t("titles.education")} />
      <EducationGrid />
      <div ref={contactRef} className="sm:pt-10 pt-16">
        <ContactSection />
      </div>
    </>
  );
}
