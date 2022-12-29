import "./card.css";
import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <p className="card-title">{item.title}</p>
      <div className="card-image-box">
        <img src={item.image} alt="" />
      </div>
      <p className="card-desc">{item.desc} </p>
      <div className="tech-stack-container">
        <p className="tech-title">tech stack used &rarr;&nbsp;</p>
        <div className="tech-stack-items-container">
          {item.techStack.map((el) => {
            return <p key={el}>{el} |&nbsp;</p>
          })}
        </div>
      </div>
      <div className="btn-container">
        <a target="_blank" href={item.live}>
          <button className="btn">live</button>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a target="_blank" href={item.source}>
          <button className="btn">source</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
