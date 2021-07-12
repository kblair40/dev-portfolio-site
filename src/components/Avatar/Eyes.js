import { Fragment } from "react";
import classNames from "classnames";

import classes from "./Eyes.module.css";

const Eyes = () => {
  return (
    <Fragment>
      <div className={classNames(classes.eyebrow, classes.leftEyebrow)}></div>
      <div
        className={classNames(
          classes.eyebrowRounded,
          classes.leftEyebrowRounded
        )}
      ></div>
      <div className={classNames(classes.eye, classes.leftEye)}>
        <div className={classes.iris}>
          <div className={classes.pupil}>
            <div className={classes.pupilDetail}></div>
          </div>
        </div>
      </div>
      <div className={classNames(classes.eyebrow, classes.rightEyebrow)}></div>
      <div
        className={classNames(
          classes.eyebrowRounded,
          classes.rightEyebrowRounded
        )}
      ></div>

      <div className={classNames(classes.eye, classes.rightEye)}>
        <div className={classes.iris}>
          <div className={classes.pupil}>
            <div className={classes.pupilDetail}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Eyes;
