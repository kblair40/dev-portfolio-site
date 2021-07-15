import React from "react";
import classNames from "classnames";

import classes from "./ProjectCardNav.module.css";

const ProjectCardNav = ({ title }) => {
  return (
    <div className={classes.container}>
      <div className={classes.btnContainer}>
        <div className={classNames(classes.close, classes.button)}></div>
        <div className={classNames(classes.minus, classes.button)}></div>
        <div className={classNames(classes.expand, classes.button)}></div>
      </div>
      <h2 className={classes.header}>{title.toUpperCase()}</h2>
    </div>
  );
};

export default ProjectCardNav;
