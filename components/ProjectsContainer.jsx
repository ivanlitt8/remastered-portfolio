import React from "react";
import Project from "@/components/Project";
import { useTranslation } from "next-i18next";

const ProjectsContainer = ({ activeFilter }) => {
  const { t } = useTranslation();
  const cardsData = t("projects-cards", { returnObjects: true });
  const allProjects = Object.values(cardsData);

  const filteredProjects =
    activeFilter && activeFilter !== "all"
      ? allProjects.filter((project) => project.type === activeFilter)
      : allProjects;

  return (
    <div className="mt-5">
      {filteredProjects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          content={project.content}
          imageSrc={project.imageSrc}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
