import React from "react";
import ProjectHero from "../Components/Projects/ProjectHero";
import WorkCard from "../Components/Projects/WorkCard";
const Projects = () => {
  return (
    <div id="projects">
      <ProjectHero heading="Projects" text="Some of recent work" />
      <WorkCard />
    </div>
  );
};

export default Projects;
