import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

import classes from "./LinkModal.module.css";

const LinkModal = ({ open, handleClose, githubLink, liveLink }) => {
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <div className={classes.links}>
            <a
              className={classNames(classes.githubLink, classes.link)}
              href={githubLink}
              target="blank"
            >
              <IconButton className={classes.iconBtn}>
                <GitHubIcon
                  fontSize="large"
                  className={classNames(classes.iconLink, classes.githubIcon)}
                />
              </IconButton>
              Github Repo
            </a>

            <a
              className={classNames(classes.liveLink, classes.link)}
              href={liveLink}
              target="blank"
            >
              <IconButton className={classes.iconBtn}>
                <OfflineBoltIcon
                  fontSize="large"
                  className={classNames(classes.iconLink, classes.liveIcon)}
                />
              </IconButton>
              Live Project
            </a>
          </div>
          <Button
            id="close-btn"
            onClick={handleClose}
            classes={{ root: classes.closeBtn }}
          >
            Close
          </Button>
        </div>
      </Fade>
    </Modal>
  );
};

export default LinkModal;
