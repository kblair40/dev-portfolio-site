import React from "react";
import classNames from "classnames";

import classes from "./Teeth.module.css";

const Teeth = () => {
  return (
    <div className={classes.teeth}>
      <div className={classNames(classes.upperTeeth, classes.teethContainer)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classNames(classes.lowerTeeth, classes.teethContainer)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Teeth;
