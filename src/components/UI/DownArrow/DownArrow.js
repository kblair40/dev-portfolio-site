import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import classNames from "classnames";

import classes from "./DownArrow.module.css";

const DownArrow = () => {
  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer}>
        <IconButton className={classes.iconBtnRoot}>
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default DownArrow;
