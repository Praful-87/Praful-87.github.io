import "./about.css";
import React from "react";

const About = () => {
  return (
    <div id="about" className="layout aobut-container">
      <h1 className="title">about</h1>
      <div className="detail-container">
        <div className="a-img-box">
          <img
            src="https://tf-react-bieber.vercel.app/images/about-image.jpg"
            alt="pro-image"
          />
        </div>
        <div className="details-box">
          <h2 className="white about-name">
            Hi, I am <span className="green">Praful Jadhao</span>
          </h2>
          <div className="details-item">
            <span className="green dot"> &#x2022;</span> &nbsp; &nbsp;
            <p className="key white">first name</p>
            <span className="white val">: &nbsp;praful</span>
          </div>
          <div className="details-item">
            <span className="green dot"> &#x2022;</span> &nbsp; &nbsp;
            <p className="key white">last name</p>
            <span className="white val">: &nbsp;jadhao</span>
          </div>
          <div className="details-item">
            <span className="green dot"> &#x2022;</span> &nbsp; &nbsp;
            <p className="key white">name</p>
            <span className="white val">: &nbsp;age</span>
          </div>
          <div className="details-item">
            <span className="green dot"> &#x2022;</span> &nbsp; &nbsp;
            <p className="key white">name</p>
            <span className="white val">: &nbsp;25 years</span>
          </div>
          <div className="details-item">
            <span className="green dot"> &#x2022;</span> &nbsp; &nbsp;
            <p className="key white">nationality</p>
            <span className="white val">: &nbsp;indian</span>
          </div>
          <div className="details-item">
            <span className="green dot"> &#x2022;</span> &nbsp; &nbsp;
            <p className="key white">addreess</p>
            <span className="white val">: &nbsp;praful</span>
          </div>
          <button className="btn">download resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
