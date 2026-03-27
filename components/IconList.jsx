import { useTheme } from "@/context/ThemeContext";
import useWindowWidth from "@/customHooks/useWindowWidth";
import Icon from "./Icon"; // Asegúrate de importar correctamente el componente Icon

const iconData = [
  { key: "typescript", label: "TypeScript", color: "#C1CCD6" },
  { key: "nextjs", label: "Next.js", color: "#C1CCD6" },
  { key: "react", label: "React", color: "#C1CCD6" },
  { key: "javascript", label: "JavaScript", color: "#C1CCD6" },
  { key: "tailwind", label: "Tailwind CSS", color: "#C1CCD6" },
  { key: "nodejs", label: "Node.js", color: "#C1CCD6" },
  { key: "docker", label: "Docker", color: "#C1CCD6" },
  { key: "git", label: "Git", color: "#C1CCD6" },
  { key: "postman", label: "Postman", color: "#C1CCD6" },
  { key: "figma", label: "Figma", color: "#C1CCD6" },
  { key: "database", label: "PostgreSQL", color: "#C1CCD6" },
  { key: "api", label: "REST API", color: "#C1CCD6" },
];

const IconList = () => {
  const windowWidth = useWindowWidth();

  const { isDarkMode } = useTheme();

  return (
    <div className="flex mt-5 flex-wrap justify-center">
      {iconData.map((icon, index) => (
        <div key={index} className="text-center m-3 flex flex-col items-center">
          <Icon
            iconName={icon.key}
            color={isDarkMode ? icon.color : "#545454"}
            size={windowWidth < 640 ? 60 : 150}
          />
          <div
            className={`mt-2 font-medium text-sm sm:text-xl ${
              isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
            } `}
          >
            {icon.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconList;
