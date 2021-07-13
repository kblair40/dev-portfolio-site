import React, { useState } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import HomePage from "../components/component-pages/HomePage";
import AboutPage from "../components/component-pages/AboutPage";
import classes from "./Home.module.css";

const Home = () => {
  // const homeIsHidden = useSelector((state) => state.hidden.home);
  // const aboutIsHidden = useSelector((state) => state.hidden.about);

  const [homeIsHidden, setHomeIsHidden] = useState(false);
  const [aboutIsHidden, setAboutIsHidden] = useState(true);

  const hideHomePage = () => {
    setHomeIsHidden(true);
    setAboutIsHidden(false);
  };

  const unhideAboutPage = () => {
    setAboutIsHidden(false);
  };

  const hideAboutPage = () => {
    setAboutIsHidden(true);
  };

  return (
    <div className={classNames(classes.container)}>
      <div
        className={classNames(
          classes.homeContainer,
          !homeIsHidden && classes.slideInBottomToTop,
          homeIsHidden && classes.slideOutBottomToTop
        )}
      >
        <HomePage hidePage={hideHomePage} />
      </div>
      <div
        className={classNames(
          classes.aboutContainer,
          aboutIsHidden && classes.offPageBottom,
          aboutIsHidden && classes.hidden,
          !aboutIsHidden && classes.slideInBottomToTop
          // aboutIsHidden && classes.hidden
        )}
      >
        <AboutPage />
      </div>
    </div>
  );
};

export default Home;
