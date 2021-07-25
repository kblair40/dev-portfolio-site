import React from "react";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";

import Skill from "../Skill";
import CustomIcon from "../CustomIcon";
import SectionDivider from "../SectionDivider";
import classes from "./Skills.module.css";

const Skills = ({ isHovered, mutingIsActive, hoverLocation }) => {
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
          icon={<DeveloperModeIcon fontSize="large" />}
        />
        <h3>PROGRAMMING SKILLS</h3>
      </div>
      <div className={classes.sectionContent}>
        <Skill title="HTML5" skillLevel="90%" />
        <Skill title="CSS3" skillLevel="88%" />
        <Skill title="Javascript" skillLevel="83%" />
        <Skill title="ReactJS" skillLevel="81%" />
        <Skill title="SQL" skillLevel="62%" />
        <Skill title="NodeJS" skillLevel="72%" />
        <Skill title="MongoDB" skillLevel="68%" />
        <SectionDivider topMargin="1rem" />
      </div>
    </React.Fragment>
  );
};

export default Skills;
