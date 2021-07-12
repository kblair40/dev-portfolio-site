import React from "react";
import classNames from "classnames";

import classes from "./Adidas.module.css";

const Adidas = () => {
  return (
    <div className={classes.adidas}>
      <div className={classes.stripes}>
        <div className={classNames(classes.stripe, classes.stripeLg)}></div>
        <div className={classNames(classes.stripe, classes.stripeMd)}></div>
        <div className={classNames(classes.stripe, classes.stripeSm)}></div>
      </div>
    </div>
  );
};

export default Adidas;
