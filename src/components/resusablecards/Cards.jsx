import React from "react";

import "./cards.css";

const Cards = ({ langname, langpercent, tag, lasttag }) => {
  return (
    <div>
      <div>
        <h3>{langname}</h3>

        <span>{langpercent}</span>
      </div>

      <div>
        <span>{tag}</span>

        <div
          className="skill-bar"
         
        >
          <span className="skill-fill"></span>
          <span className="skill-cap"></span>
        </div>

        <span>{lasttag}</span>
      </div>
    </div>
  );
};

export default Cards;
