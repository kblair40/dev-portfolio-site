import React from "react";
import Divider from "@material-ui/core/Divider";

import classes from "./Skill.module.css";

const Skills = ({ title, skillLevel, isLastSkill = false }) => {
  const divider = (
    <Divider
      style={{
        marginTop: "1rem",
        width: "calc(100% + 3.5rem)",
        position: "relative",
        right: "2.5rem",
      }}
    />
  );
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.skillTitle}>{title}</div>
        <div className={classes.progressContainer}>
          <div className={classes.progressBg} />
          <div
            style={{ width: skillLevel }}
            className={classes.progressOverlay}
          />
        </div>
      </div>
      {isLastSkill && divider}
    </React.Fragment>
  );
};

export default Skills;
