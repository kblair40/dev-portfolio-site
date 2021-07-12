import React from "react";
import Slide from "@material-ui/core/Slide";

import Avatar from "../Avatar/Head";
import HomeContent from "../Content/HomeContent";
import MenuDial from "../UI/SpeedDial/MenuDial";
import DownArrow from "../UI/DownArrow/DownArrow";

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Slide in={true} appear={true} direction="down" timeout={600}>
      <div className={classes.homeContainer}>
        <div className={classes.bgOverlay}>
          <div className={classes.myName}>Kevin Blair</div>
          <Avatar />
          <HomeContent />
          <MenuDial />
          <DownArrow />
        </div>
      </div>
    </Slide>
  );
};

export default HomePage;
