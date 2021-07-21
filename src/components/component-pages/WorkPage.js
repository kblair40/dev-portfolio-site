import React from "react";
import Slide from "@material-ui/core/Slide";
import { useSelector } from "react-redux";

import Wrapper from "../UI/Wrapper";
import ProjectCards from "../UI/ProjectCards/ProjectCards";
import classes from "./WorkPage.module.css";

const WorkPage = ({ disableScrolling, enableScrolling }) => {
  const workIsHidden = useSelector((state) => state.hidden.work);

  return (
    <Wrapper>
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
          <h1 className={classes.header}>My Work</h1>
          <ProjectCards />
        </div>
      </Slide>
    </Wrapper>
  );
};

export default WorkPage;
