import React from "react";
import classNames from "classnames";
import Slide from "@material-ui/core/Slide";

import { useSelector, useDispatch } from "react-redux";

import Avatar from "../Avatar/Head";
import HomeContent from "../Content/HomeContent";
import DownArrow from "../UI/DownArrow/DownArrow";
import classes from "./HomePage.module.css";
import { hiddenActions } from "../../store/hiddenSlice";

const HomePage = () => {
  const homeIsHidden = useSelector((state) => state.hidden.home);
  console.log("HOME IS HIDDEN:", homeIsHidden);
  const dispatch = useDispatch();

  const hideHome = () => {
    dispatch(hiddenActions.hideHome());
    dispatch(hiddenActions.unhideAbout());
  };
  return (
    <div>
      <Slide
        in={!homeIsHidden}
        timeout={1000}
        direction={homeIsHidden ? "down" : "up"}
      >
        <div className={classNames(classes.container)}>
          <div className={classes.bgOverlay}>
            <Avatar />
            <HomeContent />
            <DownArrow
              curPage="home"
              nextPage="about"
              prevPage={null}
              endAction={hideHome}
            />
          </div>
        </div>
      </Slide>
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
