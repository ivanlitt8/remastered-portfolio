"use client";

import NavBar from "@/components/Navbar";
import Card from "@/components/Card";
import GenericButton from "@/components/GenericButton";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();

  const handleClick = () => {
    console.log("Botón clickeado desde App");
    // Agrega aquí la lógica específica que deseas ejecutar
  };

  return (
    <body className={`${isDarkMode ? "bg-primaryDark" : "bg-primaryLight"}`}>
      <NavBar />
      <GenericButton onClick={handleClick} label="Botón en App" />
      <h2
        className={`text-8xl font-bold ml-20 ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        Services
      </h2>
      <div className="flex mt-5 mx-20 flex-wrap justify-center">
        <Card number={"1."} title="Desing" name={"letter"} />
        <Card number={"2."} title="Frontend" name={"carbon"} />
        <Card number={"3."} title="Backend" name={"chip"} />
        <Card number={"4."} title="Deploy" name={"deploy"} />
        <Card number={"5."} title="Data Base" name={"database"} />
        <Card number={"6."} title="Maintenance" name={"wrench"} />
      </div>
      <h2
        className={`text-8xl font-bold ml-20 ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        Selected Projects
      </h2>
    </body>
  );
}
