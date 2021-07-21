import React, { useRef, useEffect, useCallback, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import Div100vh from "react-div-100vh";

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

  const changePagesCallback = useCallback(
    (event, delta = null) => {
      console.log("WHEEL EVENT");
      console.log(event);
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

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      wrapperRef.current.addEventListener("wheel", changePagesCallback);

      return () => {
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
    // Prevent user from scrolling multiple pages ???
    // I think this is better...
    // Prevent user from scrolling page while hovering ProjectCards container
    e.stopPropagation();

    console.log("TOUCHED!");
    const touchEndY = e.changedTouches[0].clientY;

    changePagesCallback(e, touchEndY - touchStartY);
  };

  return (
    <PerfectScrollbar
      className={classes.scrollbar}
      options={{
        suppressScrollX: true,
        wheelPropagation: false,
      }}
      onTouchStart={handleTouchStart}
    >
      <Div100vh
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
        ref={wrapperRef}
        className={classes.wrapperContainer}
      >
        <div className={classes.navbar}>
          <Navbar />
        </div>
        {props.children}
      </Div100vh>
    </PerfectScrollbar>
  );
};

export default Wrapper;