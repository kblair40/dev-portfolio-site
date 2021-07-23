import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import { useSelector } from "react-redux";
import classNames from "classnames";

const useStyles = makeStyles({
  container: {
    height: "3.5rem",
    width: "3.5rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& svg": {
      transition: "transform .3s linear",
    },
  },
  containerDark: {
    border: "1px solid #2196f3",
    backgroundColor: "#fff",
    color: "#212121",
    boxShadow: "0 0 4px 0.5px #6ec6ff",
  },
  containerLight: {},
});

const CustomIcon = ({ icon }) => {
  const classes = useStyles();
  const isDarkMode = useSelector((st) => st.theme.isDarkMode);
  return (
    <div
      className={classNames(
        classes.container,
        isDarkMode ? classes.containerDark : classes.containerLight
      )}
    >
      {icon}
    </div>
  );
};

export default CustomIcon;
