import React from "react";
import { Element } from "react-scroll";

import classes from "./MyWorkPage.module.css";

const MyWorkPage = () => {
  return (
    <Element name="scrollToWork">
      <div className={classes.container}></div>
    </Element>
  );
};

export default MyWorkPage;
