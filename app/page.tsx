"use client";

import { useRef } from "react";
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
import CustomTitle from "@/components/CustomTitle";
import CustomParagraph from "@/components/CustomParagraph";

export default function Home() {
  const { isDarkMode } = useTheme();

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);

  const handleClick = () => {
    console.log("Botón clickeado desde App");
  };

  return (
    <body className={`${isDarkMode ? "bg-primaryDark" : "bg-primaryLight"} `}>
      <NavBar
        aboutRef={aboutRef}
        contactRef={contactRef}
        projectsRef={projectsRef}
        servicesRef={servicesRef}
      />
      <div ref={aboutRef} className="sm:pt-10 pt-16">
        <CustomTitle title="FullStack UxUi Developer" />
      </div>
      <br />
      <br />
      <CustomParagraph
        text="Welcome to my digital world! I am Ivan, a hybrid web developer with
          experience in several key areas. I am currently studying ICT Analyst,
          which has given me a solid background in information technology."
      />
      <br />
      <CustomParagraph
        text="Every project is an opportunity to merge my technical skills with my
        boundless creativity, as well as to rigorously apply logic and problem
        solving. In my portfolio, you can explore examples of projects that
        reflect this unique combination of skills. I invite you to explore my
        portfolio and download my CV to learn more about my experience and
        past projects - I hope you enjoy exploring my work!"
      />
      <div className="my-10 flex justify-center">
        <CvButton
          onClick={handleClick}
          label="download cv"
          icon="download"
          uppercase={true}
        />
      </div>
      <div ref={servicesRef} className="sm:pt-10 pt-16 ">
        <CustomTitle title="Services" />
      </div>
      <CardContainer />
      <div ref={projectsRef} className="sm:pt-10 pt-16 ">
        <CustomTitle title="Selected Projects" />
      </div>
      <FilterContainer />
      <ProjectsContainer />
      <CustomTitle title="Technical Skills" />
      <div className="flex mt-5 mx-2 sm:mx-20 flex-wrap justify-center">
        <IconList />
      </div>
      <CustomTitle title="Education" />
      <EducationGrid />
      <div ref={contactRef}>
        <CustomTitle title="Contact" />
      </div>
      <CustomParagraph
        text="Do you have a question or an idea in mind? I am here to help you! Feel
        free to contact me via email. I look forward to hearing your thoughts
        and collaborating on your next project."
      />
      <div className="my-10 mx-5 flex justify-center space-x-4">
        <MailButton label="Drop me an email" icon="send" uppercase={false} />
        <CopyButton label="copy" icon="copy" uppercase={false} />
      </div>
    </body>
  );
}
