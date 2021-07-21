import React from "react";
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
  const currentPage = useSelector((state) => state.hidden.currentPage);

  const enableScrolling = () => {
    // uncomment settimeout for production
    setTimeout(() => {
      dispatch(hiddenActions.enableScrolling());
    }, 1000);
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
      {currentPage !== "work" && <DownArrow />}
      {currentPage !== "home" && <UpArrow />}
    </div>
  );
};

export default Home;
