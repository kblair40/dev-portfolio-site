import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";

import Subheader from "./Subheader";

const styles = {
  sectionContent: {
    marginBottom: "-1rem",
  },
  bullets: {
    marginTop: "-.5rem",
  },
  darkDivider: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  lightDivider: {
    backgroundColor: "rgba(187,222,251,0.2)",
  },
};

const ResumeSection = (props) => {
  const {
    classes,
    subheader,
    liveLink,
    githubLink,
    subheaderDetails,
    content,
    bullets,
    isDarkMode,
    needsDivider,
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
        <Subheader
          subheader={subheader}
          detail={subheaderDetails}
          liveLink={liveLink}
          githubLink={githubLink}
          hasContent={content ? true : false}
        />
      )}
      {content && <p>{content}</p>}
      {bulletsContent}
      {needsDivider && (
        <Divider
          className={isDarkMode ? classes.lightDivider : classes.darkDivider}
        />
      )}
    </div>
  );
};

export default withStyles(styles)(ResumeSection);
