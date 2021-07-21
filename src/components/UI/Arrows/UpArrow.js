import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { hiddenActions } from "../../../store/hiddenSlice";
import classes from "./UpArrow.module.css";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    width: "100vw",
    height: "10vh",
    top: "1rem",
    display: "flex",
    justifyContent: "center",
  },
});

const UpArrow = () => {
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.hidden.currentPage);
  const styles = useStyles();

  const setDirectionUp = async () => {
    if (curPage === "about") {
      await dispatch(hiddenActions.setAboutDirection({ direction: "up" }));
    }
    hidePage();
  };

  const hidePage = () => {
    if (curPage === "about") {
      dispatch(hiddenActions.hideAboutUnhideHome());
    } else if (curPage === "work") {
      dispatch(hiddenActions.hideWorkUnhideAbout());
    }
  };

  return (
    <div className={classNames(styles.container)}>
      <div className={classes.arrowContainer}>
        <IconButton onClick={setDirectionUp} className={classes.iconBtnRoot}>
          <ArrowUpwardIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default UpArrow;
