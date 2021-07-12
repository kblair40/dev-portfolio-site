import React from "react";
import { Element } from "react-scroll";

import AboutIcons from "../UI/AboutIcons/AboutIcons";
import AboutText from "../UI/AboutIcons/AboutText";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <Element name="scrollToAbout">
      <div className={classes.container}>
        <AboutIcons />
        <AboutText />
      </div>
    </Element>
  );
};

export default AboutPage;
