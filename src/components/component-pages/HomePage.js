import React from "react";
import classNames from "classnames";
import Slide from "@material-ui/core/Slide";
import { useSelector } from "react-redux";

import MePixelized from "../Avatar/MePixelized";
import HomeContent from "../Content/HomeContent";
import Wrapper from "../UI/Wrapper";
import classes from "./HomePage.module.css";

const HomePage = ({ disableScrolling, enableScrolling }) => {
  const homeIsHidden = useSelector((state) => state.hidden.home);
  const slideDirection = useSelector(
    (state) => state.hidden.homeSlideDirection
  );

  return (
    <Wrapper>
      <Slide
        mountOnEnter
        unmountOnExit
        in={!homeIsHidden}
        timeout={1000}
        direction={slideDirection}
        onEntered={enableScrolling}
        onExit={disableScrolling}
      >
        <div className={classNames(classes.container)}>
          <div className={classes.bgOverlay}>
            <MePixelized />
            <HomeContent />
          </div>
        </div>
      </Slide>
    </Wrapper>
  );
};

export default HomePage;
