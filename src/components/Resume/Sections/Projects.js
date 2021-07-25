import React from "react";
import CreateIcon from "@material-ui/icons/Create";

import CustomIcon from "../CustomIcon";
import SectionDivider from "../SectionDivider";
import ResumeSection from "../ResumeSection";
import classes from "./Projects.module.css";
import {
  MEMORY_TEXT,
  MEMORY_BULLETS,
  WATCHLIST_TEXT,
  WATCHLIST_BULLETS,
} from "../../../constants";

const Projects = ({ isHovered, mutingIsActive, hoverLocation }) => {
  return (
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
        <SectionDivider topMargin="2rem" />
      </div>
    </React.Fragment>
  );
};

export default Projects;
