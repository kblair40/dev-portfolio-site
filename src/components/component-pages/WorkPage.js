import React, { useEffect } from "react";
import Slide from "@material-ui/core/Slide";
import { useSelector, useDispatch } from "react-redux";

import UpArrow from "../UI/UpArrow/UpArrow";
import { hiddenActions } from "../../store/hiddenSlice";
import classes from "./WorkPage.module.css";

const WorkPage = () => {
  const dispatch = useDispatch();
  const workIsHidden = useSelector((state) => state.hidden.work);
  const slideDirection = useSelector(
    (state) => state.hidden.workSlideDirection
  );

  // useEffect(() => {
  //   console.log("Work Effect Running");
  //   dispatch(hiddenActions.setAboutDirection({ direction: "down" }));
  //   dispatch(hiddenActions.setWorkDirection({ direction: "up" }));
  // }, []);

  return (
    <div
    // className={workIsHidden && classes.hidden}
    >
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
