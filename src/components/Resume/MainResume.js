import React, { useState } from "react";

import ResumeContainer from "./ResumeContainer";
import Contact from "./Contact";
import ResumeSection from "./ResumeSection";
import ThemeSwitch from "./ThemeSwitch";

import {
  ABOUT_TEXT,
  SKILLS_TEXT,
  MEMORY_TEXT,
  MEMORY_BULLETS,
  WATCHLIST_TEXT,
  WATCHLIST_BULLETS,
} from "../../constants";
import classes from "./MainResume.module.css";

const MainResume = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeSwitch = () => {
    setIsDarkMode((state) => !state);
  };

  return (
    <div className={classes.container}>
      <ResumeContainer
      // isDarkMode={isDarkMode}
      >
        <div className={classes.themeSwitchContainer}>
          <ThemeSwitch
            isDarkMode={isDarkMode}
            handleThemeSwitch={handleThemeSwitch}
          />
        </div>
        <Contact />
        <h3 className={classes.sectionHeader}>ABOUT</h3>
        <ResumeSection content={ABOUT_TEXT} needsDivider={true} />
        <h3 className={classes.sectionHeader}>SKILLS</h3>
        <ResumeSection content={SKILLS_TEXT} needsDivider={true} />
        <h3 className={classes.sectionHeader}>PROJECTS</h3>
        <ResumeSection
          subheader="Memory Card Game"
          subheaderDetails="ReactJS, Material-UI, Axios, JSS"
          content={MEMORY_TEXT}
          bullets={MEMORY_BULLETS}
          liveLink="https://memory-6fc80b.netlify.app"
          githubLink="https://github.com/kblair40/memory"
          // isDarkMode={isDarkMode}
        />

        <ResumeSection
          subheader="Stock Watchlist"
          subheaderDetails="ReactJS, Material-UI, Recharts, JSS"
          content={WATCHLIST_TEXT}
          bullets={WATCHLIST_BULLETS}
          liveLink="https://watchlistkab.netlify.app"
          githubLink="https://github.com/kblair40/watchlist"
          // isDarkMode={isDarkMode}
          needsDivider={true}
        />
        <h3 className={classes.sectionHeader}>
          SOFTWARE DEVELOPMENT COURSEWORK
        </h3>
        <ResumeSection
          subheader="The Modern React Bootcamp"
          subheaderDetails="2021"
          bullets={[
            "Covered ReactJS class and functional components, in addition to hooks, Context API, React-Router and NextJS",
          ]}
          // isDarkMode={isDarkMode}
          needsDivider={false}
        />
        <ResumeSection
          subheader="The Web Developer Bootcamp 2021"
          subheaderDetails="2021"
          bullets={[
            "Learned principles of responsive design implemented with CSS Flexbox, Grid and media queries",
            "Gained a significantly greater understanding of the DOM, DOM events, AJAX, Prototypes, Classes and how to incorporate a NodeJS/MongoDB back-end with a JavaScript/HTML/CSS front-end",
          ]}
          // isDarkMode={isDarkMode}
        />
        <ResumeSection
          subheader="AWS Certified Solutions Architect Associate 2020"
          subheaderDetails="2020"
          bullets={[
            "Gained the necessary knowledge to take and pass the AWS Certified Solutions Architect Associate exam in June, 2020",
          ]}
          // isDarkMode={isDarkMode}
        />
        <ResumeSection
          subheader="Complete Python Bootcamp From Zero to Hero in Python"
          subheaderDetails="2019"
          bullets={[
            "Learned Python starting with the basics and ending with more advanced topics like decorators, generators, web scraping, exception handling, pandas/numpy libraries and GUI frameworks",
          ]}
          // isDarkMode={isDarkMode}
        />
        <ResumeSection
          subheader="FreeCodeCamp"
          subheaderDetails="2017"
          bullets={[
            "Learned the basics of HTML, CSS JavaScript, JQuery, the DOM, and responsive web design",
          ]}
          // isDarkMode={isDarkMode}
          needsDivider={true}
        />
        <h3 className={classes.sectionHeader}>UNIVERSITY</h3>
        <ResumeSection
          subheader="The University of Alabama"
          subheaderDetails="BS Finance  &nbsp;(2009 - 2013)"
          bullets={[
            "Alabama Men’s Varsity Basketball Scout Team, 2011 - 2012",
            "Alabama Men’s Club Volleyball Team, 2009 - 2010",
          ]}
          // isDarkMode={isDarkMode}
          needsDivider={true}
        />
        <h3 className={classes.sectionHeader}>EXPERIENCE</h3>
        <ResumeSection
          subheader="Donyati, LLC"
          subheaderDetails="Consultant &nbsp;(Mar 2020 - Mar 2021)"
          bullets={[
            "Built command line programs using Python for comparing and automating modifications to Excel spreadsheets",
            "Assisted in the implementation of EPM software for multiple Fortune 500 companies",
          ]}
        />
      </ResumeContainer>
    </div>
  );
};

export default MainResume;
