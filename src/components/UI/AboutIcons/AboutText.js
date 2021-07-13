import React from "react";

import classes from "./AboutText.module.css";

const AboutText = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.column}>
          <p className={classes.shortAbout}>
            Hi, I'm Kevin. &nbsp;Nice to meet you. &nbsp; Please have a look
            around.
          </p>
        </div>
        <div className={classes.spacer} />
        <div className={classes.column}>
          <p className={classes.longAbout}>
            Esse cupidatat aute aliqua do nisi aliqua eiusmod incididunt cillum
            pariatur qui dolor irure proident. Veniam nulla pariatur in esse ad
            cillum ipsum consectetur nisi esse non. Aliquip excepteur incididunt
            fugiat ad officia veniam officia anim tempor ipsum sunt proident
            fugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
