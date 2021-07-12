import { Fragment } from "react";
import classes from "./Neck.module.css";

const Neck = () => {
  return (
    <Fragment>
      <div className={classes.neck}></div>
      <div className={classes.shirtCutout}></div>
    </Fragment>
  );
};

export default Neck;
