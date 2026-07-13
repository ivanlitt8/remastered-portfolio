import React from "react";
import { motion } from "motion/react";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";

const AnimatedText = ({ text, place, dates, isVisible }) => {
  const { isDarkMode } = useTheme();

  return (
    isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row mx-10 md:mx-52 space-x-2 my-5"
      >
        <Icon
          iconName={"star"}
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={20}
        />
        <div
          className={`${
            isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
          } text-xs sm:text-base`}
        >
          <h2 className="font-extrabold text-base sm:text-xl">{text}</h2>
          <h2>{place}</h2>
          <h2>{dates}</h2>
        </div>
      </motion.div>
    )
  );
};

export default AnimatedText;
