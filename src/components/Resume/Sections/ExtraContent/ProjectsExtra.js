import React from "react";

import ResumeSection from "../../ResumeSection";
import ExtraContentContainer from "./ExtraContentContainer";
import classes from "./ProjectsExtra.module.css";
import {
  MEMORY_TEXT,
  MEMORY_BULLETS,
  TODOS_TEXT,
  TODOS_BULLETS,
} from "../../../../constants";

const ProjectsExtra = () => {
  return (
    <div className={classes.container}>
      <ExtraContentContainer>
        <div className={classes.sectionContent}>
          <ResumeSection
            subheader="Memory Card Game"
            subheaderDetails="ReactJS, Material-UI, Axios, JSS"
            content={MEMORY_TEXT}
            bullets={MEMORY_BULLETS}
            liveLink="https://memory-6fc80b.netlify.app"
            githubLink="https://github.com/kblair40/memory"
          />
          <ResumeSection
            subheader="Todo"
            subheaderDetails="ReactJS, Hooks, UUID"
            content={TODOS_TEXT}
            bullets={TODOS_BULLETS}
            liveLink="https://todos-kb.netlify.app/"
            githubLink="https://github.com/kblair40/todo"
            needsDivider={true}
          />
        </div>
      </ExtraContentContainer>
    </div>
  );
};

export default ProjectsExtra;
