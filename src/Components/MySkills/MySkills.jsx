import "./mySkills.css";
import React from "react";
import { data } from "./data";
import GitHubCalendar from "react-github-calendar";
import { tools } from "./tool";

const MySkills = () => {
  return (
    <>
      <div id="skills" className="layout">
        <center>
          <h1 className="title">tech stack</h1>
        </center>
        <div className="skills-container">
          {data.map((item, i) => {
            return (
              <div key={i} className="s-item">
                <img src={item.image} alt="" />
                <p className="s-name">{item.name} </p>
              </div>
            );
          })}
        </div>
        <center>
          {" "}
          <h1 className="title">
            Tools <span className="green">I</span> use
          </h1>
        </center>
        <div className="skills-container">
          {tools.map((item, i) => {
            return (
              <div key={i} className="s-item">
                <img src={item.image} alt="" />
                <p className="s-name">{item.name} </p>
              </div>
            );
          })}
        </div>

        <div className="github-calender">
          <h1 className="title">
            github <span className="green">acitivity</span>{" "}
          </h1>
          <GitHubCalendar username="Praful-87" />
        </div>
        <div className="stats">
          <p>
            &nbsp;
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=praful-87&theme=radical&hide_border=false&show_icons=true&locale=en "
              alt="praful-87"
            />
          </p>

          <p>
            <img
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=praful-87&theme=radical&hide_border=false"
              alt="praful-87"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default MySkills;
