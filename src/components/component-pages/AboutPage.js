import React from "react";
import { Element } from "react-scroll";

import AboutIcons from "../UI/AboutIcons/AboutIcons";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <Element name="scrollToAbout">
      <div className={classes.container}>
        <div>ffdgdfgfds</div>
        <div>hgdsf</div>
        <div>jhgjdg</div>
        <AboutIcons />
      </div>
    </Element>
  );
};

export default AboutPage;
