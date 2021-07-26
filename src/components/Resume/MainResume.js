import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { hoverLocationActions } from "../../store/hoverLocationSlice";
import useHover from "../../hooks/useHover";
import ResumeContainer from "./ResumeContainer";
import ThemeSwitch from "./ThemeSwitch";
import Contact from "./Contact";
import SectionDivider from "./SectionDivider";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Coursework from "./Sections/Coursework";
import University from "./Sections/University";
import Experience from "./Sections/Experience";

import classes from "./MainResume.module.css";

const MainResume = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const hoverLocation = useSelector(
    (state) => state.hoverLocation.hoverLocation
  );
  const mutingIsActive = useSelector(
    (state) => state.hoverLocation.mutingIsActive
  );
  const [aboutRef, aboutIsHovered] = useHover();
  const [skillsRef, skillsIsHovered] = useHover();
  const [projectsRef, projectsIsHovered] = useHover();
  const [courseworkRef, courseworkIsHovered] = useHover();
  const [universityRef, universityIsHovered] = useHover();
  const [experienceRef, experienceIsHovered] = useHover();

  useEffect(() => {
    const hoverStates = {
      aboutIsHovered,
      skillsIsHovered,
      projectsIsHovered,
      courseworkIsHovered,
      universityIsHovered,
      experienceIsHovered,
    };

    dispatch(
      hoverLocationActions.setHoverLocation({
        hoverStates,
      })
    );
  }, [
    aboutIsHovered,
    skillsIsHovered,
    projectsIsHovered,
    courseworkIsHovered,
    universityIsHovered,
    experienceIsHovered,
  ]);

  return (
    <div
      className={classNames(
        classes.container,
        isDarkMode ? classes.darkBg : classes.lightBg
      )}
    >
      <ResumeContainer isDarkMode={isDarkMode}>
        <div className={classes.themeSwitchContainer}>
          <ThemeSwitch isDarkMode={isDarkMode} />
        </div>

        {/* Dont't dynamically style Contact - change from section to header element */}
        <section id="contact" className={classes.sectionContainer}>
          <Contact isDarkMode={isDarkMode} />
          {/* <SectionDivider topMargin="1rem" /> */}
        </section>

        <section id="about" className={classes.sectionContainer} ref={aboutRef}>
          <About
            isHovered={aboutIsHovered}
            mutingIsActive={mutingIsActive}
            hoverLocation={hoverLocation}
            isDarkMode={isDarkMode}
          />
        </section>

        <section
          id="skills"
          className={classes.sectionContainer}
          ref={skillsRef}
        >
          <Skills
            isHovered={skillsIsHovered}
            mutingIsActive={mutingIsActive}
            hoverLocation={hoverLocation}
            isDarkMode={isDarkMode}
          />
        </section>

        <section
          id="projects"
          className={classes.sectionContainer}
          ref={projectsRef}
        >
          <Projects
            isHovered={projectsIsHovered}
            mutingIsActive={mutingIsActive}
            hoverLocation={hoverLocation}
            isDarkMode={isDarkMode}
          />
        </section>

        <section
          id="coursework"
          className={classes.sectionContainer}
          ref={courseworkRef}
        >
          <Coursework
            isHovered={courseworkIsHovered}
            mutingIsActive={mutingIsActive}
            hoverLocation={hoverLocation}
            isDarkMode={isDarkMode}
          />
        </section>

        <section
          id="university"
          className={classes.sectionContainer}
          ref={universityRef}
        >
          <University
            isHovered={universityIsHovered}
            mutingIsActive={mutingIsActive}
            hoverLocation={hoverLocation}
            isDarkMode={isDarkMode}
          />
        </section>

        <section
          id="experience"
          className={classes.sectionContainer}
          ref={experienceRef}
        >
          <Experience
            isHovered={experienceIsHovered}
            mutingIsActive={mutingIsActive}
            hoverLocation={hoverLocation}
            isDarkMode={isDarkMode}
          />
        </section>
      </ResumeContainer>
    </div>
  );
};

export default MainResume;
