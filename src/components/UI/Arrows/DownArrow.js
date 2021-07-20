import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { use100vh } from "react-div-100vh";

import { hiddenActions } from "../../../store/hiddenSlice";
import classes from "./DownArrow.module.css";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    width: "100vw",
    height: "10vh",
    bottom: "1rem",
    display: "flex",
    justifyContent: "center",
  },
});

const DownArrow = () => {
  const height = use100vh();
  console.log("HEIGHT:", height);
  const styles = useStyles();
  const curPage = useSelector((state) => state.hidden.currentPage);
  const dispatch = useDispatch();
  const touchPoints = navigator.maxTouchPoints;
  console.log("touch points:", touchPoints);

  const hidePage = () => {
    if (curPage === "home") {
      dispatch(hiddenActions.hideHomeUnhideAbout());
    } else if (curPage === "about") {
      dispatch(hiddenActions.hideAboutUnhideWork());
    }
  };

  return (
    <div
      className={classNames(
        styles.container
        // touchPoints > 0 && classes.raised
      )}
    >
      <div className={classes.arrowContainer}>
        {curPage === "home" && (
          <p className={classes.subtext}>Scroll to learn more</p>
        )}
        {curPage === "about" && (
          <p className={classes.subtext}>Scroll to see my work</p>
        )}
        <IconButton onClick={hidePage} className={classes.iconBtnRoot}>
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default DownArrow;
