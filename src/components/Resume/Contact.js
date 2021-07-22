import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Divider from "@material-ui/core/Divider";

import classes from "./Contact.module.css";

const Contact = ({ isDarkMode }) => {
  return (
    <React.Fragment>
      <div className={classes.contactContainer}>
        <h1 className={classes.header}>KEVIN BLAIR</h1>

        <div className={classes.headerContact}>
          <div>
            <div>Chicago, IL 60614</div>
            <div>847-845-4635</div>
            <div>kblair40@gmail.com</div>
          </div>
          <div>
            <IconButton
              onClick={() => window.open("https://www.github.com/kblair40")}
            >
              <GitHubIcon className={classes.icon} fontSize="large" />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/kevin-blair-74525935")
              }
            >
              <LinkedInIcon className={classes.icon} fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
      <Divider
        style={{
          backgroundColor: isDarkMode
            ? "rgba(187,222,251,0.2)"
            : "rgba(0,0,0,0.1)",
        }}
      />
    </React.Fragment>
  );
};

export default Contact;
