"use client";

import React, { useMemo } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import ProjectCard from "@/components/ProjectCard";
import { getLayoutForIndex } from "@/components/projectLayouts";
import { useTranslation } from "next-i18next";

const layoutTransition = {
  type: "spring",
  stiffness: 280,
  damping: 28,
  mass: 0.9,
};

const ProjectsContainer = ({ activeFilter }) => {
  const { t } = useTranslation();
  const cardsData = t("projects-cards", { returnObjects: true });

  const filteredProjects = useMemo(() => {
    const allProjects = Array.isArray(cardsData)
      ? cardsData
      : Object.values(cardsData ?? {});

    if (!activeFilter || activeFilter === "all") return allProjects;
    return allProjects.filter((project) => project.type === activeFilter);
  }, [activeFilter, cardsData]);

  return (
    <LayoutGroup>
      <motion.div
        layout
        transition={layoutTransition}
        className="grid grid-cols-1 gap-6 md:grid-cols-12"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const layout = getLayoutForIndex(index);
            const key = project.link || project.title || String(index);

            return (
              <ProjectCard key={key} project={project} layout={layout} />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
};

export default ProjectsContainer;
