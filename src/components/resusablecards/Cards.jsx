import React from "react";

import "./cards.css";

const Cards = ({ name, level, bar, tag }) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>

        <span>{level}</span>
      </div>

      <div>
        <span>{bar}</span>

        <div className="skill-bar">
          <span className="skill-fill"></span>
          <span className="skill-cap"></span>
        </div>

        <span>{tag}</span>
      </div>
    </div>
  );
};

export default Cards;
