import React from "react";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Divider from "@material-ui/core/Divider";

import CustomIcon from "./CustomIcon";
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
          <div className={classes.icons}>
            <div className={classes.icon}>
              <IconButton
                classes={{ root: classes.iconBtn }}
                onClick={() => window.open("https://www.github.com/kblair40")}
              >
                <CustomIcon icon={<GitHubIcon fontSize="large" />} />
              </IconButton>
            </div>
            <div className={classes.icon}>
              <IconButton
                classes={{ root: classes.iconBtn }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kevin-blair-74525935"
                  )
                }
              >
                <CustomIcon icon={<LinkedInIcon fontSize="large" />} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Divider
        style={{
          backgroundColor: isDarkMode ? "#e1e1e1" : "#222222",
          width: "calc(100% + 2rem)",
          position: "relative",
          right: "1rem",
          margin: 0,
        }}
      />
    </React.Fragment>
  );
};

export default Contact;
