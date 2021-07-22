import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  subheader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexWrap: "wrap",
    margin: "-1.5rem 0 0 0",
  },
  subheaderContent: {
    margin: 0,
    flexGrow: 1,
    display: "flex",
    alignItems: "baseline",
  },
  links: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    // set margin with media queries
    // for when wrap occurs.
  },
  detail: {
    fontWeight: 300,
  },
};

const Subheader = ({
  subheader,
  detail,
  classes,
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

export default withStyles(styles)(Subheader);
