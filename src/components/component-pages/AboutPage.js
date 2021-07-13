import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Slide from "@material-ui/core/Slide";

import AboutIcons from "../UI/AboutIcons/AboutIcons";
import AboutText from "../UI/AboutIcons/AboutText";
import DownArrow from "../UI/DownArrow/DownArrow";
import { hiddenActions } from "../../store/hiddenSlice";

import classes from "./AboutPage.module.css";

const AboutPage = () => {
  const aboutIsHidden = useSelector((state) => state.hidden.about);
  const dispatch = useDispatch();

  const hideAbout = () => {
    dispatch(hiddenActions.hideAbout());
    dispatch(hiddenActions.unhideWork());
  };

  return (
    <div>
      <Slide
        in={!aboutIsHidden}
        timeout={1000}
        direction={aboutIsHidden ? "down" : "up"}
      >
        <div className={classes.container}>
          <AboutIcons />
          <AboutText />
          <DownArrow
            curPage="about"
            nextPage="work"
            prevPage="home"
            endAction={hideAbout}
          />
        </div>
      </Slide>
    </div>
  );
};

export default AboutPage;
