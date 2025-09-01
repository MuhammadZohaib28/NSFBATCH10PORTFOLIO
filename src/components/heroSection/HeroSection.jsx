import React from "react";
import "./herosection.css";
import myimage from "../../assets/zohaibpicture.png";
import { CiDesktopMouse2 } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="herosection-image">
        <img src={myimage} alt="My picture" />
      </div>
      <h1 className="herosection-heading">Frontend ReactJS Developer</h1>

      <span className="herosection-span">
        Building intelligent solutions that transform ideas into reality
      </span>

      <p className="herosection-paragraph">
        Specializing in Machine Learning, Full-Stack Development, and
        cutting-edge AI technologies
      </p>

      <div className="herosection-button">
        <button className="herosection-buttons">View my work</button>
        <button className="herosection-buttons">Let's Connect</button>
      </div>

      <h1 className="mouse">
        <CiDesktopMouse2 className="mouse-icon"/>
      </h1>
    </div>
  );
};

export default HeroSection;
