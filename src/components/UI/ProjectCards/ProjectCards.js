import React from "react";

import ProjectCard from "./ProjectCard";
import classes from "./ProjectCards.module.css";

const ProjectCards = () => {
  return (
    <div className={classes.container}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectCards;
