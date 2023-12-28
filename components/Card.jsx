// import React from "react";
// import Icon from "./Icon";
// import { useTheme } from "@/context/ThemeContext";
// import styled from "styled-components";

// const Card = ({ number, title, name }) => {
//   const { isDarkMode } = useTheme();
//   return (
//     <StyledCard>
//       <CardBack
//         className={`max-w-xs mx-auto border-solid border-2 ${
//           isDarkMode
//             ? "bg-primaryDark border-secondaryDark"
//             : "bg-primaryLight border-colorLight"
//         } overflow-hidden p-2 w-44 h-60`}
//       >
//         <div
//           className={`text-xl font-bold mb-2 ${
//             isDarkMode ? "text-secondaryDark" : "text-colorLight"
//           }`}
//         >
//           {number}
//         </div>
//         <div className="text-center">
//           <p
//             className={`text-sm font-bold ${
//               isDarkMode ? "text-secondaryDark" : "text-colorLight"
//             }`}
//           >
//             The frontend takes care of the presentation and direct interaction
//             with users, ensuring that the interface is intuitive, visually
//             attractive and functional.
//           </p>
//         </div>
//       </CardBack>
//       <CardFront
//         className={`max-w-xs mx-auto border-solid border-2 ${
//           isDarkMode
//             ? "bg-primaryDark border-secondaryDark"
//             : "bg-primaryLight border-colorLight"
//         } overflow-hidden p-2 w-44 h-60`}
//       >
//         <div
//           className={`text-xl font-bold mb-2 ${
//             isDarkMode ? "text-secondaryDark" : "text-colorLight"
//           }`}
//         >
//           {number}
//         </div>
//         <div className="flex items-center justify-center mb-4">
//           <Icon
//             iconName={name}
//             color={isDarkMode ? "#C1CCD6" : "#252525"}
//             size={120}
//           />
//         </div>
//         <div className="text-center mt-8">
//           <h2
//             className={`text-lg font-bold ${
//               isDarkMode ? "text-secondaryDark" : "text-colorLight"
//             }`}
//           >
//             {title}
//           </h2>
//         </div>
//       </CardFront>
//     </StyledCard>
//   );
// };

// const StyledCard = styled.div``;

// const CardFront = styled.div``;

// const CardBack = styled.div``;

// export default Card;

import React from "react";
import Icon from "./Icon";
import { useTheme } from "@/context/ThemeContext";
import styled from "styled-components";

const Card = ({ number, title, name }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="cursor-pointer group perspective">
      {/* FRONT */}
      <div
        className={`max-w-xs mx-auto border-solid border-2 ${
          isDarkMode
            ? "bg-primaryDark border-secondaryDark"
            : "bg-primaryLight border-colorLight"
        } overflow-hidden p-2 w-44 h-60 duration-1000 preserve-3d group-hover:my-rotate-y-180`}
      >
        <div className="backface-hidden">
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
        </div>
      </div>
      <div
        className={`max-w-xs mx-auto border-solid border-2 ${
          isDarkMode
            ? "bg-primaryDark border-secondaryDark"
            : "bg-primaryLight border-colorLight"
        } overflow-hidden p-2 w-44 h-60 duration-1000 preserve-3d group-hover:my-rotate-y-180`}
      >
        {/* BACK */}
        <div className="backface-hidden">
          <div
            className={`text-xl font-bold mb-2 ${
              isDarkMode ? "text-secondaryDark" : "text-colorLight"
            }`}
          >
            {number}
          </div>
          <div className="text-center">
            <p
              className={`text-sm font-bold ${
                isDarkMode ? "text-secondaryDark" : "text-colorLight"
              }`}
            >
              The frontend takes care of the presentation and direct interaction
              with users, ensuring that the interface is intuitive, visually
              attractive and functional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledCard = styled.div`
  position: relative;
  perspective: 1000px; /* Add perspective for 3D effect */
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide the back side when flipped */
  transform: rotateY(0deg); /* Initial rotation */
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide the front side when flipped */
  transform: rotateY(180deg); /* Initial rotation */
`;

export default Card;
