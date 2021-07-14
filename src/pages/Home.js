import React, { useEffect } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "../components/component-pages/HomePage";
import AboutPage from "../components/component-pages/AboutPage";
import WorkPage from "../components/component-pages/WorkPage";
import { hiddenActions } from "../store/hiddenSlice";
import classes from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.hidden.currentPage);
  console.log("CURRENT PAGE NOT IN FUNCTION:", currentPage);
  // all useEffect code is new
  useEffect(() => {
    console.log("use-effect running");
    document.addEventListener("wheel", changePages);

    return () => document.removeEventListener("wheel", changePages);
    // return document.removeEventListener("wheel", hidePage);
  }, [currentPage]);

  const changePages = (event) => {
    const deltaY = event.wheelDeltaY;
    console.log("DELTA Y:", deltaY, typeof deltaY);
    console.log("CURRENT PAGE:", currentPage);

    if (currentPage === "home") {
      // Scrolling Down
      if (deltaY < 0) {
        dispatch(hiddenActions.hideHomeUnhideAbout());
      }
    } else if (currentPage === "about") {
      // Scrolling Up
      if (deltaY > 0) {
        dispatch(hiddenActions.hideAboutUnhideHome());
        dispatch(hiddenActions.setAboutDirection({ direction: "up" }));
      } else {
        // Scrolling Down
        dispatch(hiddenActions.setAboutDirection({ direction: "down" }));
        dispatch(hiddenActions.hideAboutUnhideWork());
      }
    } else {
      // Scrolling Up
      if (deltaY > 0) {
        dispatch(hiddenActions.hideWorkUnhideAbout());
      }
    }
  };

  // const setDirectionDown = () => {
  //   dispatch(hiddenActions.setAboutDirection({ direction: "down" }));
  // };
  // const setDirectionUp = () => {
  //   dispatch(hiddenActions.setAboutDirection({ direction: "up" }));
  // };

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
