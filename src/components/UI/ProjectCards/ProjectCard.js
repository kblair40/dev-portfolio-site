import React, { useRef, useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import classNames from "classnames";

import ProjectCardNav from "./ProjectCardNav";
import classes from "./ProjectCard.module.css";

const ProjectCard = ({ name, liveLink, githubLink }) => {
  const projectLinksRef = useRef();
  const removeBgRef = useRef();
  const [touchPoints, setTouchPoints] = useState(0);

  useEffect(() => {
    // removeBgRef.current.addEventListener("mouseover", addBgClass);
    // removeBgRef.current.addEventListener("animationend", logEnd);
    // projectLinksRef.current.addEventListener("mouseleave", showBg);

    const touchPointsCount = navigator.maxTouchPoints;
    if (touchPointsCount === 0) {
      setListeners();
    }
    setTouchPoints(touchPointsCount);
  }, []);

  const setListeners = () => {
    removeBgRef.current.addEventListener("mouseover", addBgClass);
    removeBgRef.current.addEventListener("animationend", logEnd);
    projectLinksRef.current.addEventListener("mouseleave", showBg);
  };

  const showBg = () => {
    removeBgRef.current.classList.remove(classes.hidden);
  };

  const addBgClass = () => {
    projectLinksRef.current.classList.add(classes.fadeInLinks);
  };

  const logEnd = () => {
    removeBgRef.current.classList.add(classes.hidden);
  };

  let backgroundClass;
  if (name === "ecommerce") {
    backgroundClass = classes.ecommerceBackground;
  }
  if (name === "user auth") {
    backgroundClass = classes.userAuthBackground;
  }
  if (name === "memory") {
    backgroundClass = classes.memoryBackground;
  }
  if (name === "todos") {
    backgroundClass = classes.todosBackground;
  }

  return (
    <Card id="project-card" square={true} className={classes.projectCard}>
      <ProjectCardNav
        title={name}
        githubLink={githubLink}
        liveLink={liveLink}
      />
      {touchPoints === 0 && (
        <div ref={projectLinksRef} className={classNames(classes.links)}>
          <div className={classes.linkContainer}>
            <a
              className={classNames(classes.githubLink, classes.link)}
              href={githubLink}
              target="blank"
            >
              <IconButton className={classes.iconBtn}>
                <GitHubIcon
                  fontSize="large"
                  className={classNames(classes.iconLink, classes.githubIcon)}
                />
              </IconButton>
              Github Repo
            </a>
            <a
              className={classNames(classes.liveLink, classes.link)}
              href={liveLink}
              target="blank"
            >
              <IconButton className={classes.iconBtn}>
                <OfflineBoltIcon
                  fontSize="large"
                  className={classNames(classes.iconLink, classes.liveIcon)}
                />
              </IconButton>
              Live Project
            </a>
          </div>
        </div>
      )}
      <div
        ref={removeBgRef}
        className={classNames(
          classes.contentContainer,
          touchPoints === 0 && classes.backgroundHide,
          classes.background,
          backgroundClass
        )}
      />
    </Card>
  );
};

export default ProjectCard;
