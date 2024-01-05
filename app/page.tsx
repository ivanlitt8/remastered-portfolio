"use client";

import NavBar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";
import CvButton from "@/components/CvButton";
import { useTheme } from "@/context/ThemeContext";
import IconList from "@/components/IconList";
import MailButton from "@/components/MailButton";
import FilterContainer from "@/components/FilterContainer";
import ProjectsContainer from "@/components/ProjectsContainer";
import EducationGrid from "@/components/EducationGrid";
import CopyButton from "@/components/CopyButton";

export default function Home() {
  const { isDarkMode } = useTheme();

  const handleClick = () => {
    console.log("Botón clickeado desde App");
  };

  return (
    <body className={`${isDarkMode ? "bg-primaryDark" : "bg-primaryLight"}`}>
      <NavBar />
      <h1
        className={`text-8xl font-Mersad font-bold ml-20 mt-10 ${
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
        className={`text-8xl font-bold ml-20 mt-24 ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        Services
      </h2>
      <CardContainer />
      <h2
        className={`text-8xl font-bold ml-20 mt-24 ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        Selected Projects
      </h2>
      <FilterContainer />
      <ProjectsContainer />
      <h2
        className={`text-8xl font-bold ml-20 mt-24 ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        Technical Skills
      </h2>
      <div className="flex mt-5 mx-20 flex-wrap justify-center">
        <IconList isDarkMode={isDarkMode} />
      </div>
      <h2
        className={`text-8xl font-bold ml-20 mt-24 ${
          isDarkMode ? "text-secondaryDark" : "text-secondaryLight"
        }`}
      >
        Education
      </h2>
      <EducationGrid />
      <h2
        className={`text-8xl font-bold ml-20 mt-24 ${
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
