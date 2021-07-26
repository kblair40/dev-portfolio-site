import React from "react";
import SchoolIcon from "@material-ui/icons/School";

import classes from "./University.module.css";
import ResumeSection from "../ResumeSection";
import CustomIcon from "../CustomIcon";
import SectionDivider from "../SectionDivider";

const University = ({ isHovered, mutingIsActive, isDarkMode }) => {
  return (
    <div className={classes.universityContainer}>
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
          icon={<SchoolIcon fontSize="large" />}
        />
        <h3>UNIVERSITY</h3>
      </div>
      <div className={classes.sectionContent}>
        <ResumeSection
          subheader="The University of Alabama"
          subheaderDetails="BS Finance  &nbsp;(2009 - 2013)"
          bullets={[
            "Alabama Men’s Varsity Basketball Scout Team, 2011 - 2012",
            "Alabama Men’s Club Volleyball Team, 2009 - 2010",
          ]}
          needsDivider={true}
        />
        <SectionDivider topMargin="2rem" />
      </div>
    </div>
  );
};

export default University;
