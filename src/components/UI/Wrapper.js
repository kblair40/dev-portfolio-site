import React from "react";
import classes from "./Wrapper.module.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import Div100vh from "react-div-100vh";

import Navbar from "./Navbar/Navbar";

const Wrapper = (props) => {
  const handleTouchStart = (e) => {
    // Prevent user scrolling on cards from changing the page
    e.stopPropagation();
  };
  return (
    <PerfectScrollbar
      className={classes.scrollbar}
      options={{
        suppressScrollX: true,
        wheelPropagation: false,
      }}
      onTouchStart={handleTouchStart}
    >
      <Div100vh className={classes.wrapperContainer}>
        <div className={classes.navbar}>
          <Navbar />
        </div>
        {props.children}
      </Div100vh>
    </PerfectScrollbar>
  );
};

export default Wrapper;
