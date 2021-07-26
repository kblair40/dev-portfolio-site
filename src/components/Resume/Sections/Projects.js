import React from "react";
import CreateIcon from "@material-ui/icons/Create";

import ProjectsExtra from "./ExtraContent/ProjectsExtra";
import CustomIcon from "../CustomIcon";
import SectionDivider from "../SectionDivider";
import ResumeSection from "../ResumeSection";
import classes from "./Projects.module.css";
import {
  SIGNUP_TEXT,
  SIGNUP_BULLETS,
  ECOMMERCE_TEXT,
  ECOMMERCE_BULLETS,
} from "../../../constants";

const Projects = ({ isHovered, mutingIsActive, isDarkMode }) => {
  return (
    <div className={classes.projectsContainer}>
      {" "}
      <div
        className={
          !isHovered && mutingIsActive
            ? isDarkMode
              ? classes.bgOverlayDark
              : classes.bgOverlayLight
            : classes.hidden
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
          subheader="Ecommerce"
          subheaderDetails="ReactJS, Redux, Fetch API, React-Router, Material-UI"
          content={ECOMMERCE_TEXT}
          bullets={ECOMMERCE_BULLETS}
          liveLink="https://ecommerce-kb.netlify.app"
          githubLink="https://github.com/kblair40/ecommerce"
          needsDivider={true}
        />
        <ResumeSection
          subheader="User Auth"
          subheaderDetails="ReactJS, Firebase, Redux, React-Router"
          content={SIGNUP_TEXT}
          bullets={SIGNUP_BULLETS}
          liveLink="https://signup-kb.netlify.app"
          githubLink="https://github.com/kblair40/signup"
          needsDivider={true}
        />
        <ProjectsExtra />
        <SectionDivider topMargin="2rem" />
      </div>
    </div>
  );
};

export default Projects;
