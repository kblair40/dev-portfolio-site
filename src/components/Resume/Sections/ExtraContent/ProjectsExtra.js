import React from "react";

import ResumeSection from "../../ResumeSection";
import ExtraContentContainer from "./ExtraContentContainer";
import classes from "./ProjectsExtra.module.css";
import {
  MEMORY_TEXT,
  MEMORY_BULLETS,
  WATCHLIST_TEXT,
  WATCHLIST_BULLETS,
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
            subheader="Stock Watchlist"
            subheaderDetails="ReactJS, Material-UI, Recharts, JSS"
            content={WATCHLIST_TEXT}
            bullets={WATCHLIST_BULLETS}
            liveLink="https://watchlistkab.netlify.app"
            githubLink="https://github.com/kblair40/watchlist"
            needsDivider={true}
          />
        </div>
      </ExtraContentContainer>
    </div>
  );
};

export default ProjectsExtra;
