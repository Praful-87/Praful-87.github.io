import "./footer.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="f-left">
          <div className="location">
            <p>
              <FaHome />
            </p>
            <p>Yavatamal Maharastra 445215</p>
          </div>
          <div className="phone location">
            <p>
              <FaPhone />
            </p>
            <p>+917057311197</p>
          </div>
          <div className="email location">
            <p>
              <FaMailBulk />
            </p>
            <p>prafuljadhao87@gmail.com</p>
          </div>
        </div>
        <div className="f-right">
          <p className="f-about">
            Hi I am a fullstack web developer with hands-on experince in
            building responsive and full stack applicatoin with good knowledge
            of React Js and backend
          </p>
          <div className="social">
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaLinkedin />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
