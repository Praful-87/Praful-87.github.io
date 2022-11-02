import "./AboutContent.css";
import React from "react";
import { Link } from "react-scroll";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who I am?</h1>
        <p>
          Hi, I am a react developer with with skilled in building resposive
          webpags
        </p>
        <Link className="btn" to="contact">
          Contact
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              className="img"
              src="https://www.fingent.com/wp-content/uploads/img-1.jpg"
              alt="ad"
            />
          </div>
          <div className="img-stack bottom">
            <img
              className="img"
              src="https://s.tmimgcdn.com/scr/1200x750/172900/foodtech-food-delivery-amp-restaurant-react-js-admin-dashboard_172964-original.jpg"
              alt="top img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
