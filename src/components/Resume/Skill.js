import React from "react";
import classes from "./Skill.module.css";

const Skills = ({ title, skillLevel }) => {
  return (
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
  );
};

export default Skills;
