import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

import HomePage from "../components/component-pages/HomePage";
import AboutPage from "../components/component-pages/AboutPage";
import WorkPage from "../components/component-pages/WorkPage";
import classes from "./Home.module.css";

const Home = () => {
  const currentPage = useSelector((state) => state.hidden.currentPage);

  return (
    <div className={classNames(classes.container)}>
      <div className={classNames(classes.homeContainer)}>
        <HomePage />
      </div>
      <div className={classNames(classes.aboutContainer)}>
        <AboutPage currentPage={currentPage} />
      </div>
      <div className={classNames(classes.aboutContainer)}>
        <WorkPage />
      </div>
    </div>
  );
};

export default Home;
