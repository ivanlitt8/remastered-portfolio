import { useTheme } from "@/context/ThemeContext";
import useWindowWidth from "@/customHooks/useWindowWidth";
import Icon from "./Icon"; // Asegúrate de importar correctamente el componente Icon

const iconData = [
  { name: "figma", color: "#C1CCD6" },
  { name: "angular", color: "#C1CCD6" },
  { name: "react", color: "#C1CCD6" },
  { name: "javascript", color: "#C1CCD6" },
  { name: "tailwind", color: "#C1CCD6" },
  { name: "bootstrap", color: "#C1CCD6" },
  { name: "git", color: "#C1CCD6" },
  { name: "postman", color: "#C1CCD6" },
  { name: "springboot", color: "#C1CCD6" },
  { name: "mysql", color: "#C1CCD6" },
  { name: "java", color: "#C1CCD6" },
  { name: "api", color: "#C1CCD6" },
];

const IconList = () => {
  const windowWidth = useWindowWidth();

  const { isDarkMode } = useTheme();

  return (
    <div className="flex mt-5 flex-wrap justify-center">
      {iconData.map((icon, index) => (
        <div key={index} className="text-center m-3 flex flex-col items-center">
          <Icon
            iconName={icon.name}
            color={isDarkMode ? icon.color : "#545454"}
            size={windowWidth < 640 ? 60 : 150}
          />
          <div
            className={`mt-2 font-medium capitalize text-sm sm:text-xl ${
              isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
            } `}
          >
            {icon.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconList;
