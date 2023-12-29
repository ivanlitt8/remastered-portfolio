import React from "react";

const Project = () => {
  return (
    <div className="flex flex-row mx-20 relative">
      <div className="top-0 left-0 right-0 border-t border-black">
        <div className="flex flex-row my-5 border-solid border-2 border-blue-950">
          <h2 className="text-3xl w-1/5 border-solid border-2 border-red-700">
            Web3 Plataform
          </h2>
          <p className="text-xl w-1/4 mx-10 border-solid border-2 border-red-700">
            Decentralized platform that uses blockchain technology to allow
            users to run crowdfunding campaigns without the need for traditional
            financial intermediaries.
          </p>
          <div className="bg-slate-800 w-2/5 ml-auto h-52 border-solid border-2 border-red-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
