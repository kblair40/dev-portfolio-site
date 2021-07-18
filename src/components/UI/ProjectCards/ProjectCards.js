import React, { useState, useRef, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { hiddenActions } from "../../../store/hiddenSlice";

import ProjectCard from "./ProjectCard";
import classes from "./ProjectCards.module.css";

const ProjectCards = () => {
  // const mdScreen = useMediaQuery("(max-width: 890px)");
  // const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const dispatch = useDispatch();
  // const scrollingEnabled = useSelector((st) => st.hidden.scrollingEnabled);
  const containerRef = useRef();

  const disableScrolling = () => {
    dispatch(hiddenActions.disableScrolling());
  };
  const enableScrolling = () => {
    dispatch(hiddenActions.enableScrolling());
  };

  useEffect(() => {
    // dispatch(hiddenActions.disableScrolling());
    containerRef.current.addEventListener("mouseenter", disableScrolling);
    containerRef.current.addEventListener("mouseleave", enableScrolling);
  }, []);

  // ADD EVENT LISTENER FOR SCROLL ON CONTAINER
  //   STOP PROPAGATION ON IT
  // MIGHT NEED TO REMOVE EVENT LISTENERS FROM WINDOW AND ATTACH ELSEWHERE

  return (
    // <div className={classes.scrollbar}>
    <PerfectScrollbar
      className={classes.scrollbar}
      options={{
        suppressScrollX: true,
      }}
    >
      <div className={classes.container} ref={containerRef}>
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
    // </div>
  );
};

export default ProjectCards;
