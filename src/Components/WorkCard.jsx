import "./workCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";
import cric from "../Images/cricinfo.png";
import mind from "../Images/mind.png";
const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">
        <div className="project-container">
          <div className="project-card">
            <img src={cric} alt="ig" />
            <h2 className="project-title">ESPNCrickinfo</h2>
            <div className="pro-details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, dolores.
              </p>
              <div className="pro-btns">
                <NavLink className="btn">LIVE</NavLink>
                <NavLink className="btn">SOURCE</NavLink>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={cric} alt="ig" />
            <h2 className="project-title">ESPNCrickinfo</h2>
            <div className="pro-details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, dolores.
              </p>
              <div className="pro-btns">
                <NavLink className="btn">LIVE</NavLink>
                <NavLink className="btn">SOURCE</NavLink>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src={cric} alt="ig" />
            <h2 className="project-title">ESPNCrickinfo</h2>
            <div className="pro-details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, dolores.
              </p>
              <div className="pro-btns">
                <NavLink className="btn">LIVE</NavLink>
                <NavLink className="btn">SOURCE</NavLink>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default WorkCard;
