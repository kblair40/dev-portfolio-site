import React, { useEffect, useRef } from "react";
import Slide from "@material-ui/core/Slide";
import { scroller } from "react-scroll";

import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "../Avatar/Head";
import HomeContent from "../Content/HomeContent";
import DownArrow from "../UI/DownArrow/DownArrow";

import classes from "./HomePage.module.css";
import { hiddenActions } from "../../store/hiddenSlice";

const HomePage = ({ hidePage }) => {
  const dispatch = useDispatch();
  // const homeIsHidden = useSelector((state) => state.hidden.home);
  // const aboutIsHidden = useSelector((state) => state.hidden.about);

  // const firstUpdate = useRef(true);
  // useEffect(() => {
  //   if (firstUpdate.current) {
  //     firstUpdate.current = false;
  //     return;
  //   }
  //   setTimeout(() => {
  //     console.log("dispatching");
  //     dispatch(hiddenActions.hideHome());
  //   }, 1600); // 1550 to match 50 ms delay and 1500 ms scroll time
  //   scroller.scrollTo("aboutPageElement", {
  //     duration: 1500,
  //     delay: 50,
  //     smooth: true,
  //   });
  // }, [aboutIsHidden]);

  return (
    // <Slide in={true} appear={true} direction="down" timeout={600}>
    <div className={classNames(classes.homeContainer)}>
      <div className={classes.bgOverlay}>
        <Avatar />
        <HomeContent />
        <DownArrow to="aboutPageElement" hidePage={hidePage} />
        {/* <DownArrow to="aboutPageElement" pageToUnhide="about" /> */}
        {/* <DownArrow to="aboutPageElement" handleClick={hidePage} /> */}
      </div>
    </div>
    // </Slide>
  );
};

export default HomePage;
