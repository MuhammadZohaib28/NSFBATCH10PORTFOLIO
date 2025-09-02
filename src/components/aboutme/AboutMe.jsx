import React from "react";
import './aboutme.css'
import aboutmepicture from "../../assets/aboutme.png";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-picture">
        <img src={aboutmepicture} />
      </div>

      <div className="text-div">
        <h1>About Me</h1>

        <h2>A dedicated Front-end Developer based in Karachi, Pakistan. 📍</h2>

        <p>
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML5 , CSS3, JavaScript, ReactJS along with NextJS ,
          Tailwind, and SCSS/SASS. I excel in designing and maintaining
          responsive websites that offer a smooth user experience. My expertise
          lies in craftingdynamic, engaging interfaces through writing clean and
          optimized code and utilizing cutting-edge development tools and
          techniques. I am also a team playerwho thrives in collaborating with
          cross-functional teams to produce outstanding web applications.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
