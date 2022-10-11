import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PeopleIcon from "@material-ui/icons/People";
import SchoolIcon from "@material-ui/icons/School";
import HelpIcon from "@material-ui/icons/Help";
import SearchIcon from "@material-ui/icons/Search";
import classNames from "classnames";

import classes from "./AboutIcons.module.css";

const AboutIcons = () => {
  const sm = useMediaQuery("(max-width:400px)");
  const md = useMediaQuery("(max-width:600px)");

  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <div className={classes.item}>
          <HelpIcon
            size="large"
            classes={{ root: classNames(classes.muiIcon, classes.helpIcon) }}
          />
          <p>Naturally Curious</p>
        </div>
        <div className={classes.item}>
          <PeopleIcon
            size="large"
            classes={{ root: classNames(classes.muiIcon, classes.peopleIcon) }}
          />
          <p>Team Player</p>
        </div>
        <div className={classes.item}>
          <SchoolIcon
            size="large"
            classes={{ root: classNames(classes.muiIcon, classes.schoolIcon) }}
          />
          <p>Constantly Learning</p>
        </div>
        <div className={classes.item}>
          <SearchIcon
            size="large"
            classes={{ root: classNames(classes.muiIcon, classes.searchIcon) }}
          />
          <p>Attention to Detail</p>
        </div>
      </div>
    </div>
  );
};

export default AboutIcons;
