import React, { useEffect, useCallback, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "../components/component-pages/HomePage";
import AboutPage from "../components/component-pages/AboutPage";
import WorkPage from "../components/component-pages/WorkPage";
import { hiddenActions } from "../store/hiddenSlice";
import classes from "./Home.module.css";
import DownArrow from "../components/UI/Arrows/DownArrow";

const Home = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.hidden.currentPage);
  const scrollingIsEnabled = useSelector(
    (state) => state.hidden.scrollingEnabled
  );
  const [touchStartY, setTouchStartY] = useState(undefined);

  const changePagesCallback = useCallback(
    (event, delta = null) => {
      if (!scrollingIsEnabled) {
        return;
      }

      if (
        currentPage === "work" &&
        !event.target.id === "work-page-container"
      ) {
        return;
      }

      let deltaY;
      if (delta) {
        deltaY = delta;
      } else {
        deltaY = event.wheelDeltaY;
      }

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
    const initY = e.touches[0].clientY;

    setTouchStartY(initY);
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;

    changePagesCallback(e, touchEndY - touchStartY);
  };

  const enableScrolling = () => {
    // uncomment settimeout for production
    // setTimeout(() => {
    dispatch(hiddenActions.enableScrolling());
    // }, 1000);
  };
  const disableScrolling = () => {
    dispatch(hiddenActions.disableScrolling());
  };

  useEffect(() => {
    window.addEventListener("wheel", changePagesCallback);

    return () => {
      window.removeEventListener("wheel", changePagesCallback);
    };
  }, [scrollingIsEnabled, changePagesCallback]);

  return (
    <div
      onTouchStart={(e) => handleTouchStart(e)}
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
      {currentPage !== "work" && <DownArrow />}
    </div>
  );
};

export default Home;
