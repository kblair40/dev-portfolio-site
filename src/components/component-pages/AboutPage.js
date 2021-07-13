import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Slide from "@material-ui/core/Slide";

import AboutIcons from "../UI/AboutIcons/AboutIcons";
import AboutText from "../UI/AboutIcons/AboutText";
import DownArrow from "../UI/Arrows/DownArrow";
import UpArrow from "../UI/Arrows/UpArrow";
import { hiddenActions } from "../../store/hiddenSlice";

import classes from "./AboutPage.module.css";

const AboutPage = ({ aboutIsAbove, currentPage }) => {
  const dispatch = useDispatch();
  const aboutIsHidden = useSelector((state) => state.hidden.about);
  const slideDirection = useSelector(
    (state) => state.hidden.aboutSlideDirection
  );

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
