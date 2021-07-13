import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slide from "@material-ui/core/Slide";

import AboutIcons from "../UI/AboutIcons/AboutIcons";
import AboutText from "../UI/AboutIcons/AboutText";
import DownArrow from "../UI/DownArrow/DownArrow";
import UpArrow from "../UI/UpArrow/UpArrow";
import { hiddenActions } from "../../store/hiddenSlice";

import classes from "./AboutPage.module.css";

const AboutPage = ({ aboutIsAbove, currentPage }) => {
  const aboutIsHidden = useSelector((state) => state.hidden.about);
  console.log("about IS HIDDEN:", aboutIsHidden);
  const slideDirection = useSelector(
    (state) => state.hidden.aboutSlideDirection
  );
  const dispatch = useDispatch();

  console.log("ABOUT SLIDE DIRECTION:", slideDirection);

  const setDirectionDown = () => {
    dispatch(hiddenActions.setAboutDirection({ direction: "down" }));
  };
  const setDirectionUp = () => {
    dispatch(hiddenActions.setAboutDirection({ direction: "up" }));
  };

  return (
    <div>
      <Slide
        mountOnEnter
        unmountOnExit
        in={!aboutIsHidden}
        timeout={1000}
        direction={slideDirection}
      >
        <div className={classes.container}>
          <AboutIcons />
          <AboutText />
          <div onClick={setDirectionUp}>
            <UpArrow curPage="about" />
          </div>
          <div onClick={setDirectionDown}>
            <DownArrow curPage="about" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default AboutPage;
