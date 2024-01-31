import React from "react";
import Project from "@/components/Project";

const ProjectsContainer = ({ activeFilter }) => {
  const projects = [
    {
      title: "Web3 Platform",
      content:
        "Decentralized platform that uses blockchain technology to allow users to run crowdfunding campaigns without the need for traditional financial intermediaries.",
      imageSrc: "/images/localEyes.png",
    },
    {
      title: "Web3 Platform",
      content:
        "Decentralized platform that uses blockchain technology to allow users to run crowdfunding campaigns without the need for traditional financial intermediaries.",
      imageSrc: "/images/localEyes.png",
    },
    {
      title: "Web3 Platform",
      content:
        "Decentralized platform that uses blockchain technology to allow users to run crowdfunding campaigns without the need for traditional financial intermediaries.",
      imageSrc: "/images/localEyes.png",
    },
    {
      title: "Web3 Platform",
      content:
        "Decentralized platform that uses blockchain technology to allow users to run crowdfunding campaigns without the need for traditional financial intermediaries.",
      imageSrc: "/images/localEyes.png",
    },
  ];

  return (
    <div className="mt-5">
      <Project
        // key={index}
        // type={"ux/ui"}
        title={"Local Eyes"}
        content={
          "Redesign of the user interface of LocalEyez, a platform dedicated to suggesting local events and experiences personalized according to user interests."
        }
        imageSrc="/images/localEyes.png"
      />
      <Project
        // key={index}
        // type={"web"}
        title={"Web3 Plataform"}
        content={
          "Decentralized platform that uses blockchain technology to allow users to run crowdfunding campaigns without the need for traditional financial intermediaries."
        }
        imageSrc=""
      />
      <Project
        title={"Quick Bus"}
        content={
          "Decentralized platform that uses blockchain technology to allow users to run crowdfunding campaigns without the need for traditional financial intermediaries."
        }
        imageSrc="/images/localEyes.png"
      />
      <Project
        title={"Web3 Plataform"}
        content={
          "Decentralized platform that uses blockchain technology to allow users to run crowdfunding campaigns without the need for traditional financial intermediaries."
        }
        imageSrc="/images/localEyes.png"
      />
    </div>
  );
};

export default ProjectsContainer;
