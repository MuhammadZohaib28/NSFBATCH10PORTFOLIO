import React from "react";
import "./features.css";
import Typewriter from "typewriter-effect";

const Features = () => {
  const features = [
    {
      value: "50+",
      title: "Certifications",
    },
    {
      value: "20+",
      title: "Research Ideas",
    },
    {
      value: "10+",
      title: "Projects",
    },
    {
      value: "24/7",
      title: "Innovation",
    },
  ];

  return (
    <div className="features">
      <div className="top-features">
        <span className="features-tag">Tech Phiosophy</span>

        <Typewriter
          options={{
            strings: [
              "The future belongs to those who",
              "Deep Learning, Deeper Insights",
              "Algorithms are the recipes for digital magic",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "animation",
          }}
        />

        <p>
          Exploring the intersection of innovation, technology, and human
          potential through every line of code
        </p>
      </div>

      <div className="features-card">
        {features.map((item, index) => (
          <div key={index}>
            <h1>{item.value}</h1>

            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
