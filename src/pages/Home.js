import React, { useEffect, useCallback, useState } from "react";
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
  const [touchStartY, setTouchStartY] = useState(undefined);

  const changePagesCallback = useCallback(
    (event) => {
      console.log("SCROLL OR WHEEL EVENT!");
      console.log(event, "\n\n\n");
      if (!scrollingIsEnabled) {
        return;
      }
      console.log("current page:", currentPage);
      if (
        currentPage === "work" &&
        !event.target.id === "work-page-container"
      ) {
        return;
      }
      const deltaY = event.wheelDeltaY;
      // console.log("target id:", event.target.id);
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

  const handleTouchStart = (e) => {
    // const initX = e.touches[0].clientX;
    const initY = e.touches[0].clientY;
    // console.log("initX:", initX);
    console.log("initY", initY);
    setTouchStartY(initY);
  };

  const handleTouchMove = (e) => {
    // const moveX = e.touches[0].clientX;
    const moveY = e.touches[0].clientY;
    // console.log("moveX:", moveX);
    console.log("moveY", moveY);
  };

  const handleTouchEnd = (e) => {
    console.log("end event:", e);
    // const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    // console.log("endX:", endX);
    console.log("\n\n\nstartY:", touchStartY);
    console.log("endY", endY);
  };

  useEffect(() => {
    window.addEventListener("wheel", changePagesCallback);
    // window.addEventListener("touchstart", startTouch);
    // window.addEventListener("touchmove", changePagesCallback);
    return () => {
      window.removeEventListener("wheel", changePagesCallback);
      // window.removeEventListener("touchmove", changePagesCallback);
    };
  }, [scrollingIsEnabled, changePagesCallback]);

  const enableScrolling = () => {
    // uncomment settimeout for production

    // setTimeout(() => {
    dispatch(hiddenActions.enableScrolling());
    // }, 1000);
  };
  const disableScrolling = () => {
    dispatch(hiddenActions.disableScrolling());
  };

  return (
    <div
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
      className={classNames(classes.container)}
    >
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
