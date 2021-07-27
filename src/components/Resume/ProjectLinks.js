import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import classes from "./ProjectLinks.module.css";

const ProjectLinks = ({
  subheader,
  detail,
  liveLink,
  hasContent,
  githubLink,
}) => {
  const isDarkMode = useSelector((st) => st.theme.isDarkMode);
  return (
    <div className={classes.subheader}>
      <div className={classes.subheaderContent}>
        <h4>{subheader}</h4>
        <p>
          <i className={classes.detail}>{detail}</i>
        </p>
      </div>
      {liveLink && githubLink && (
        <div className={classes.links}>
          <a
            className={classNames(
              classes.liveLink,
              isDarkMode ? classes.linkDark : classes.linkLight
            )}
            href={liveLink}
            target="blank"
          >
            Live
          </a>
          <a
            className={classNames(
              classes.githubLink,
              isDarkMode ? classes.linkDark : classes.linkLight
            )}
            href={githubLink}
            target="blank"
          >
            Github
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectLinks;
