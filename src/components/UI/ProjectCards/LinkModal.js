import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Link from "@material-ui/core/Link";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

import classes from "./LinkModal.module.css";

const LinkModal = ({ open, handleClose, githubLink, liveLink }) => {
  const preventDefault = (event) => event.preventDefault();

  const handleTouch = (e, link) => {
    console.log("TOUCHED", e);
    console.log("link", link, "\n\n");
    window.open(link, "_blank");
  };

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
              onTouchStart={(e) => handleTouch(e, githubLink)}
              // onClick={preventDefault}
            >
              {/* <Link
              // onClick={preventDefault}
              className={classNames(classes.githubLink, classes.link)}
              href={githubLink}
              target="blank"
            > */}
              <IconButton
                className={classes.iconBtn}
                disableFocusRipple
                disableRipple
              >
                <GitHubIcon
                  fontSize="large"
                  className={classNames(classes.iconLink, classes.githubIcon)}
                />
              </IconButton>
              Github Repo
              {/* </Link> */}
            </a>

            <a
              className={classNames(classes.liveLink, classes.link)}
              href={liveLink}
              target="blank"
              onTouchStart={(e) => handleTouch(e, liveLink)}
              // onClick={handleClick}
            >
              <IconButton
                className={classes.iconBtn}
                disableFocusRipple
                disableRipple
              >
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
