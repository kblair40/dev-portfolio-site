import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
  container: {
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    // border: "1px solid green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#eaeaea",
  },
});

const CustomIcon = ({ icon }) => {
  const classes = useStyles();
  return <div className={classes.container}>{icon}</div>;
};

export default CustomIcon;
