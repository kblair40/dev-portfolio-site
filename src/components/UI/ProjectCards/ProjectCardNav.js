import React from "react";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

import classes from "./ProjectCardNav.module.css";

const ProjectCardNav = () => {
  return (
    <div className={classes.container}>
      <div className={classes.btnContainer}>
        <div className={classNames(classes.close, classes.button)}></div>
        <div className={classNames(classes.minus, classes.button)}></div>
        <div className={classNames(classes.expand, classes.button)}></div>
      </div>
      <div className={classes.linkContainer}>
        <a
          href="https://www.github.com/kblair40/ecommerce"
          target="blank"
          className={classes.link}
        >
          Live Link
        </a>
        <div className={classes.iconLink}>
          <IconButton size="small" classes={{ root: classes.iconBtnRoot }}>
            <GitHubIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardNav;
