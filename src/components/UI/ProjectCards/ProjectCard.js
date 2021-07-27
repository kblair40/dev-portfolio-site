import React, { useRef, useEffect } from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames";

import ProjectCardNav from "./ProjectCardNav";
import classes from "./ProjectCard.module.css";

const ProjectCard = ({ name, liveLink, githubLink }) => {
  const smallScreen = useMediaQuery("(max-width: 400px)");
  const projectLinksRef = useRef();
  const removeBgRef = useRef();

  useEffect(() => {
    removeBgRef.current.addEventListener("mouseover", addBgClass);
    removeBgRef.current.addEventListener("animationend", logEnd);
    projectLinksRef.current.addEventListener("mouseleave", showBg);
  }, []);

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
      <div
        ref={removeBgRef}
        className={classNames(
          classes.contentContainer,
          classes.background,
          backgroundClass
        )}
      ></div>
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
    </Card>
  );
};

export default ProjectCard;
