import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import { hiddenActions } from "../../../store/hiddenSlice";
import classes from "./UpArrow.module.css";

const UpArrow = ({ curPage }) => {
  const dispatch = useDispatch();
  const touchPoints = navigator.maxTouchPoints;
  console.log("touch points:", touchPoints);

  const hidePage = () => {
    if (curPage === "about") {
      dispatch(hiddenActions.hideAboutUnhideHome());
    } else if (curPage === "work") {
      dispatch(hiddenActions.hideWorkUnhideAbout());
    }
  };

  return (
    <div
      className={classNames(
        classes.container,
        touchPoints > 0 && classes.lowered
      )}
    >
      <div className={classes.arrowContainer}>
        <IconButton onClick={hidePage} className={classes.iconBtnRoot}>
          <ArrowUpwardIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default UpArrow;
