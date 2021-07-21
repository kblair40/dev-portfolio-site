import React from "react";
import { useSelector } from "react-redux";
import Slide from "@material-ui/core/Slide";

import Wrapper from "../UI/Wrapper";
import AboutIcons from "../UI/AboutIcons/AboutIcons";
import AboutText from "../UI/AboutIcons/AboutText";

import classes from "./AboutPage.module.css";

const AboutPage = ({ disableScrolling, enableScrolling }) => {
  const aboutIsHidden = useSelector((state) => state.hidden.about);
  const slideDirection = useSelector(
    (state) => state.hidden.aboutSlideDirection
  );

  return (
    <Wrapper>
      <Slide
        mountOnEnter
        unmountOnExit
        in={!aboutIsHidden}
        timeout={1000}
        direction={slideDirection}
        onEntered={enableScrolling}
        onExit={disableScrolling}
      >
        <div className={classes.container}>
          <AboutIcons />
          <AboutText />
        </div>
      </Slide>
    </Wrapper>
  );
};

export default AboutPage;
