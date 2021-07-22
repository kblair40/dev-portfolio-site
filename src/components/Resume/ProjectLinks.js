import React from "react";
import classes from "./ProjectLinks.module.css";

const ProjectLinks = ({
  subheader,
  detail,
  liveLink,
  hasContent,
  githubLink,
}) => {
  return (
    <div
      className={classes.subheader}
      style={{ marginBottom: hasContent ? "-2.5rem" : "-1.5rem" }}
    >
      <div className={classes.subheaderContent}>
        <h4>{subheader}</h4>
        <p style={{ marginLeft: "1rem" }}>
          <i className={classes.detail}>{detail}</i>
        </p>
      </div>
      {liveLink && githubLink && (
        <div className={classes.links}>
          <a href={liveLink} target="blank">
            Live
          </a>
          &nbsp;|&nbsp;
          <a href={githubLink} target="blank">
            Github
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectLinks;
