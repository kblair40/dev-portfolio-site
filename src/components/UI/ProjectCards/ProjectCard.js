import React, { useRef, useEffect } from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import classNames from "classnames";

import ProjectCardNav from "./ProjectCardNav";
import classes from "./ProjectCard.module.css";

const ProjectCard = ({ name }) => {
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
  if (name === "todo") {
    backgroundClass = classes.todoBackground;
  }

  return (
    <Card square={true} className={classes.projectCard}>
      <ProjectCardNav />
      <div
        ref={removeBgRef}
        id="remove-bg"
        className={classNames(classes.contentContainer, backgroundClass)}
      ></div>
      <div
        ref={projectLinksRef}
        id="project-links"
        className={classNames(classes.links)}
      >
        <div className={classes.linkContainer}>
          <a href="https://www.github.com/kblair40/ecommerce" target="blank">
            <IconButton classes={{ root: classes.iconLink }}>
              <GitHubIcon fontSize="large" />
            </IconButton>
          </a>
          <a
            className={classes.link}
            href="https://www.linkedin.com"
            target="blank"
          >
            Live Link!
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
