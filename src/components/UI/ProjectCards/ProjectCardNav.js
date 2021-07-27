import React, { useState, useEffect } from "react";
import classNames from "classnames";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";

import LinkModal from "./LinkModal";
import classes from "./ProjectCardNav.module.css";

const ProjectCardNav = ({ title, githubLink, liveLink }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [touchPoints, setTouchPoints] = useState(0);

  useEffect(() => {
    const touchPointsCount = navigator.maxTouchPoints;
    setTouchPoints(touchPointsCount);
    console.log("touchPointsCount:", touchPointsCount);
  }, []);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = (e) => {
    // e.stopPropagation();
    // console.log("PARENT ID:", e.target.parentElement.id);
    // console.log("EL ID:", e.target.id);
    setModalOpen(false);
  };

  return (
    <div className={classes.container} id="project-card-nav">
      <div className={classes.btnContainer}>
        <div className={classNames(classes.close, classes.button)}></div>
        <div className={classNames(classes.minus, classes.button)}></div>
        <div className={classNames(classes.expand, classes.button)}></div>
      </div>
      <h2 className={classes.header}>{title.toUpperCase()}</h2>
      {touchPoints > 0 && (
        <React.Fragment>
          <div className={classes.infoIconContainer}>
            <IconButton
              onClick={handleOpen}
              classes={{ root: classes.iconBtn }}
              disableRipple
            >
              <InfoIcon />
            </IconButton>
          </div>

          <LinkModal
            githubLink={githubLink}
            liveLink={liveLink}
            open={modalOpen}
            handleClose={handleClose}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProjectCardNav;
