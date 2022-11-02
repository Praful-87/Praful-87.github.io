import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-scroll";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          src="https://images.unsplash.com/photo-1666844550308-9b47df48af49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="intro-img"
          className="intro-img"
        />
      </div>
      <div className="content">
        <p>Hi Im a developer</p>
        <h1>React Developer</h1>
        <div>
          <Link to="projects" className="btn">
            Projects
          </Link>
          <Link to="contacts" className="btn btn-light">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
