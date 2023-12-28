import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardContainer = () => {
  return (
    <div className="flex mt-5 mx-20 flex-wrap justify-center">
      <Card number={"1."} title="Desing" name={"letter"} />
      {/* <Card number={"2."} title="Frontend" name={"carbon"} />
        <Card number={"3."} title="Backend" name={"chip"} />
        <Card number={"4."} title="Deploy" name={"deploy"} />
        <Card number={"5."} title="Data Base" name={"database"} />
        <Card number={"6."} title="Maintenance" name={"wrench"} /> */}
    </div>
  );
};

export default CardContainer;
