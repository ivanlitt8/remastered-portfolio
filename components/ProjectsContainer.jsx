import React from "react";
import Project from "@/components/Project";

const ProjectsContainer = ({ activeFilter }) => {
  const allProjects = [
    {
      type: "web",
      title: "Web3 Platform",
      content:
        "Decentralized platform that uses blockchain technology to allow users to run crowdfunding campaigns without the need for traditional financial intermediaries.",
      imageSrc: "/images/localEyes.png",
    },
    {
      type: "ux/ui",
      title: "Local Eyez",
      content:
        "Redesign of the user interface of LocalEyez, a platform dedicated to suggesting local events and experiences personalized according to user interests.",
      imageSrc: "/images/localEyes.png",
    },
    {
      type: "ux/ui",
      title: "Quick Bus",
      content:
        "Development of a bus travel application that facilitates trip planning, focused on creating an intuitive and friendly user experience.",
      imageSrc: "/images/localEyes.png",
    },
    {
      type: "web",
      title: "PillCare",
      content:
        "This medication reminder app is Developed as a team using Scrum as a methodology. I carried out my role as a frontend, working closely collaboration with the team to present a product that met the stated requirements.",
      imageSrc: "/images/localEyes.png",
    },
    {
      type: "ux/ui",
      title: "My Daily Nosh",
      content:
        "User experience for My Daily Nosh, a meal planning app with features including collaborative shopping lists, smart ingredient scanning, and personalized recipe recommendations. Simplifies food preparation and makes it easy to connect with other food lovers.",
      imageSrc: "/images/localEyes.png",
    },
    {
      type: "web",
      title: "Portfolio CRUD",
      content:
        "The site has login, authentication, user, and has a database that through an API allows you to perform CRUD functions for all sections.",
      imageSrc: "/images/localEyes.png",
    },
    {
      type: "web",
      title: "Dashboard",
      content:
        "A visual tool that enables users to monitor and analyze real-time data related to cryptocurrencies, using an API.",
      imageSrc: "/images/localEyes.png",
    },
    {
      type: "ux/ui",
      title: "Third-Eye",
      content:
        "This is a presentation to clients of ThirdEye, an attractive and modern web platform to promote 360° property tour services for the real estate sector. In this context, the foundations are established that will serve as a foundation for the continuous evolution of the product.",
      imageSrc: "/images/localEyes.png",
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
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
