import React from "react";
import classes from "./AvatarBackdrop.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdropContainer}>
      <div className={classes.bgOverlay}>
        <div className={classes.circle}>{props.children}</div>
      </div>
    </div>
  );
};

export default Backdrop;
