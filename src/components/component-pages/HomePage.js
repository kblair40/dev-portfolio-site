import React from "react";
import classNames from "classnames";
import Slide from "@material-ui/core/Slide";

import { useSelector } from "react-redux";

import Avatar from "../Avatar/Head";
import HomeContent from "../Content/HomeContent";
import DownArrow from "../UI/Arrows/DownArrow";

import classes from "./HomePage.module.css";

const HomePage = ({ currentPage }) => {
  const homeIsHidden = useSelector((state) => state.hidden.home);
  const slideDirection = useSelector(
    (state) => state.hidden.homeSlideDirection
  );

  return (
    <div>
      <Slide
        mountOnEnter
        unmountOnExit
        in={!homeIsHidden}
        timeout={1000}
        direction={slideDirection}
      >
        <div className={classNames(classes.container)}>
          <div className={classes.bgOverlay}>
            <Avatar />
            <HomeContent />
            <DownArrow curPage="home" />
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
