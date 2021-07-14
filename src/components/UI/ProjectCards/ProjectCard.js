import React from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import classNames from "classnames";

import ProjectCardNav from "./ProjectCardNav";
import classes from "./ProjectCard.module.css";

const ProjectCard = ({ name, backgroundImage }) => {
  let backgroundClass;
  if (name === "ecommerce") {
    backgroundClass = classes.ecommerceBackground;
  }
  return (
    <div className={classes.container}>
      <Card className={classes.projectCard}>
        <ProjectCardNav />

        <div className={classNames(classes.contentContainer, backgroundClass)}>
          <h1 className={classes.cardTitle}>Title</h1>

          <div className={classes.cardContent}>
            Cillum in cupidatat irure ipsum fugiat ex exercitation et. Id
            reprehenderit consectetur dolore duis. Nulla esse sunt mollit mollit
            ea anim culpa. Culpa dolor dolore anim eu do duis ex ea ipsum est
            Lorem incididunt laboris quis.
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
