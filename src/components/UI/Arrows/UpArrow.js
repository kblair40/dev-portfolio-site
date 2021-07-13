import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useDispatch } from "react-redux";

import { hiddenActions } from "../../../store/hiddenSlice";
import classes from "./UpArrow.module.css";

const UpArrow = ({ curPage }) => {
  const dispatch = useDispatch();

  const hidePage = () => {
    if (curPage === "about") {
      dispatch(hiddenActions.hideAbout());
      dispatch(hiddenActions.unhideHome());
    } else if (curPage === "work") {
      dispatch(hiddenActions.hideWork());
      dispatch(hiddenActions.unhideAbout());
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer}>
        <IconButton onClick={hidePage} className={classes.iconBtnRoot}>
          <ArrowUpwardIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default UpArrow;
