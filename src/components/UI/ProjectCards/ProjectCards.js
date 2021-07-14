import React from "react";

import ProjectCard from "./ProjectCard";
import classes from "./ProjectCards.module.css";
import ecommerce_image from "../../../assets/images/ecommerce_card.png";

const ProjectCards = () => {
  return (
    <div className={classes.container}>
      <ProjectCard backgroundImage={ecommerce_image} name="ecommerce" />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectCards;
