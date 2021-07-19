import React from "react";
import classes from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <div className={classes.container}>
      <p className={classes.textSection}>Hi, my name is Kevin.</p>
      <p className={classes.textSection}>I'm a developer based in Chicago.</p>
    </div>
  );
};

export default HomeContent;
