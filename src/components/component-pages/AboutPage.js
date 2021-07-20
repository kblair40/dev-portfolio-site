import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slide from "@material-ui/core/Slide";

import AboutIcons from "../UI/AboutIcons/AboutIcons";
import AboutText from "../UI/AboutIcons/AboutText";
import UpArrow from "../UI/Arrows/UpArrow";
import { hiddenActions } from "../../store/hiddenSlice";

import classes from "./AboutPage.module.css";

const AboutPage = ({ disableScrolling, enableScrolling }) => {
  const dispatch = useDispatch();
  const aboutIsHidden = useSelector((state) => state.hidden.about);
  const slideDirection = useSelector(
    (state) => state.hidden.aboutSlideDirection
  );
  const [screenHeight, setScreenHeight] = useState("100vh");

  const handleResize = () => {
    let windowHeight = window.innerHeight;
    console.log("windowHeight:", windowHeight, typeof windowHeight);
    setScreenHeight(`${windowHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const setDirectionDown = () => {
    dispatch(hiddenActions.setAboutDirection({ direction: "down" }));
  };
  const setDirectionUp = () => {
    dispatch(hiddenActions.setAboutDirection({ direction: "up" }));
  };

  const styles = { height: screenHeight };

  return (
    <div>
      <Slide
        mountOnEnter
        unmountOnExit
        in={!aboutIsHidden}
        timeout={1000}
        direction={slideDirection}
        onEntered={enableScrolling}
        onExit={disableScrolling}
      >
        <div className={classes.container} style={styles}>
          <AboutIcons />
          <AboutText />
          <div onClick={setDirectionUp}>
            <UpArrow curPage="about" />
          </div>
          <div onClick={setDirectionDown}></div>
        </div>
      </Slide>
    </div>
  );
};

export default AboutPage;
