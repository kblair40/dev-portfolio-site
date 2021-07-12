import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faBrush } from "@fortawesome/free-solid-svg-icons";

import classes from "./AboutIcons.module.css";

const AboutIcons = () => {
  return (
    <div className={classes.container}>
      {/* <FontAwesomeIcon icon={faCoffee} size="6x" /> */}
      <FontAwesomeIcon icon={faMedal} size="6x" />
      <FontAwesomeIcon icon={faBrush} size="6x" />
    </div>
  );
};

export default AboutIcons;
