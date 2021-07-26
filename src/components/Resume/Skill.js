import React from "react";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";
import { useSelector } from "react-redux";

import classes from "./Skill.module.css";

const Skills = ({ title, skillLevel }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.skillTitle}>{title}</div>
        <div className={classes.progressContainer}>
          <div
            className={classNames(
              classes.progressBg,
              isDarkMode ? classes.bgDark : classes.bgLight
            )}
          />
          <div
            style={{ width: skillLevel }}
            className={classNames(
              classes.progressOverlay,
              isDarkMode ? classes.overlayDark : classes.overlayLight
            )}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
