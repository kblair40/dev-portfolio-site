import React from "react";
import Switch from "@material-ui/core/Switch";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";

import classes from "./ThemeSwitch.module.css";

const ThemeSwitch = ({ isDarkMode, handleThemeSwitch }) => {
  return (
    <div className={classes.container}>
      <WbSunnyIcon />
      <Switch onClick={handleThemeSwitch} checked={isDarkMode} />
      <NightsStayIcon />
    </div>
  );
};

export default ThemeSwitch;
