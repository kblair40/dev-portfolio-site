import React from "react";
import classNames from "classnames";

import HomePage from "../components/component-pages/HomePage";
import AboutPage from "../components/component-pages/AboutPage";
import WorkPage from "../components/component-pages/WorkPage";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classNames(classes.container)}>
      <div className={classNames(classes.pageContainer)}>
        <HomePage />
      </div>
      <div className={classNames(classes.pageContainer)}>
        <AboutPage />
      </div>
      <div className={classNames(classes.pageContainer)}>
        <WorkPage />
      </div>
    </div>
  );
};

export default Home;
