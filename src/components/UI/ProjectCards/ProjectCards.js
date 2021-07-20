import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ProjectCard from "./ProjectCard";
import classes from "./ProjectCards.module.css";

const ProjectCards = () => {
  return (
    <PerfectScrollbar
      className={classes.scrollbar}
      options={{
        suppressScrollX: true,
        wheelPropagation: false,
      }}
    >
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
        <ProjectCard
          name="todos"
          liveLink="https://todos-kb.netlify.app/"
          githubLink="https://github.com/kblair40/Todo"
        />
      </div>
    </PerfectScrollbar>
  );
};

export default ProjectCards;
