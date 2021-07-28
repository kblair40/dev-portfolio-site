import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "../components/component-pages/HomePage";
import AboutPage from "../components/component-pages/AboutPage";
import WorkPage from "../components/component-pages/WorkPage";
import { hiddenActions } from "../store/hiddenSlice";
import classes from "./Home.module.css";
import DownArrow from "../components/UI/Arrows/DownArrow";
import UpArrow from "../components/UI/Arrows/UpArrow";

const Home = () => {
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.hidden.currentPage);
  const homeIsHidden = useSelector((state) => state.hidden.home);
  const aboutIsHidden = useSelector((state) => state.hidden.about);

  const [homeIsShowing, setHomeIsShowing] = useState(!homeIsHidden);
  const [aboutIsShowing, setAboutIsShowing] = useState(!aboutIsHidden);

  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (curPage === "home") {
      setHomeIsShowing(true);
      setTimeout(() => {
        setAboutIsShowing(false);
      }, 1000); // Slide Animation time = 1000ms / 1s
    } else if (curPage === "about") {
      setAboutIsShowing(true);
      setTimeout(() => {
        setHomeIsShowing(false);
      }, 1000);
    }
  }, [curPage]);

  const enableScrolling = () => {
    setTimeout(() => {
      dispatch(hiddenActions.enableScrolling());
      // The delay felt too long at 1000ms (matching animation time);
    }, 500);
  };
  const disableScrolling = () => {
    dispatch(hiddenActions.disableScrolling());
  };

  return (
    <div className={classNames(classes.container)}>
      <div className={classNames(classes.pageContainer)}>
        <HomePage
          enableScrolling={enableScrolling}
          disableScrolling={disableScrolling}
        />
      </div>
      <div className={classNames(classes.pageContainer)}>
        <AboutPage
          enableScrolling={enableScrolling}
          disableScrolling={disableScrolling}
        />
      </div>
      <div className={classNames(classes.pageContainer)}>
        <WorkPage
          enableScrolling={enableScrolling}
          disableScrolling={disableScrolling}
        />
      </div>

      {curPage !== "work" && <DownArrow />}
      {curPage !== "home" && <UpArrow />}
    </div>
  );
};

export default Home;
