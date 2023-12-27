// import React from "react";
// import Icon from "./Icon";
// import { useState } from "react";
// import { useTheme } from "@/context/ThemeContext";
// import styled from "styled-components";

// const Card = ({ number, title, name }) => {
//   const { isDarkMode } = useTheme();

//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <StyledCard
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`max-w-xs mx-auto border-solid border-2 ${
//         isDarkMode
//           ? "bg-primaryDark border-secondaryDark"
//           : "bg-primaryLight border-colorLight"
//       } overflow-hidden p-2 w-44 h-60 mb-5`}
//     >
//       <div
//         className={`text-xl font-bold mb-2 ${
//           isDarkMode ? "text-secondaryDark" : "text-colorLight"
//         }`}
//       >
//         {number}
//       </div>
//       <div className="flex items-center justify-center mb-4">
//         <Icon
//           iconName={name}
//           color={isDarkMode ? "#C1CCD6" : "#252525"}
//           size={120}
//         />
//       </div>
//       <div className="text-center mt-8">
//         <h2
//           className={`text-lg font-bold ${
//             isDarkMode ? "text-secondaryDark" : "text-colorLight"
//           }`}
//         >
//           {title}
//         </h2>
//       </div>
//     </StyledCard>
//   );
// };

// const StyledCard = styled.div`
//   transition: transform 1s;
//   transform-style: preserve-3d;
//   &:hover {
//     transform: rotateY(180deg);
//   }
// `;

// export default Card;

import React from "react";
import Icon from "./Icon";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import styled from "styled-components";

const Card = ({ number, title, name }) => {
  const { isDarkMode } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`max-w-xs mx-auto border-solid border-2 ${
        isDarkMode
          ? "bg-primaryDark border-secondaryDark"
          : "bg-primaryLight border-colorLight"
      } overflow-hidden p-2 w-44 h-60 mb-5`}
    >
      <CardContainer className={isHovered ? "hovered" : ""}>
        <CardFront className="front">
          <div
            className={`text-xl font-bold mb-2 ${
              isDarkMode ? "text-secondaryDark" : "text-colorLight"
            }`}
          >
            {number}
          </div>
          <div className="flex items-center justify-center mb-4">
            <Icon
              iconName={name}
              color={isDarkMode ? "#C1CCD6" : "#252525"}
              size={120}
            />
          </div>
          <div className="text-center mt-8">
            <h2
              className={`text-lg font-bold ${
                isDarkMode ? "text-secondaryDark" : "text-colorLight"
              }`}
            >
              {title}
            </h2>
          </div>
        </CardFront>
        <CardBack className="back">
          {/* Texto que deseas mostrar en el reverso */}
          Your Text Here
        </CardBack>
      </CardContainer>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  perspective: 1000px;
  perspective-origin: center;
  transform-style: preserve-3d;
  transition: transform 1s;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  /* transform-style: preserve-3d;
  transition: transform 1s;
  &.hovered {
    transform: rotateY(180deg);
  } */
`;

const CardFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

export default Card;
