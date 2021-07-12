import React from "react";
import classNames from "classnames";

import Teeth from "./Teeth";
import classes from "./Mouth.module.css";

const Mouth = () => {
  return (
    <div className={classes.mouth}>
      <div className={classNames(classes.lip, classes.upperLip)}></div>
      <div className={classNames(classes.lip, classes.lowerLip)}></div>
      <div className={classes.lowerLipRounded}></div>
      <div>
        <Teeth />
      </div>
    </div>
  );
};

export default Mouth;
