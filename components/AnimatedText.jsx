import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";

const AnimatedText = ({ text, place, dates, isVisible }) => {
  const { isDarkMode } = useTheme();

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    isVisible && (
      <animated.div
        style={props}
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
      </animated.div>
    )
  );
};

export default AnimatedText;
