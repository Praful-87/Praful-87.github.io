import "./card.css";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
const Card = ({ item }) => {
  return (
    <div className="card-container">
      <p className="card-title">{item.title}</p>
      <div className="card-image-box">
        <img src={item.image} alt="" />
      </div>

      <p className="card-desc">{item.desc} </p>
      <div className="tech-stack-container">
        <center>
          <p className="tech-title">tech stack used &#9889;&nbsp;</p>
        </center>
        <div className="tech-stack-items-container">
          {item.techStack.map((el) => {
            return <p key={el}>{el} |&nbsp;</p>;
          })}
        </div>
      </div>
      <div className="btn-container">
        {/* <a target="_blank" href={item.live}>
          <button className="btn">live</button>
        </a> */}
        <a href={item.source} target="_blank">
          <div className="box source">
            <FaGithub className="c-icons" />
            <h3 className="white">Github</h3>
          </div>
        </a>
        <a href={item.live} target="_blank">
          <div className="box source">
            <FaExternalLinkAlt className="c-icons" />
            <h3 className="white">Live</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
