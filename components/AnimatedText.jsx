import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Icon from "./Icon";

const AnimatedText = ({ text, place, dates, isVisible }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <animated.div style={props} className="flex flex-row mx-52 space-x-2 my-5">
      <Icon iconName={"asterisk"} color={"#545454"} size={20} />
      <div>
        <h2>{text}</h2>
        <h2>{place}</h2>
        <h2>{dates}</h2>
      </div>
    </animated.div>
  );
};

export default AnimatedText;
