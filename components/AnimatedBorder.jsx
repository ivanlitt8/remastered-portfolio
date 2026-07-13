import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "motion/react";

const AnimatedBorder = ({ isVisible }) => {
  const { isDarkMode } = useTheme();

  return (
    isVisible && (
      <div className="mx-20 sm:mx-52">
        <motion.div
          initial={{ opacity: 0, marginLeft: "50%", width: "0%" }}
          animate={{ opacity: 1, marginLeft: "0%", width: "100%" }}
          transition={{ duration: 1 }}
          style={{
            borderBottom: isDarkMode
              ? "2px solid #C1CCD6"
              : "2px solid #545454",
          }}
        />
      </div>
    )
  );
};

export default AnimatedBorder;
