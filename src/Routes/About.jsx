import React from "react";
import HeroImage3 from "../Components/hero/HeroImage3";
import AboutContent from "../Components/About/AboutContent";
const About = () => {
  return (
    <div id="about">
      <HeroImage3
        heading="ABOUT."
        text="I am a friendly full stack web developer"
      />
      <AboutContent />
    </div>
  );
};

export default About;
