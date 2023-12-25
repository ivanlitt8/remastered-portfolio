"use client";

import NavBar from "@/components/Navbar";
import Card from "@/components/Card";
import CvButton from "@/components/CvButton";
import { useTheme } from "@/context/ThemeContext";
import IconList from "@/components/IconList";
import MailButton from "@/components/MailButton";
import FilterContainer from "@/components/FilterContainer";

export default function Home() {
  const { isDarkMode } = useTheme();

  const handleClick = () => {
    console.log("Botón clickeado desde App");
    // Agrega aquí la lógica específica que deseas ejecutar
  };

  return (
    <body className={`${isDarkMode ? "bg-primaryDark" : "bg-primaryLight"}`}>
      <NavBar />

      <h1
        className={`text-8xl font-bold ml-20 ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        FullStack UxUi Developer
      </h1>
      <br />
      <br />
      <div
        className={`mx-20 text-xl font-medium ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        <p>
          Welcome to my digital world! I am Ivan, a hybrid web developer with
          experience in several key areas. I am currently studying ICT Analyst,
          which has given me a solid background in information technology.
        </p>
        <br />
        <br />
        <p>
          Every project is an opportunity to merge my technical skills with my
          boundless creativity, as well as to rigorously apply logic and problem
          solving. In my portfolio, you can explore examples of projects that
          reflect this unique combination of skills. I invite you to explore my
          portfolio and download my CV to learn more about my experience and
          past projects - I hope you enjoy exploring my work!
        </p>
      </div>
      <div className="my-10 flex justify-center">
        <CvButton
          onClick={handleClick}
          label="download cv"
          icon="download"
          uppercase={true}
        />
      </div>
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
      <FilterContainer />
      <h2
        className={`text-8xl font-bold ml-20 ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        Technical Skills
      </h2>
      <div className="flex mt-5 mx-20 flex-wrap justify-center">
        <IconList isDarkMode={isDarkMode} />

        {/* <Icon
          iconName="figma"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="angular"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="react"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="javascript"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="tailwind"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="bootstrap"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="git"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="postman"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="springboot"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="mysql"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="java"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        />
        <Icon
          iconName="api"
          color={isDarkMode ? "#C1CCD6" : "#545454"}
          size={100}
        /> */}
      </div>
      <h2
        className={`text-8xl font-bold ml-20 ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        Education
      </h2>
      <h2
        className={`text-8xl font-bold ml-20 ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        Contact
      </h2>
      <br />
      <br />
      <p
        className={`mx-20 text-xl font-medium ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        Do you have a question or an idea in mind? I am here to help you! Feel
        free to contact me via email. I look forward to hearing your thoughts
        and collaborating on your next project.
      </p>
      <br />
      <br />
      <div className="my-10 flex justify-center">
        <MailButton
          onClick={handleClick}
          label="Drop me an email"
          icon="send"
          uppercase={false}
        />
      </div>
    </body>
  );
}
