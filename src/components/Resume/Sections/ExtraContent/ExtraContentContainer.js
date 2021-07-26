import React, { useState, useRef } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import classNames from "classnames";

import classes from "./ExtraContentContainer.module.css";

const ExtraContentContainer = (props) => {
  const expandIconRef = useRef();
  const [expanded, setExpanded] = useState(false);

  const toggleExtraContent = () => {
    if (!expanded) {
      expandIconRef.current.classList.add(classes.opening);
      expandIconRef.current.classList.remove(classes.closing);
    } else {
      expandIconRef.current.classList.add(classes.closing);
      expandIconRef.current.classList.remove(classes.opening);
    }
    setExpanded((state) => !state);
  };

  return (
    <div className={classes.root}>
      <div className={classes.summary} onClick={toggleExtraContent}>
        <p className={classes.summaryText}>{expanded ? "Close" : "See More"}</p>
        <div
          ref={expandIconRef}
          className={classNames(classes.expandIcon, classes.bouncing)}
        >
          <ExpandMoreIcon fontSize="large" />
        </div>
      </div>
      <Collapse in={expanded} timeout={500} unmountOnExit>
        {/* content content content content content content content */}
        {props.children}
      </Collapse>
    </div>
  );
};

export default ExtraContentContainer;
