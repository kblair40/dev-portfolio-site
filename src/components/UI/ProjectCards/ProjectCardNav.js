import React, { useState } from "react";
import classNames from "classnames";
import InfoIcon from "@material-ui/icons/Info";
import IconButton from "@material-ui/core/IconButton";

import LinkModal from "./LinkModal";
import classes from "./ProjectCardNav.module.css";

const ProjectCardNav = ({ title }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.btnContainer}>
        <div className={classNames(classes.close, classes.button)}></div>
        <div className={classNames(classes.minus, classes.button)}></div>
        <div className={classNames(classes.expand, classes.button)}></div>
      </div>
      <h2 className={classes.header}>{title.toUpperCase()}</h2>
      <div className={classes.infoIconContainer}>
        <IconButton
          onClick={handleOpen}
          classes={{ root: classes.iconBtn }}
          disableRipple
        >
          <InfoIcon />
        </IconButton>
      </div>
      <LinkModal open={modalOpen} handleClose={handleClose} />
    </div>
  );
};

export default ProjectCardNav;
