import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import classes from "./ThemeSwitch.module.css";
import { themeActions } from "../../store/themeSlice";

const ThemeSwitch = ({ isDarkMode, handleThemeSwitch }) => {
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(themeActions.toggleTheme());
  };
  return (
    <div
      className={classNames(
        classes.outerContainer,
        !isDarkMode && classes.light
      )}
    >
      <div onClick={toggleTheme} className={classNames(classes.container)}>
        <div className={classes.circle}>
          <div className={classes.cloud} />
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;
