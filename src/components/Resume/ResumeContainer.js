import React from "react";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";

import classes from "./ResumeContainer.module.css";

const ResumeContainer = ({ children, isDarkMode }) => {
  return (
    <div className={classes.resumeContainer}>
      <Paper
        elevation={5}
        classes={{
          root: classNames(
            classes.paperRoot,
            isDarkMode ? classes.paperDark : classes.paperLight
          ),
        }}
      >
        {children}
      </Paper>
    </div>
  );
};

export default ResumeContainer;
