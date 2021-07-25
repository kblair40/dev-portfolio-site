import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
  const [aboutRef, aboutIsHovered] = useHover();
  const [skillsRef, skillsIsHovered] = useHover();
  const [projectsRef, projectsIsHovered] = useHover();
  const [courseworkRef, courseworkIsHovered] = useHover();
  const [universityRef, universityIsHovered] = useHover();
  const [experienceRef, experienceIsHovered] = useHover();

  // const handleMouseEnter = (e) => {
  //   console.log("\n\nENTERED\n\n");
  //   dispatch(
  //     hoverLocationActions.setMutingIsActive({
  //       resumeIsHovered: true,
  //     })
  //   );
  // };

  // const handleMouseLeave = (e) => {
  //   const validTargets = ["about", "skills", "projects"];
  //   console.log("LEFT RESUME FOR", e.target.id);
  //   if (validTargets.includes(e.target.id)) {
  //     console.log("DOING NOTHING:", e.target.id);
  //   } else {
  //     dispatch(
  //       hoverLocationActions.setMutingIsActive({
  //         resumeIsHovered: false,
  //       })
  //     );
  //   }
  //   console.log("\n\nLEAVING\n\n");
  // };

  useEffect(() => {
    const hoverStates = {
      aboutIsHovered,
      skillsIsHovered,
      projectsIsHovered,
      courseworkIsHovered,
      universityIsHovered,
      experienceIsHovered,
    };
    // console.log("OBJECT VALUES:", Object.values(hoverStates));

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
    <div className={classes.container}>
      <ResumeContainer isDarkMode={isDarkMode}>
        <div className={classes.themeSwitchContainer}>
          <ThemeSwitch isDarkMode={isDarkMode} />
        </div>

        {/* Dont't dynamically style Contact - change from section to header element */}
        <section id="contact" className={classes.sectionContainer}>
          <Contact isDarkMode={isDarkMode} />
          <SectionDivider />
        </section>

        <section id="about" className={classes.sectionContainer} ref={aboutRef}>
          <div className={classes.bgOverlay} />
          <About />
        </section>

        <section
          style={{
            border: "1px solid red",
          }}
          id="skills"
          className={classes.sectionContainer}
          ref={skillsRef}
        >
          <Skills />
          <div className={classes.bgOverlay} />
        </section>

        <section
          style={{ border: "1px solid orange" }}
          id="projects"
          className={classes.sectionContainer}
          ref={projectsRef}
        >
          <Projects />
        </section>

        <section
          id="coursework"
          className={classes.sectionContainer}
          ref={courseworkRef}
        >
          <Coursework />
        </section>

        <section
          id="university"
          className={classes.sectionContainer}
          ref={universityRef}
        >
          <University />
        </section>

        <section
          id="experience"
          className={classes.sectionContainer}
          ref={experienceRef}
        >
          <Experience />
        </section>
      </ResumeContainer>
    </div>
  );
};

export default MainResume;
