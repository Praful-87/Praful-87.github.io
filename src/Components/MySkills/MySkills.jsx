import "./mySkills.css";
import React from "react";
import { data } from "./data";
import GitHubCalendar from "react-github-calendar";
import { tools } from "./tool";

const MySkills = () => {
  return (
    <>
      <div id="skills" className="layout">
        <h1 className="title">my skills</h1>
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
        <h1 className="title">Tools</h1>
        <div className="tools-container">
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
          <h1 className="title">github calendar</h1>
          <GitHubCalendar username="Praful-87" />
        </div>
        <div className="stats">
          <p>
            &nbsp;
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=praful-87&show_icons=true&locale=en"
              alt="praful-87"
            />
          </p>

          <p>
            <img
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=praful-87&"
              alt="praful-87"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default MySkills;
