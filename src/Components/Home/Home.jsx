import "./home.css";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

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
        <h1 className="white home-intro">Hi I, am</h1>
        <h1 className=" green">
          <Typewriter
            options={{
              strings: [
                "Praful",
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "Probem Solver"
              ],
              autoStart: true,
              loop: true,
            }}
          />
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
