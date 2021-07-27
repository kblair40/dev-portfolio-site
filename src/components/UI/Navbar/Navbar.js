import React from "react";

import MyName from "./MyName";
import MenuDial from "./MenuDial";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <MyName />
      <MenuDial />
    </div>
  );
};

export default Navbar;
