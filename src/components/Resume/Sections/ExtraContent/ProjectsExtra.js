import React from "react";

import classes from "./ProjectsExtra.module.css";

const ProjectsExtra = () => {
  return (
    //   <div className={classes.container}>
    <React.Fragment>
      <div
        className={
          !isHovered && mutingIsActive ? classes.bgOverlay : classes.hidden
        }
      />
      <div className={classes.sectionHeader}>
        <CustomIcon
          className={classes.customIcon}
          icon={<CreateIcon fontSize="large" />}
        />
        <h3>PROJECTS</h3>
      </div>
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
        <ExtraContentContainer />
        <SectionDivider topMargin="2rem" />
      </div>
    </React.Fragment>
  );
};

export default ProjectsExtra;
