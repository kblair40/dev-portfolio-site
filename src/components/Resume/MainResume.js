import React from "react";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import InfoIcon from "@material-ui/icons/Info";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import CreateIcon from "@material-ui/icons/Create";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { useSelector } from "react-redux";

import ResumeContainer from "./ResumeContainer";
import Contact from "./Contact";
import ResumeSection from "./ResumeSection";
import ThemeSwitch from "./ThemeSwitch";
import Skill from "./Skill";
import CustomIcon from "./CustomIcon";
import SectionDivider from "./SectionDivider";
import {
  ABOUT_TEXT,
  MEMORY_TEXT,
  MEMORY_BULLETS,
  WATCHLIST_TEXT,
  WATCHLIST_BULLETS,
} from "../../constants";
import classes from "./MainResume.module.css";

const MainResume = (props) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={classes.container}>
      <ResumeContainer isDarkMode={isDarkMode}>
        <div className={classes.themeSwitchContainer}>
          <ThemeSwitch isDarkMode={isDarkMode} />
        </div>

        <Contact isDarkMode={isDarkMode} />
        <SectionDivider />

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

        <div className={classes.sectionHeader}>
          <CustomIcon
            className={classes.customIcon}
            icon={<DeveloperModeIcon fontSize="large" />}
          />
          <h3>PROGRAMMING SKILLS</h3>
        </div>
        <div className={classes.sectionContent}>
          <Skill title="HTML5" skillLevel="90%" />
          <Skill title="CSS3" skillLevel="88%" />
          <Skill title="Javascript" skillLevel="83%" />
          <Skill title="ReactJS" skillLevel="81%" />
          <Skill title="SQL" skillLevel="62%" />
          <Skill title="NodeJS" skillLevel="72%" />
          <Skill title="MongoDB" skillLevel="68%" />
          <SectionDivider topMargin="1rem" />
        </div>

        <div className={classes.sectionHeader}>
          <CustomIcon
            className={classes.customIcon}
            icon={<CreateIcon fontSize="large" />}
          />
          <h3>PROJECTS</h3>
        </div>
        <div className={classes.sectionContent}>
          <ResumeSection
            subheader="Memory Card Game"
            subheaderDetails="ReactJS, Material-UI, Axios, JSS"
            content={MEMORY_TEXT}
            bullets={MEMORY_BULLETS}
            liveLink="https://memory-6fc80b.netlify.app"
            githubLink="https://github.com/kblair40/memory"
          />
          <ResumeSection
            subheader="Stock Watchlist"
            subheaderDetails="ReactJS, Material-UI, Recharts, JSS"
            content={WATCHLIST_TEXT}
            bullets={WATCHLIST_BULLETS}
            liveLink="https://watchlistkab.netlify.app"
            githubLink="https://github.com/kblair40/watchlist"
            needsDivider={true}
          />
          <SectionDivider topMargin="2rem" />
        </div>

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

        <div className={classes.sectionHeader}>
          <CustomIcon
            className={classes.customIcon}
            icon={<SchoolIcon fontSize="large" />}
          />
          <h3>UNIVERSITY</h3>
        </div>
        <div className={classes.sectionContent}>
          <ResumeSection
            subheader="The University of Alabama"
            subheaderDetails="BS Finance  &nbsp;(2009 - 2013)"
            bullets={[
              "Alabama Men’s Varsity Basketball Scout Team, 2011 - 2012",
              "Alabama Men’s Club Volleyball Team, 2009 - 2010",
            ]}
            needsDivider={true}
          />
          <SectionDivider topMargin="2rem" />
        </div>

        <div className={classes.sectionHeader}>
          <CustomIcon
            className={classes.customIcon}
            icon={<WorkIcon fontSize="large" />}
          />
          <h3>EXPERIENCE</h3>
        </div>
        <h3 className={classes.sectionHeader}>EXPERIENCE</h3>
        <div className={classes.sectionContent}>
          <ResumeSection
            subheader="Donyati, LLC"
            subheaderDetails="Consultant &nbsp;(Mar 2020 - Mar 2021)"
            bullets={[
              "Built command line programs using Python for comparing and automating modifications to Excel spreadsheets",
              "Assisted in the implementation of EPM software for multiple Fortune 500 companies",
            ]}
          />
        </div>
      </ResumeContainer>
    </div>
  );
};

export default MainResume;
