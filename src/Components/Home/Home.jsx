import "./home.css";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="layout home-container">
      <div className="my-image-bx">
        <img
          src="https://avatars.githubusercontent.com/u/103850217?v=4"
          alt=""
        />
      </div>
      <h1 className="white home-intro">
        Hi I, am Praful <span className="green">praful</span>{" "}
      </h1>
      <p className="intro-desc white">
        The purpose of my portfolio is to track my learning and development
        throughout my graduate years. My portfolio is a collection and
        reflection of my skills to get myself a clearer picture of my growth.
      </p>
      <div className="white icon-cont">
        <a target="_blank" href="https://github.com/Praful-87">
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/praful-jadhao-6ab31a202/"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Home;
