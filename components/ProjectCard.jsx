"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useTheme } from "@/context/ThemeContext";
import { layoutStyles } from "@/components/projectLayouts";

const layoutTransition = {
  type: "spring",
  stiffness: 280,
  damping: 28,
  mass: 0.9,
};

/**
 * Tarjeta base única. La estructura visual llega por `layout`
 * (variante cíclica desde ProjectsContainer).
 */
const ProjectCard = ({ project, layout = layoutStyles[0] }) => {
  const { title, content, imageSrc, link, date } = project;
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();

  const shell = isDarkMode
    ? "border-secondaryDark/15 bg-primaryDark"
    : "border-secondaryLight/10 bg-primaryLight";
  const titleColor = isDarkMode ? "text-secondaryDark" : "text-secondaryLight";
  const mutedDate = isDarkMode ? "text-secondaryDark/50" : "text-neutral-500";
  const bodyColor = isDarkMode
    ? "text-secondaryDark/75"
    : "text-secondaryLight/75";
  const ctaColor = isDarkMode
    ? "text-secondaryDark"
    : "text-secondaryLight/45 group-hover:text-secondaryLight";
  const iconBtn = isDarkMode
    ? "border-secondaryDark/20 text-secondaryDark opacity-70 group-hover:opacity-100 group-hover:border-secondaryDark/50 group-hover:bg-secondaryDark/10"
    : "border-secondaryLight/15 text-secondaryLight opacity-60 group-hover:opacity-100 group-hover:border-secondaryLight/40 group-hover:bg-[#E8DFD2]/60";
  const mediaBg = isDarkMode ? "bg-[#272329]" : "bg-[#E8DFD2]";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={layoutTransition}
      className={`group relative z-10 overflow-hidden rounded-3xl border p-6 md:p-8 ${layout.colSpan} ${layout.article} ${shell}`}
    >
      <div className={`flex min-w-0 flex-col ${layout.content}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2
              className={`font-Mersad font-bold tracking-tighter ${layout.titleSize} ${titleColor}`}
            >
              {title}
            </h2>
            {date && (
              <p
                className={`mt-1 font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px] ${mutedDate}`}
              >
                {date}
              </p>
            )}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("projectsUi.viewMore")}: ${title}`}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${iconBtn} translate-y-1 group-hover:translate-y-0`}
          >
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        </div>

        <p
          className={`mt-3 text-sm leading-relaxed ${layout.lineClamp} ${bodyColor}`}
        >
          {content}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center gap-1.5 pt-4 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${ctaColor}`}
        >
          <span>{t("projectsUi.viewMore")}</span>
          <ArrowUpRight
            size={13}
            strokeWidth={1.75}
            className="opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden
          />
        </a>
      </div>

      <div
        className={`relative shrink-0 overflow-hidden rounded-2xl ${mediaBg} ${layout.media}`}
      >
        <Image
          src={imageSrc}
          fill
          sizes={layout.imageSizes}
          className={`p-3 sm:p-4 ${layout.imageClass} ${layout.imageRotate} transition-transform duration-500 ease-out group-hover:scale-105`}
          alt={title || "Project image"}
        />
      </div>
    </motion.article>
  );
};

export default ProjectCard;
