import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faBrush,
  faRuler,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./AboutIcons.module.css";

const AboutIcons = () => {
  const sm = useMediaQuery("(max-width:400px)");
  const md = useMediaQuery("(max-width:600px)");

  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <div className={classes.item}>
          <FontAwesomeIcon icon={faMedal} size={sm ? "4x" : md ? "6x" : "8x"} />
          <p>World-Class Apps</p>
        </div>
        <div className={classes.item}>
          <FontAwesomeIcon icon={faBrush} size={sm ? "4x" : md ? "6x" : "8x"} />
          <p>Tailored To Your Needs</p>
        </div>
        <div className={classes.item}>
          <FontAwesomeIcon icon={faRuler} size={sm ? "4x" : md ? "6x" : "8x"} />
          <p>Pixel-Perfect Code</p>
        </div>
        <div className={classes.item}>
          <FontAwesomeIcon icon={faHeart} size={sm ? "4x" : md ? "6x" : "8x"} />
          <p>Built With Love</p>
        </div>
      </div>
    </div>
  );
};

export default AboutIcons;
