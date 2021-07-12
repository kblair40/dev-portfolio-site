import classNames from "classnames";
import { Fragment } from "react";
import classes from "./Ears.module.css";

const Ears = () => {
  return (
    <Fragment>
      <div className={classNames(classes.ear, classes.earLeft)}></div>
      <div className={classNames(classes.ear, classes.earRight)}></div>
    </Fragment>
  );
};

export default Ears;
