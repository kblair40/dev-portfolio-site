import React from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

import ProjectCardNav from "./ProjectCardNav";
import classes from "./ProjectCard.module.css";

const ProjectCard = () => {
  return (
    <div className={classes.container}>
      <Card className={classes.projectCard}>
        <ProjectCardNav />

        <h1 className={classes.cardTitle}>Title</h1>
        <div className={classes.contentContainer}>
          <div className={classes.linkContainer}>
            <div className={classes.iconLink}>
              <IconButton size="small">
                <GitHubIcon />
              </IconButton>
            </div>
            <div className={classes.link}>Live</div>
          </div>
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
