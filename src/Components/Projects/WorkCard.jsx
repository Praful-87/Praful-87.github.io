import "./workCardStyles.css";
import React from "react";
import cric from "../../Images/cricinfo.png";
import mind from "../../Images/mind.png";
import { AiFillCaretRight } from "react-icons/ai";
import TechIcon from "../Tech/TechIcon";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
const WorkCard = () => {
  console.log("rendered");
  const icns = [<FaReact />, <ImCss3 />, <AiFillHtml5 />, <IoLogoJavascript />];
  return (
    <div className="work-container">
      <div className="work-card-container">
        <div className="card-left">
          <div className="card-img">
            <img className="pro-img" src={mind} alt="" />
          </div>
          <div className="tech-stack">
            <p className="tech">Teck-Stack</p>
            <div className="techs">
              {icns.map((item, i) => (
                <div key={i} className="i-fam">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-right">
          <h4 className="title">Mindtickle Clone</h4>
          <p>
            <AiFillCaretRight />
            MindTickle is a sales training platform. It has features for
            onboarding, product training, coaching and ongoing performance
            checks that helps companies to prepare their sales teams and
            partners
          </p>
          <p>
            <AiFillCaretRight />
            Helping revenue organizations create a continuous state of
            excellence isn’t possible without an incredible team. We build
            best-in-class products and partnerships because we have a
            best-in-class team.
          </p>
          <div className="card-bottom">
            <a
              className="btn"
              href="https://resonant-wisp-cedb64.netlify.app/index.html"
              target="_blank"
            >
              Live
            </a>
            <a className="btn" href="">
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
