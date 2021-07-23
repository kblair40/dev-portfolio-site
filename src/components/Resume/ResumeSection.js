import React from "react";
import Divider from "@material-ui/core/Divider";

import ProjectLinks from "./ProjectLinks";
import classes from "./ResumeSection.module.css";

const ResumeSection = (props) => {
  const {
    subheader,
    liveLink,
    githubLink,
    subheaderDetails,
    content,
    bullets,
  } = props;

  const getBullets = (bullets) => {
    if (bullets) {
      return (
        <ul className={classes.bullets}>
          {bullets.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  };

  const bulletsContent = getBullets(bullets);
  return (
    <div className={classes.sectionContent}>
      {bullets && (
        <ProjectLinks
          subheader={subheader}
          detail={subheaderDetails}
          liveLink={liveLink}
          githubLink={githubLink}
          hasContent={content ? true : false}
        />
      )}
      {content && <p>{content}</p>}
      {bulletsContent}
    </div>
  );
};

export default ResumeSection;
