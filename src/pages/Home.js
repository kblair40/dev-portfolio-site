import React, { useEffect, useCallback } from "react";
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
  const scrollingIsEnabled = useSelector(
    (state) => state.hidden.scrollingEnabled
  );

  const changePagesCallback = useCallback(
    (event) => {
      if (!scrollingIsEnabled) {
        return;
      }
      const deltaY = event.wheelDeltaY;

      if (currentPage === "home") {
        if (deltaY < 0) {
          dispatch(hiddenActions.hideHomeUnhideAbout());
        }
      } else if (currentPage === "about") {
        if (deltaY > 0) {
          dispatch(hiddenActions.hideAboutUnhideHome());
          dispatch(hiddenActions.setAboutDirection({ direction: "up" }));
        } else {
          dispatch(hiddenActions.setAboutDirection({ direction: "down" }));
          dispatch(hiddenActions.hideAboutUnhideWork());
        }
      } else {
        if (deltaY > 0) {
          dispatch(hiddenActions.hideWorkUnhideAbout());
        }
      }
    },
    [currentPage, dispatch, scrollingIsEnabled]
  );

  // const changePages = (event) => {
  //   if (!scrollingIsEnabled) {
  //     return;
  //   }
  //   const deltaY = event.wheelDeltaY;

  //   if (currentPage === "home") {
  //     if (deltaY < 0) {
  //       dispatch(hiddenActions.hideHomeUnhideAbout());
  //     }
  //   } else if (currentPage === "about") {
  //     if (deltaY > 0) {
  //       dispatch(hiddenActions.hideAboutUnhideHome());
  //       dispatch(hiddenActions.setAboutDirection({ direction: "up" }));
  //     } else {
  //       dispatch(hiddenActions.setAboutDirection({ direction: "down" }));
  //       dispatch(hiddenActions.hideAboutUnhideWork());
  //     }
  //   } else {
  //     if (deltaY > 0) {
  //       dispatch(hiddenActions.hideWorkUnhideAbout());
  //     }
  //   }
  // };
  useEffect(() => {
    window.addEventListener("wheel", changePagesCallback);
    return () => window.removeEventListener("wheel", changePagesCallback);
  }, [scrollingIsEnabled, changePagesCallback]);

  // const changePages = (event) => {
  //   if (!scrollingIsEnabled) {
  //     return;
  //   }
  //   const deltaY = event.wheelDeltaY;

  //   if (currentPage === "home") {
  //     if (deltaY < 0) {
  //       dispatch(hiddenActions.hideHomeUnhideAbout());
  //     }
  //   } else if (currentPage === "about") {
  //     if (deltaY > 0) {
  //       dispatch(hiddenActions.hideAboutUnhideHome());
  //       dispatch(hiddenActions.setAboutDirection({ direction: "up" }));
  //     } else {
  //       dispatch(hiddenActions.setAboutDirection({ direction: "down" }));
  //       dispatch(hiddenActions.hideAboutUnhideWork());
  //     }
  //   } else {
  //     if (deltaY > 0) {
  //       dispatch(hiddenActions.hideWorkUnhideAbout());
  //     }
  //   }
  // };

  const enableScrolling = () => {
    dispatch(hiddenActions.enableScrolling());
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
    </div>
  );
};

export default Home;
