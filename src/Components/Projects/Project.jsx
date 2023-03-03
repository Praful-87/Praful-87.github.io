import "./project.css";
import React from "react";
import Card from "./Card";
import { data } from "./projectData";
const Project = () => {
  return (
    <div id="projects" className="layout ">
      <center>
        <h1 className="title">projects</h1>
      </center>

      <div className="project-container">
        {data.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Project;
