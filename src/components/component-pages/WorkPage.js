import React from "react";
import Slide from "@material-ui/core/Slide";
import { useSelector } from "react-redux";

import UpArrow from "../UI/Arrows/UpArrow";
import classes from "./WorkPage.module.css";

const WorkPage = () => {
  const workIsHidden = useSelector((state) => state.hidden.work);

  return (
    <div>
      <Slide
        mountOnEnter
        unmountOnExit
        in={!workIsHidden}
        timeout={1000}
        direction="up"
      >
        <div className={classes.container}>
          <h1>Work Page</h1>
          <UpArrow curPage="work" />
        </div>
      </Slide>
    </div>
  );
};

export default WorkPage;
