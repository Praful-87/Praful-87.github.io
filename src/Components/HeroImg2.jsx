import React from "react";
import "./HeroImg2Styles.css";
const HeroImg2 = ({ heading, text }) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text} </p>
      </div>
    </div>
  );
};

export default HeroImg2;
