import React from "react";
import Card from "./Card";
import { useTranslation } from "next-i18next";

const CardContainer = () => {
  const { t } = useTranslation();

  const cardsData = t("flip-cards", { returnObjects: true });
  const cardsArray = Object.values(cardsData);

  return (
    <div className="flex flex-wrap sm:mx-20 mx-2 justify-center mt-5">
      {cardsArray.map((card, index) => (
        <Card
          key={index}
          number={card.number}
          title={card.title}
          name={card.name}
          content={card.text}
        />
      ))}
    </div>
  );
};

export default CardContainer;
// <div className="flex flex-wrap sm:mx-20 mx-2 justify-center mt-5">
//   <Card
//     number={"1."}
//     title="Design"
//     name={"letter"}
//     content={
//       "Design is the fusion of aesthetics and function to create visually striking and effective experiences."
//     }
//   />
//   <Card
//     number={"2."}
//     title="Frontend"
//     name={"carbon"}
//     content={
//       "Creation of attractive and functional visual interfaces. Specialized in translating creative designs into intuitive user experiences."
//     }
//   />
//   <Card
//     number={"3."}
//     title="Backend"
//     name={"chip"}
//     content={
//       "Building robust server logic, dedicated to data processing and communication between frontend and database."
//     }
//   />
//   <Card
//     number={"4."}
//     title="Deploy"
//     name={"deploy"}
//     content={
//       "Efficient deployment of solutions, ensuring rapid and effective implementation of services and applications."
//     }
//   />
//   <Card
//     number={"5."}
//     title="Data Base"
//     name={"database"}
//     content={
//       "Creation and management of databases for efficient storage and retrieval, ensuring a coherent and reliable flow of information."
//     }
//   />
//   <Card
//     number={"6."}
//     title="Maintenance"
//     name={"wrench"}
//     content={
//       "Updates, fixes and optimizations to ensure a smooth experience and optimal performance in web environments."
//     }
//   />
// </div>
