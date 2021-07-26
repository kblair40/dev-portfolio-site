import React from "react";
import WorkIcon from "@material-ui/icons/Work";

import ResumeSection from "../ResumeSection";
import CustomIcon from "../CustomIcon";
import ExperienceExtra from "./ExtraContent/ExperienceExtra";
import classes from "./Experience.module.css";

const Experience = ({ isHovered, mutingIsActive }) => {
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
          icon={<WorkIcon fontSize="large" />}
        />
        <h3 className={classes.sectionHeader}>EXPERIENCE</h3>
      </div>
      <div className={classes.sectionContent}>
        <ResumeSection
          subheader="Donyati, LLC"
          subheaderDetails="Consultant &nbsp;(Mar 2020 - Mar 2021)"
          bullets={[
            "Built command line programs using Python for comparing and automating modifications to Excel spreadsheets",
            "Assisted in the implementation of EPM software for multiple Fortune 500 companies",
          ]}
        />

        <ExperienceExtra />
      </div>
    </React.Fragment>
  );
};

export default Experience;
