import React from "react";
import Project from "@/components/Project";

const ProjectsContainer = ({ activeFilter }) => {
  const allProjects = [
    {
      type: "web",
      title: "Web3 Platform",
      content:
        "Decentralized platform that uses blockchain technology to allow users to run crowdfunding campaigns without the need for traditional financial intermediaries.",
      imageSrc: "/images/DeFi.png",
      link: "https://vault-crowd.netlify.app/",
    },
    {
      type: "ux/ui",
      title: "Local Eyez",
      content:
        "Redesign of the user interface of LocalEyez, a platform dedicated to suggesting local events and experiences personalized according to user interests.",
      imageSrc: "/images/localEyez.png",
      link: "https://drive.google.com/file/d/1F6s10Wael4Y73wZ-nkhDTtJhBlQvswGT/view",
    },
    {
      type: "ux/ui",
      title: "Quick Bus",
      content:
        "Development of a bus travel application that facilitates trip planning, focused on creating an intuitive and friendly user experience.",
      imageSrc: "/images/quickBus.png",
      link: "",
    },
    {
      type: "web",
      title: "PillCare",
      content:
        "This medication reminder app is Developed as a team using Scrum as a methodology. I carried out my role as a frontend, working closely collaboration with the team to present a product that met the stated requirements.",
      imageSrc: "/images/pillCare.png",
      link: "https://c12-08-m-php-react-a5v3tztu2-c12-08-mphp-react.vercel.app/?vercelToolbarCode=Gmnd25EpXaFgo6o",
    },
    {
      type: "ux/ui",
      title: "My Daily Nosh",
      content:
        "User experience for My Daily Nosh, a meal planning app with features including collaborative shopping lists, smart ingredient scanning, and personalized recipe recommendations. Simplifies food preparation and makes it easy to connect with other food lovers.",
      imageSrc: "/images/dailyNosh.png",
      link: "",
    },
    {
      type: "web",
      title: "Portfolio CRUD",
      content:
        "The site has login, authentication, user, and has a database that through an API allows you to perform CRUD functions for all sections.",
      imageSrc: "/images/portfolio.png",
      link: "https://ivan-litt-portfolio.netlify.app/",
    },
    {
      type: "web",
      title: "Dash Board",
      content:
        "A visual tool that enables users to monitor and analyze real-time data related to cryptocurrencies, using an API.",
      imageSrc: "/images/dashBoard.png",
      link: "https://cryptoboard-ivan.netlify.app/",
    },
    {
      type: "ux/ui",
      title: "Third-Eye",
      content:
        "This is a presentation to clients of ThirdEye, an attractive and modern web platform to promote 360° property tour services for the real estate sector. In this context, the foundations are established that will serve as a foundation for the continuous evolution of the product.",
      imageSrc: "/images/thirdEye.png",
      link: "https://drive.google.com/file/d/13Q9hgCE1JHjojmDKp2VK_Vdhv604uYql/view",
    },
    {
      type: "web",
      title: "Landing Page",
      content:
        "This is a striking and modern page, aimed at the fintech industry. The goal of this page is to attract the user's attention and motivate them to act with calls to action. Developed with React and Tailwind.",
      imageSrc: "/images/landingPage.png",
      link: "https://landingpage-ivan.netlify.app/",
    },
  ];

  const filteredProjects =
    activeFilter && activeFilter !== "all"
      ? allProjects.filter((project) => project.type === activeFilter)
      : allProjects;

  return (
    <div className="mt-5">
      {filteredProjects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          content={project.content}
          imageSrc={project.imageSrc}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
