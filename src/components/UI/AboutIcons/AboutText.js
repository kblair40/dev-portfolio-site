import React from "react";

import classes from "./AboutText.module.css";

const AboutText = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.column}>
          <h3 className={classes.shortAbout}>
            Hi, I'm Kevin. Nice to meet you. Please have a look around!
          </h3>
        </div>
        <div className={classes.spacer} />
        <div className={classes.column}>
          <p className={classes.longAbout}>
            I'm a technophile and web developer based in Chicago specializing in
            highly efficient React apps and CSS/HTML that works on all platforms
            and browsers. &nbsp;I generally prefer Jamstack solutions but love
            an excuse to work with NodeJS (Express) and databases such as
            MongoDB and Firebase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
