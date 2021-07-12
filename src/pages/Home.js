import React from "react";
import * as Scroll from "react-scroll";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import HomePage from "../components/component-pages/HomePage";
import AboutPage from "../components/component-pages/AboutPage";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.homeContainer}>
        <HomePage />
      </div>
      <div className={classes.aboutContainer}>
        <AboutPage />
      </div>
    </div>
  );
};

export default Home;
