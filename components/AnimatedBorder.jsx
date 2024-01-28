import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useSpring, animated } from "@react-spring/web";

const AnimatedBorder = ({ isVisible }) => {
  const { isDarkMode } = useTheme();

  const animatedStyles = useSpring({
    opacity: isVisible ? 1 : 0,
    borderBottom: isDarkMode ? "2px solid #C1CCD6" : "2px solid #545454",
    config: { duration: 1000 },
    marginLeft: isVisible ? "0%" : "50%",
    width: isVisible ? "100%" : "0%",
  });

  return (
    isVisible && (
      <div className="mx-20 sm:mx-52">
        <animated.div style={animatedStyles}></animated.div>
      </div>
    )
  );
};

export default AnimatedBorder;
