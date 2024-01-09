import React from "react";
import Project from "@/components/Project";

const ProjectsContainer = () => {
  return (
    <div className="mt-5">
      <Project
        title={"Web3 Plataform"}
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
        imageSrc="/images/dailyNosh.png"
      />
      <Project
        title={"Web3 Plataform"}
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
