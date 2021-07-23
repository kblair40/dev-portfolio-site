import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import classes from "./SectionDivider.module.css";

const SectionDivider = ({ topMargin }) => {
  const isDarkMode = useSelector((st) => st.theme.isDarkMode);
  return (
    <div
      className={classNames(
        classes.divider,
        isDarkMode ? classes.dividerDark : classes.dividerLight
      )}
      style={{
        marginTop: `${topMargin}`,
      }}
    />
  );
};

export default SectionDivider;
