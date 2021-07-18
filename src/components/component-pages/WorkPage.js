import React, { useEffect } from "react";
import Slide from "@material-ui/core/Slide";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector } from "react-redux";

import UpArrow from "../UI/Arrows/UpArrow";
import ProjectCards from "../UI/ProjectCards/ProjectCards";
import classes from "./WorkPage.module.css";

const WorkPage = ({ disableScrolling, enableScrolling }) => {
  const workIsHidden = useSelector((state) => state.hidden.work);
  // const mdScreen = useMediaQuery("(max-width: 890px)");
  // console.log("MEDIUM SCREEN:", mdScreen);

  const logMousePosition = (e) => {
    console.log("E:", e);
  };

  const logEnter = () => {
    console.log("ENTERED");
    document.addEventListener("mouseenter", logMousePosition);
    // enableScrolling();
  };

  return (
    <div>
      <Slide
        mountOnEnter
        unmountOnExit
        in={!workIsHidden}
        timeout={1000}
        direction="up"
        onEntered={enableScrolling}
        // onEntered={logEnter}
        onExit={disableScrolling}
      >
        <div className={classes.container} id="work-page-container">
          <h1 className={classes.header}>My Work</h1>
          <ProjectCards />
          <UpArrow curPage="work" />
        </div>
      </Slide>
    </div>
  );
};

export default WorkPage;
