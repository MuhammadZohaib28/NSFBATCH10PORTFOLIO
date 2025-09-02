import React from "react";
import "./technicalskils.css";
import Cards from "../resusablecards/Cards";

const TechnicalSkills = () => {

    
  return (
    <div>
      Technical Skills
      <Cards
        langname={"Python"}
        langpercent={"45"}
        tag={"twsting"}
        lasttag={"expert"}
      />


      
    </div>
  );
};

export default TechnicalSkills;
