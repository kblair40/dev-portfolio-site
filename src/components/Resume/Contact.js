import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  header: {
    margin: "0 0 -.5rem 0",
    color: "rgba(0,0,0,0.87)",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerContact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: ".5rem 0 0 0",
    textAlign: "center",
  },
  profileButtons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    color: (isDarkMode) =>
      isDarkMode ? "rgba(255,255,255,0.87)" : "rgba(0,0,0,0.6)",
    "&:hover": {
      color: (isDarkMode) => (isDarkMode ? "rgba(187,222,251,.7)" : "#121212"),
    },
  },
});

const Contact = ({ isDarkMode }) => {
  const classes = useStyles(isDarkMode);
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
