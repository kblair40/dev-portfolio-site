import React from "react";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";
import { useSelector } from "react-redux";

import classes from "./Skill.module.css";

const CustomDivider = () => {
  return (
    <Divider
      style={{
        marginTop: "1rem",
        width: "calc(100% + 3.5rem)",
        position: "relative",
        right: "2.5rem",
      }}
    />
  );
};

const Skills = ({ title, skillLevel, isLastSkill = false }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.skillTitle}>{title}</div>
        <div className={classes.progressContainer}>
          <div className={classes.progressBg} />
          <div
            style={{ width: skillLevel }}
            className={classNames(
              classes.progressOverlay,
              isDarkMode ? classes.overlayDark : classes.overlayLight
            )}
          />
        </div>
      </div>
      {isLastSkill && <CustomDivider />}
    </React.Fragment>
  );
};

export default Skills;
