import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Slide from "@material-ui/core/Slide";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";

import MePixelized from "../Avatar/MePixelized";
import HomeContent from "../Content/HomeContent";
import Wrapper from "../UI/Wrapper";
import classes from "./HomePage.module.css";

const HomePage = ({ disableScrolling, enableScrolling }) => {
  const [isLoading, setIsLoading] = useState(true);
  const homeIsHidden = useSelector((state) => state.hidden.home);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Slide
          mountOnEnter
          unmountOnExit
          in={!homeIsHidden}
          timeout={1000}
          direction="down"
          onEntered={enableScrolling}
          onExit={disableScrolling}
        >
          <div className={classNames(classes.container)}>
            <div className={classes.bgOverlay}>
              <div className={classes.slideDown}>
                <MePixelized />
              </div>
              <HomeContent />
            </div>
          </div>
        </Slide>
      )}
    </Wrapper>
  );
};

export default HomePage;
