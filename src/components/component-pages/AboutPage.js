import React from "react";
import { Element } from "react-scroll";

import AboutIcons from "../UI/AboutIcons/AboutIcons";
import AboutText from "../UI/AboutIcons/AboutText";
import DownArrow from "../UI/DownArrow/DownArrow";

import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <Element name="scrollToAbout">
      <div className={classes.container}>
        <AboutIcons />
        <AboutText />
        {/* <DownArrow to="scrollToWork" /> */}
      </div>
    </Element>
  );
};

export default AboutPage;
