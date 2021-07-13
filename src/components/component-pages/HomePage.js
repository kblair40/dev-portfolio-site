import React, { useState } from "react";
import Slide from "@material-ui/core/Slide";
import classNames from "classnames";

import Avatar from "../Avatar/Head";
import HomeContent from "../Content/HomeContent";
import DownArrow from "../UI/DownArrow/DownArrow";

import classes from "./HomePage.module.css";

const HomePage = () => {
  const [isHidden, setIsHidden] = useState(false);
  const hidePage = () => {
    setTimeout(() => {
      setIsHidden(true);
    }, 1600); // 1550 to match 50 ms delay and 1500 ms scroll time
  };

  return (
    <Slide in={true} appear={true} direction="down" timeout={600}>
      <div
        className={classNames(
          classes.homeContainer,
          isHidden && classes.hidden
        )}
      >
        <div className={classes.bgOverlay}>
          <Avatar />
          <HomeContent />
          <DownArrow to="scrollToAbout" handleClick={hidePage} />
        </div>
      </div>
    </Slide>
  );
};

export default HomePage;
