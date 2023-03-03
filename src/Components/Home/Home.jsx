import "./home.css";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="layout home-container">
      <div className="wrapper">
        <div className="my-image-bx">
          <img
            src="https://avatars.githubusercontent.com/u/103850217?v=4"
            alt=""
          />
        </div>
        <h1 className="white home-intro">
          Hi I, am &nbsp;<span className="green">Praful</span>{" "}
        </h1>
        <p className="intro-desc white">
          The purpose of my portfolio is to track my learning and development
          throughout my graduate years. My portfolio is a collection and
          reflection of my skills to get myself a clearer picture of my growth.
        </p>
        
      </div>
    </div>
  );
};

export default Home;
