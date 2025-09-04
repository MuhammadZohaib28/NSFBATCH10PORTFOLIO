import React, { useState } from "react";
import "./technicalskils.css";
import Cards from "../resusablecards/Cards";

const TechnicalSkills = () => {
  const [activetab, setActivetab] = useState("All");

  const skillsData = {
    "Web Development": [
      {
        name: "HTML5",
        level: "85",
        bar: "86%",
        tag: "Beginner",
      },
      {
        name: "CSS3",
        level: "65",
        bar: "45%",
        tag: "Intermediate",
      },
      {
        name: "JS",
        level: "67",
        bar: "98%",
        tag: "Beginner",
      },
      {
        name: "ReactJS",
        level: "32",
        bar: "76%",
        tag: "Beginner",
      },
    ],

    "Web Designing": [
      {
        name: "Figma",
        level: "78",
        bar: "35%",
        tag: "Expert",
      },
    ],

    Cooking: [
      {
        name: "Biryani",
        level: "67",
        bar: "78%",
        tag: "Expert",
      },
    ],
  };

  const categories = ["All", ...Object.keys(skillsData)];

  console.log(categories);

  const displayedSkills =
    activetab === "All"
      ? Object.values(skillsData).flat()
      : skillsData[activetab];

  console.log(displayedSkills, "SKILLS");

  return (
    <div>
      <h1>Technical Skills</h1>

      <div className="buttons-container">
        {categories.map((btn, index) => (
          <button
            className={btn === activetab ? "active" : "" }
            key={index}
            onClick={() => setActivetab(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="card-container">
        {displayedSkills.map((skills) => (
          <Cards
            name={skills.name}
            level={skills.level}
            bar={skills.bar}
            tag={skills.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
