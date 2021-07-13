import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import classNames from "classnames";
import { useDispatch } from "react-redux";

import { hiddenActions } from "../../../store/hiddenSlice";
import classes from "./DownArrow.module.css";

const DownArrow = ({ curPage }) => {
  const dispatch = useDispatch();

  const hidePage = () => {
    if (curPage === "home") {
      dispatch(hiddenActions.hideHome());
      dispatch(hiddenActions.unhideAbout());
    } else if (curPage === "about") {
      dispatch(hiddenActions.hideAbout());
      dispatch(hiddenActions.unhideWork());
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer}>
        <IconButton onClick={hidePage} className={classes.iconBtnRoot}>
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default DownArrow;
