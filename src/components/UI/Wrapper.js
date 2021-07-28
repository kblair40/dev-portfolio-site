import React, { useRef, useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./Navbar/Navbar";
import { hiddenActions } from "../../store/hiddenSlice";
import classes from "./Wrapper.module.css";

const Wrapper = (props) => {
  const wrapperRef = useRef();
  const scrollingIsEnabled = useSelector(
    (state) => state.hidden.scrollingEnabled
  );
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.hidden.currentPage);
  const [touchStartY, setTouchStartY] = useState(undefined);
  const [scrollSuppressed, setScrollSuppressed] = useState(true);

  const changePagesCallback = useCallback(
    (event, delta = null) => {
      if (!scrollingIsEnabled) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();

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
          // make sure the user swiped and didn't just touch the screen...
          //   If user just taps the screen, deltaY will be undefined (falsy).
          //   Do nothing if that is the case.
        } else if (deltaY) {
          dispatch(hiddenActions.setAboutDirection({ direction: "down" }));
          dispatch(hiddenActions.hideAboutUnhideWork());
        }
      } else if (currentPage === "work") {
        if (deltaY > 0) {
          const tgt = event.target;

          if (
            tgt.id === "work-page-container" ||
            tgt.parentElement.id === "project-card" ||
            tgt.parentElement.id === "project-card-nav" ||
            tgt.id === "safari-nav-btns"
          ) {
            return;
          }

          dispatch(hiddenActions.hideWorkUnhideAbout());
        }
      }
    },
    [currentPage, dispatch, scrollingIsEnabled]
  );

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      wrapperRef.current.addEventListener("wheel", changePagesCallback);

      setTimeout(() => {
        setScrollSuppressed(false);
      }, 500);

      return () => {
        wrapperRef &&
          wrapperRef.current &&
          wrapperRef.current.removeEventListener("wheel", changePagesCallback);
      };
    }
  }, [scrollingIsEnabled, changePagesCallback]);

  const handleTouchStart = (e) => {
    // Prevent user scrolling on cards from changing the page
    e.stopPropagation();

    const initY = e.touches[0].clientY;
    setTouchStartY(initY);
  };

  const handleTouchEnd = (e) => {
    if (
      e.target.parentElement.id === "close-btn" ||
      e.target.id === "close-btn" ||
      e.target.tagName === "path"
    ) {
      return;
    }
    const touchEndY = e.changedTouches[0].clientY;

    changePagesCallback(e, touchEndY - touchStartY);
  };

  return (
    <div
      ref={wrapperRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={(e) => handleTouchEnd(e)}
      className={classes.wrapper}
    >
      <div className={classes.navbar}>
        <Navbar />
      </div>
      {props.children}
    </div>
  );
};

export default Wrapper;
