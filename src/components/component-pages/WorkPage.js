import React from "react";
import Slide from "@material-ui/core/Slide";
import { useSelector } from "react-redux";

import UpArrow from "../UI/Arrows/UpArrow";
import ProjectCards from "../UI/ProjectCards/ProjectCards";
import classes from "./WorkPage.module.css";

const WorkPage = ({ disableScrolling, enableScrolling }) => {
  const workIsHidden = useSelector((state) => state.hidden.work);

  return (
    <div>
      <Slide
        mountOnEnter
        unmountOnExit
        in={!workIsHidden}
        timeout={1000}
        direction="up"
        onEntered={enableScrolling}
        onExit={disableScrolling}
      >
        <div className={classes.container}>
          <ProjectCards />
          <UpArrow curPage="work" />
        </div>
      </Slide>
    </div>
  );
};

export default WorkPage;
