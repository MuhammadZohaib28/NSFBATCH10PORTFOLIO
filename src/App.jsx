import React from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import Features from "./components/features/Features";
import AboutMe from "./components/aboutme/AboutMe";
import TechnicalSkills from "./components/technicalskills/TechnicalSkills";


const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <AboutMe />
      <TechnicalSkills />
    </div>
  );
};

export default App;
