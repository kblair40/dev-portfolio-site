import React from "react";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import classNames from "classnames";
import { useSelector } from "react-redux";

import Skill from "../Skill";
import CustomIcon from "../CustomIcon";
import SectionDivider from "../SectionDivider";
import classes from "./Skills.module.css";

const Skills = ({ isHovered, mutingIsActive, isDarkMode }) => {
  const userIsOnMobile = useSelector((st) => st.hoverLocation.userIsOnMobile);
  return (
    <div className={classes.skillsContainer}>
      <div
        className={
          !isHovered && mutingIsActive && !userIsOnMobile
            ? isDarkMode
              ? classes.bgOverlayDark
              : classes.bgOverlayLight
            : classes.hidden
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
        <Skill title="Javascript" skillLevel="86%" />
        <Skill title="HTML5" skillLevel="90%" />
        <Skill title="CSS3" skillLevel="88%" />
        <Skill title="React.js" skillLevel="82%" />
        <Skill title="React-Redux" skillLevel="80%" />
        <Skill title="Python" skillLevel="80%" />
        <Skill title="SQL" skillLevel="62%" />
        <Skill title="Node.js" skillLevel="72%" />
        <Skill title="Material-UI" skillLevel="90%" />
        <Skill title="MongoDB" skillLevel="68%" />
        <Skill title="React-Router" skillLevel="82%" />
        <div className={classNames(classes.otherSkillsContainer)}>
          <h4>Others...</h4>
          <ul className={classes.skillsList}>
            <li>Bootstrap</li>
            <li>Git/Github</li>
            <li>AJAX</li>
            <li>AWS</li>
            <li>Firebase</li>
          </ul>
        </div>
        <SectionDivider topMargin="1rem" />
      </div>
    </div>
  );
};

export default Skills;
