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
            I'm a technophile and web developer in and from Chicago specializing
            in highly efficient React apps and CSS/HTML that works on all
            platforms and browsers. &nbsp;I generally prefer Jamstack solutions
            but love having an excuse to dabble in NodeJS (Express) and
            databases such as MongoDB and Firebase as needed.
          </p>
          {/* <p className={classes.longAbout}>
            Esse cupidatat aute aliqua do nisi aliqua eiusmod incididunt cillum
            pariatur qui dolor irure proident. Veniam nulla pariatur in esse ad
            cillum ipsum consectetur nisi esse non. Aliquip excepteur incididunt
            fugiat ad officia veniam officia anim tempor ipsum sunt proident
            fugiat.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutText;
