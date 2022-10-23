import "./HeroImgStyles.css";
import React from "react";
import heroImg from "../Images/intro-img.jpg";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={heroImg} alt="intro-img" className="intro-img" />
      </div>
      <div className="content">
        <p>Hi Im a developer</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contacts" className="btn btn-light">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
