import React from "react";

import ProjectCard from "./ProjectCard";
import classes from "./ProjectCards.module.css";

const ProjectCards = () => {
  return (
    <div className={classes.container}>
      <ProjectCard name="ecommerce" />
      <ProjectCard />
      <ProjectCard name="todo" />
      {/* <ProjectCard /> */}
    </div>
  );
};

export default ProjectCards;
