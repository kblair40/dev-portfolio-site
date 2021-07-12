import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faBrush,
  faRuler,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./AboutIcons.module.css";

const AboutIcons = () => {
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <div className={classes.item}>
          <FontAwesomeIcon icon={faMedal} size="8x" />
          <p>World-Class Apps</p>
        </div>
        <div className={classes.item}>
          <FontAwesomeIcon icon={faBrush} size="8x" />
          <p>Tailored To Your Needs</p>
        </div>
        <div className={classes.item}>
          <FontAwesomeIcon icon={faRuler} size="8x" />
          <p>Pixel-Perfect Code</p>
        </div>
        <div className={classes.item}>
          <FontAwesomeIcon icon={faHeart} size="8x" />
          <p>Built With Love</p>
        </div>
      </div>
    </div>
  );
};

export default AboutIcons;
