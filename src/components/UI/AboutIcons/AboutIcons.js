import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SpeedIcon from "@material-ui/icons/Speed";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AssessmentIcon from "@material-ui/icons/Assessment";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

import classes from "./AboutIcons.module.css";

const AboutIcons = () => {
  const sm = useMediaQuery("(max-width:400px)");
  const md = useMediaQuery("(max-width:600px)");

  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <div className={classes.item}>
          <StarBorderIcon
            size="large"
            classes={{ root: classNames(classes.muiIcon, classes.starIcon) }}
          />
          <p>First-Rate Apps</p>
        </div>
        <div className={classes.item}>
          <SpeedIcon
            size="large"
            classes={{ root: classNames(classes.muiIcon, classes.speedIcon) }}
          />
          <p>Fast Learner</p>
        </div>
        <div className={classes.item}>
          <AssessmentIcon
            size="large"
            classes={{ root: classNames(classes.muiIcon, classes.graphIcon) }}
          />
          <p>Pixel-Perfect Code</p>
        </div>
        <div className={classes.item}>
          <FavoriteIcon
            size="large"
            classes={{ root: classNames(classes.muiIcon, classes.heartIcon) }}
          />
          <p>Built With Love</p>
        </div>
      </div>
    </div>
  );
};

export default AboutIcons;
