import React, { useEffect, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import { hoverLocationActions } from "../../store/hoverLocationSlice";
import classes from "./ResumeContainer.module.css";

const ResumeContainer = ({ children, isDarkMode }) => {
  const dispatch = useDispatch();
  const containerRef = useRef();

  const handleMouseEnter = (e) => {
    console.log("MOUSE ENTERED");
    dispatch(hoverLocationActions.setMutingIsActive({ resumeIsHovered: true }));
  };

  const handleMouseLeave = (e) => {
    console.log("MOUSE LEFT");
    dispatch(
      hoverLocationActions.setMutingIsActive({ resumeIsHovered: false })
    );
  };

  useEffect(() => {
    if (containerRef && containerRef.current) {
      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }
  }, []);
  return (
    <div className={classes.resumeContainer}>
      <Paper
        elevation={5}
        classes={{
          root: classNames(
            classes.paperRoot,
            isDarkMode ? classes.paperDark : classes.paperLight
          ),
        }}
        ref={containerRef}
      >
        {children}
      </Paper>
    </div>
  );
};

export default ResumeContainer;
