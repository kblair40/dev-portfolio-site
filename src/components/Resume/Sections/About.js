import React from "react";
import InfoIcon from "@material-ui/icons/Info";

import SectionDivider from "../SectionDivider";
import CustomIcon from "../CustomIcon";
import { ABOUT_TEXT } from "../../../constants";
import classes from "./About.module.css";

const About = () => {
  return (
    <React.Fragment>
      <div className={classes.sectionHeader}>
        <CustomIcon
          className={classes.customIcon}
          icon={<InfoIcon fontSize="large" />}
        />
        <h3>ABOUT</h3>
      </div>
      <div className={classes.sectionContent}>
        <p style={{ margin: 0 }}>{ABOUT_TEXT}</p>
        <SectionDivider topMargin="1rem" />
      </div>
    </React.Fragment>
  );
};

export default About;
