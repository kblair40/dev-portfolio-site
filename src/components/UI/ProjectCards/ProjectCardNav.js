import React, { useState, useEffect } from "react";
import classNames from "classnames";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";

import LinkModal from "./LinkModal";
import { hiddenActions } from "../../../store/hiddenSlice";
import classes from "./ProjectCardNav.module.css";

const ProjectCardNav = ({ title, githubLink, liveLink }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [touchPoints, setTouchPoints] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const touchPointsCount = navigator.maxTouchPoints;
    setTouchPoints(touchPointsCount);
    // console.log("touchPointsCount:", touchPointsCount);
  }, []);

  const handleOpen = () => {
    dispatch(hiddenActions.disableScrolling());
    setModalOpen(true);
  };

  const handleClose = (e) => {
    dispatch(hiddenActions.enableScrolling());
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
