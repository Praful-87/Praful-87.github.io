import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who I am</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          voluptas.
        </p>
      </div>
      <Link className="btn">Contact</Link>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src="https://miro.medium.com/max/828/1*dLaDL-lSN0iprzmOpmM7zQ.png"
              alt=""
            />
          </div>
          <div className="img-stack bottom">
            <img
              className="img"
              src="https://res.cloudinary.com/proxify-io/image/upload/c_fill,f_auto,q_auto,dpr_auto,w_1440,h_600/v1/cms/images/articles/0S2oGmon8xrcPwq6heTRyh3DayYVh6e2ftTjGuDA.jpg"
              alt="top img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
