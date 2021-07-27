import React from "react";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import { useSelector } from "react-redux";

import CustomIcon from "../CustomIcon";
import SectionDivider from "../SectionDivider";
import ResumeSection from "../ResumeSection";
import classes from "./Coursework.module.css";

const Coursework = ({ isHovered, mutingIsActive, isDarkMode }) => {
  const userIsOnMobile = useSelector((st) => st.hoverLocation.userIsOnMobile);
  return (
    <div className={classes.courseworkContainer}>
      <div
        className={
          !isHovered && mutingIsActive && !userIsOnMobile
            ? isDarkMode
              ? classes.bgOverlayDark
              : classes.bgOverlayLight
            : classes.hidden
        }
      />
      <div className={classes.sectionHeader}>
        <CustomIcon
          className={classes.customIcon}
          icon={<LaptopMacIcon fontSize="large" />}
        />
        <h3>SOFTWARE DEVELOPMENT COURSEWORK</h3>
      </div>
      <div className={classes.sectionContent}>
        <ResumeSection
          subheader="The Modern React Bootcamp"
          subheaderDetails="2021"
          bullets={[
            "Covered ReactJS class and functional components, in addition to hooks, Context API, React-Router and NextJS",
          ]}
          needsDivider={false}
        />
        <ResumeSection
          subheader="The Web Developer Bootcamp 2021"
          subheaderDetails="2021"
          bullets={[
            "Learned principles of responsive design implemented with CSS Flexbox, Grid and media queries",
            "Gained a significantly greater understanding of the DOM, DOM events, AJAX, Prototypes, Classes and how to incorporate a NodeJS/MongoDB back-end with a JavaScript/HTML/CSS front-end",
          ]}
        />
        <ResumeSection
          subheader="AWS Certified Solutions Architect Associate 2020"
          subheaderDetails="2020"
          bullets={[
            "Gained the necessary knowledge to take and pass the AWS Certified Solutions Architect Associate exam in June, 2020",
          ]}
        />
        <ResumeSection
          subheader="Complete Python Bootcamp From Zero to Hero in Python"
          subheaderDetails="2019"
          bullets={[
            "Learned Python starting with the basics and ending with more advanced topics like decorators, generators, web scraping, exception handling, pandas/numpy libraries and GUI frameworks",
          ]}
        />
        <ResumeSection
          subheader="FreeCodeCamp"
          subheaderDetails="2017"
          bullets={[
            "Learned the basics of HTML, CSS JavaScript, JQuery, the DOM, and responsive web design",
          ]}
          needsDivider={true}
        />
        <SectionDivider topMargin="2rem" />
      </div>
    </div>
  );
};

export default Coursework;
