import React from "react";
import Slide from "@material-ui/core/Slide";

import Avatar from "../components/Avatar/Head";
import HomeContent from "../components/Content/HomeContent";
import MenuDial from "../components/UI/SpeedDial/MenuDial";
import DownArrow from "../components/UI/DownArrow/DownArrow";

import classes from "./Home.module.css";

const Home = () => {
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

export default Home;
