import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import classNames from "classnames";
import { scroller } from "react-scroll";

import classes from "./DownArrow.module.css";

const DownArrow = () => {
  const scrollToAbout = () => {
    scroller.scrollTo("scrollToAbout", {
      duration: 1500,
      delay: 50,
      smooth: true,
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer}>
        <IconButton onClick={scrollToAbout} className={classes.iconBtnRoot}>
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default DownArrow;
