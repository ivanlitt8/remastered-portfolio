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
