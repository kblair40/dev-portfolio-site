import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import classNames from "classnames";

import classes from "./BackToHome.module.css";

const BackToHome = () => {
  const isDarkMode = useSelector((st) => st.theme.isDarkMode);
  return (
    <div className={classes.container}>
      <Link
        className={classNames(
          isDarkMode ? classes.textDark : classes.textLight
        )}
        to="/"
      >
        <div className={classes.arrowContainer}>
          <ArrowBackIosIcon fontSize="small" />
        </div>
        <div className={classes.textContainer}>Back to Home</div>
      </Link>
    </div>
  );
};

export default BackToHome;
