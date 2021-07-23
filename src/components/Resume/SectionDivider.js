import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import classes from "./SectionDivider.module.css";

const SectionDivider = ({ topMargin }) => {
  const isDarkMode = useSelector((st) => st.theme.isDarkMode);
  return (
    // <Divider
    //   className={classNames(
    //     classes.divider,
    //     isDarkMode ? classes.dividerDark : classes.dividerLight
    //   )}
    //   style={{
    //     // backgroundColor: isDarkMode ? "#e1e1e1" : "#222222",
    //     marginTop: `${topMargin}`,
    //   }}
    // />
    <div
      className={classNames(
        classes.divider,
        isDarkMode ? classes.dividerDark : classes.dividerLight
      )}
      style={{
        // backgroundColor: isDarkMode ? "#e1e1e1" : "#222222",
        marginTop: `${topMargin}`,
      }}
    />
  );
};

export default SectionDivider;
