import React, { useRef, useEffect } from "react";
import Divider from "@material-ui/core/Divider";

import classes from "./Skill.module.css";

const CustomDivider = () => {
  return (
    <Divider
      style={{
        marginTop: "1rem",
        width: "calc(100% + 3.5rem)",
        position: "relative",
        right: "2.5rem",
      }}
    />
  );
};

const Skills = ({ title, skillLevel, isLastSkill = false }) => {
  const containerRef = useRef();

  const handleMouseEnter = () => {
    containerRef.current.classList.add(classes.grow);
  };
  const handleMouseOut = () => {
    containerRef.current.classList.remove(classes.grow);
  };

  useEffect(() => {
    containerRef.current.addEventListener("mouseenter", handleMouseEnter);
    containerRef.current.addEventListener("mouseout", handleMouseOut);

    return () => {
      containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
      containerRef.current.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return (
    <React.Fragment>
      <div ref={containerRef} className={classes.container}>
        <div className={classes.skillTitle}>{title}</div>
        <div className={classes.progressContainer}>
          <div className={classes.progressBg} />
          <div
            style={{ width: skillLevel }}
            className={classes.progressOverlay}
          />
        </div>
      </div>
      {isLastSkill && <CustomDivider />}
    </React.Fragment>
  );
};

export default Skills;
