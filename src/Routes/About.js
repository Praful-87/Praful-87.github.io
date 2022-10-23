import React from "react";
import AboutContent from "../Components/AboutContent";
import HeroImg2 from "../Components/HeroImg2";

const About = () => {
  return (
    <div>
      <HeroImg2
        heading="ABOUT."
        text="I am a friendly full stack web developer"
      />
      <AboutContent />
    </div>
  );
};

export default About;
