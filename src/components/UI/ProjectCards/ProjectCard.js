import React from "react";
import Card from "@material-ui/core/Card";
import classNames from "classnames";

import ProjectCardNav from "./ProjectCardNav";
import classes from "./ProjectCard.module.css";

const ProjectCard = ({ name }) => {
  let backgroundClass;
  if (name === "ecommerce") {
    backgroundClass = classes.ecommerceBackground;
  }
  if (name === "todo") {
    backgroundClass = classes.todoBackground;
  }
  return (
    // <div className={classes.container}>
    <Card square={true} className={classes.projectCard}>
      <ProjectCardNav />

      <div className={classNames(classes.contentContainer, backgroundClass)} />
    </Card>
    // </div>
  );
};

export default ProjectCard;
