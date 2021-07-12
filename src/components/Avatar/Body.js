import { Fragment } from "react";
import classNames from "classnames";

import Adidas from "./Adidas";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <Fragment>
      <div className={classes.body}>
        <div
          className={classNames(classes.armDivider, classes.armDividerLeft)}
        ></div>
        <div
          className={classNames(classes.armDivider, classes.armDividerRight)}
        ></div>
        <Adidas />
      </div>
    </Fragment>
  );
};

export default Body;
