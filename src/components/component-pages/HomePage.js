import React, { useEffect, useRef } from "react";
import { scroller } from "react-scroll";

import classNames from "classnames";
import { useDispatch } from "react-redux";

import Avatar from "../Avatar/Head";
import HomeContent from "../Content/HomeContent";
import DownArrow from "../UI/DownArrow/DownArrow";

import classes from "./HomePage.module.css";
import { hiddenActions } from "../../store/hiddenSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div className={classNames(classes.homeContainer)}>
      <div className={classes.bgOverlay}>
        <Avatar />
        <HomeContent />
        <DownArrow curPage="home" nextPage="about" prevPage={null} />
      </div>
    </div>
  );
};

export default HomePage;

//

//

// WORKING SETUP - REPLACE WITH ABOVE IF NEEDED
// const HomePage = ({ hidePage }) => {
//   const dispatch = useDispatch();

//   return (
//     <div className={classNames(classes.homeContainer)}>
//       <div className={classes.bgOverlay}>
//         <Avatar />
//         <HomeContent />
//         <DownArrow to="aboutPageElement" hidePage={hidePage} />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
