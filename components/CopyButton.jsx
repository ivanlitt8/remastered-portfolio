import React from "react";
import Icon from "./Icon";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "motion/react";

const CopyButton = ({ label, icon, uppercase }) => {
  const { isDarkMode } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    const mail = "ivanlitt8@gmail.com";

    navigator.clipboard.writeText(mail).then(() => {
      console.log(`Texto copiado al portapapeles: ${mail}`);
    });
  };

  return (
    <button
      onClick={handleButtonClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` ${
        isDarkMode
          ? "bg-primaryDark text-secondaryDark border-secondaryDark hover:bg-secondaryDark hover:text-primaryDark"
          : "bg-primaryDark  text-activeLight border-primaryDark hover:bg-hoverOptional hover:text-secondaryLight"
      } border-2 font-medium py-2 rounded-3xl `}
    >
      <span
        className={`flex flex-col items-center text-base h-7 w-16 ${
          uppercase ? "uppercase" : "normal-case"
        }`}
      >
        <div>
          <Icon
            iconName={icon}
            color={isDarkMode ? "#C1CCD6" : "#FFFFFF"}
            hoverColor={isDarkMode ? "#272329" : "#252525"}
            size={20}
            isHovered={isHovered}
          />
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
};
export default CopyButton;
