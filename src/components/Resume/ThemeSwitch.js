import React from "react";
// import Switch from "@material-ui/core/Switch";
// import WbSunnyIcon from "@material-ui/icons/WbSunny";
// import NightsStayIcon from "@material-ui/icons/NightsStay";
import classNames from "classnames";

import classes from "./ThemeSwitch.module.css";

const ThemeSwitch = ({ isDarkMode, handleThemeSwitch }) => {
  return (
    <div
      className={classNames(
        classes.outerContainer,
        !isDarkMode && classes.light
      )}
    >
      <div
        onClick={handleThemeSwitch}
        className={classNames(classes.container)}
      >
        <div className={classes.circle}>
          <div className={classes.cloud} />
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
