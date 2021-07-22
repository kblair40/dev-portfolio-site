import React from "react";
import Paper from "@material-ui/core/Paper";

import classes from "./ResumeContainer.module.css";

const ResumeContainer = ({ children, isDarkMode }) => {
  const paperStyles = isDarkMode
    ? { background: "#121212", color: "rgba(255,255,255,0.87)" }
    : {};

  return (
    <div className={`${classes.resumeContainer} ${isDarkMode && classes.dark}`}>
      <Paper elevation={5} style={paperStyles} classes={{ root: classes.root }}>
        {children}
      </Paper>
    </div>
  );
};

export default ResumeContainer;
