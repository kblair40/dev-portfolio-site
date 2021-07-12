import React from "react";

import classes from "./AboutText.module.css";

const AboutText = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div className={classes.column}>
          <p className={classes.shortAbout}>
            Hi, I am Kevin. Nice to meet you. Please have a look around.
          </p>
        </div>
        <div className={classes.spacer} />
        <div className={classes.column}>
          <p className={classes.longAbout}>
            Esse cupidatat aute aliqua do nisi aliqua eiusmod incididunt cillum
            pariatur qui dolor irure proident. Veniam nulla pariatur in esse ad
            cillum ipsum consectetur nisi esse non. Aliquip excepteur incididunt
            fugiat ad officia veniam officia anim tempor ipsum sunt proident
            fugiat. Ut fugiat enim ad reprehenderit sint. Aliqua quis aliqua
            sint veniam quis laborum incididunt. Dolore quis nostrud nisi ipsum
            amet. Cillum exercitation labore qui aliqua est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
