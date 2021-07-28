import React, { useRef, useEffect, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import classNames from "classnames";

import ProjectCard from "./ProjectCard";
import classes from "./ProjectCards.module.css";

const ProjectCards = () => {
  const projectCardsRef = useRef();
  const [touchpoints, setTouchpoints] = useState(0);

  useEffect(() => {
    const numOfTouchpoints = navigator.maxTouchPoints;
    setTouchpoints(numOfTouchpoints);
  });

  const handleTouchStart = (e) => {
    // Prevent user scrolling on cards from changing the page
    // console.log("PROJECT CARDS TOUCHED!");
    e.stopPropagation();
  };

  return (
    <PerfectScrollbar
      className={classes.scrollbar}
      options={{
        suppressScrollX: true,
        wheelPropagation: false,
        touchPropagation: false,
      }}
      onTouchStart={handleTouchStart}
      ref={projectCardsRef}
    >
      <div
        className={classNames(
          classes.container,
          touchpoints > 0 && classes.mobileMarginBottom
        )}
        id="work-page-container"
      >
        <ProjectCard
          name="ecommerce"
          liveLink="https://ecommerce-kb.netlify.app/"
          githubLink="https://github.com/kblair40/ecommerce"
        />
        <ProjectCard
          name="user auth"
          liveLink="https://signup-kb.netlify.app/signup"
          githubLink="https://github.com/kblair40/signup"
        />
        <ProjectCard
          name="memory"
          liveLink="https://memory-6fc80b.netlify.app/"
          githubLink="https://github.com/kblair40/memory"
        />
        <ProjectCard
          name="todos"
          liveLink="https://todos-kb.netlify.app/"
          githubLink="https://github.com/kblair40/Todo"
        />
      </div>
    </PerfectScrollbar>
  );
};

export default ProjectCards;
