import "./ProjectHero.css";
import React from "react";
const HeroImg2 = ({ heading, text }) => {
  return (
    <div className="p-hero-img">
      <div className="p-heading">
        <h1>{heading}</h1>
        <p>{text} </p>
      </div>
    </div>
  );
};

export default HeroImg2;
