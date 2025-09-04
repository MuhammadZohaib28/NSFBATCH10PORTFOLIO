import React from "react";

import "./cards.css";

const Cards = ({ name, level, bar, tag }) => {
  return (
    <div className="card">
      <div className="card-top">
        <h3>{name}</h3>

        <span>{level}</span>
      </div>

      <div className="bar">
        <div className="bar" style={{ width: bar, backgroundColor: "green" }}>
          <span className="bar-percent">{bar}</span>
        </div>
      </div>

      <div className="card-tag">
        <h5>{tag}</h5>
      </div>

    </div>
  );
};

export default Cards;
