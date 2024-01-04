import React from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedBorder = ({ isDarkMode, isVisible }) => {
  const animatedStyles = useSpring({
    opacity: isVisible ? 1 : 0,
    borderBottom: isDarkMode ? "2px solid #C1CCD6" : "2px solid #545454",
    config: { duration: 1000 },
    marginLeft: isVisible ? "0%" : "50%",
    width: isVisible ? "100%" : "0%",
  });

  return (
    isVisible && (
      <div className="mx-52">
        <animated.div style={animatedStyles}></animated.div>
      </div>
    )
  );
};

export default AnimatedBorder;
