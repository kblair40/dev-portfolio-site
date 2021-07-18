import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

import ProjectCard from "./ProjectCard";
import classes from "./ProjectCards.module.css";

const ProjectCards = () => {
  const mdScreen = useMediaQuery("(max-width: 890px)");

  const logEnd = () => {
    console.log("end");
  };

  return (
    <div>
      <PerfectScrollbar
        className={classes.scrollbar}
        options={{
          suppressScrollX: true,
        }}
        onYReachEnd={logEnd}
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
    </div>
  );
};

export default ProjectCards;
