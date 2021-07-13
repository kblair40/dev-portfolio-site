import React from "react";
import { Element } from "react-scroll";
import Hidden from "@material-ui/core/Hidden";
import Slide from "@material-ui/core/Slide";
import { useSelector, useDispatch } from "react-redux";

import DownArrow from "../UI/DownArrow/DownArrow";
import classes from "./WorkPage.module.css";

const WorkPage = () => {
  const workIsHidden = useSelector((state) => state.hidden.work);

  return (
    <div
    // className={workIsHidden && classes.hidden}
    >
      <Slide in={!workIsHidden} timeout={1000} direction="up">
        <Element name="scrollToWork">
          <div className={classes.container}>
            <h1>Work Page</h1>
          </div>
          {/* <DownArrow curPage="work" prevPage="about" nextPage={null} /> */}
        </Element>
      </Slide>
    </div>
  );
};

export default WorkPage;
