import React from "react";

import ProjectCard from "./ProjectCard";
import classes from "./ProjectCards.module.css";

const ProjectCards = () => {
  return (
    <div className={classes.container}>
      <ProjectCard
        name="ecommerce"
        liveLink="https://ecommerce-kb.netlify.app/"
        githubLink="https://github.com/kblair40/ecommerce"
      />
      <ProjectCard
        name="user auth"
        liveLink="https://signup-kb.netlify.app/signup"
        githubLink="https://github.com/kblair40/signup"
      />
      <ProjectCard
        name="memory"
        liveLink="https://memory-6fc80b.netlify.app/"
        githubLink="https://github.com/kblair40/memory"
      />
      <ProjectCard name="todo" liveLink="" githubLink="" />
    </div>
  );
};

export default ProjectCards;
