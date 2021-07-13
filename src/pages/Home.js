import React, { useEffect, useRef } from "react";
import Hidden from "@material-ui/core/Hidden";
import Slide from "@material-ui/core/Slide";

import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import HomePage from "../components/component-pages/HomePage";
import AboutPage from "../components/component-pages/AboutPage";
import WorkPage from "../components/component-pages/WorkPage";
import { hiddenActions } from "../store/hiddenSlice";

import classes from "./Home.module.css";

const PAGE_ORDER = ["home", "about", "work"];

const Home = () => {
  const dispatch = useDispatch();
  // const homeIsHidden = useSelector((state) => state.hidden.home);
  // const aboutIsHidden = useSelector((state) => state.hidden.about);
  // const workIsHidden = useSelector((state) => state.hidden.work);
  const currentPage = useSelector((state) => state.hidden.currentPage);

  // console.log("\nCURRENT PAGE:", currentPage);
  let currentIndex = 0;
  let aboutIsAbove, homeIsAbove, workIsAbove;
  useEffect(() => {
    currentIndex = PAGE_ORDER.indexOf(currentPage);
    // console.log("CURRENT INDEX:", currentIndex);

    homeIsAbove = PAGE_ORDER.indexOf("home") < currentIndex;
    // console.log("homeIsAbove:", homeIsAbove);

    aboutIsAbove = PAGE_ORDER.indexOf("about") < currentIndex;
    // console.log("aboutIsAbove:", aboutIsAbove);

    workIsAbove = PAGE_ORDER.indexOf("work") < currentIndex;
    // console.log("workIsAbove:", workIsAbove);
  }, [currentPage]);

  return (
    <div className={classNames(classes.container)}>
      <div className={classNames(classes.homeContainer)}>
        <HomePage isAbove={homeIsAbove} />
      </div>
      <div className={classNames(classes.aboutContainer)}>
        <AboutPage isAbove={aboutIsAbove} />
      </div>
      <div className={classNames(classes.aboutContainer)}>
        <WorkPage isAbove={workIsAbove} />
      </div>
    </div>
  );
};

export default Home;

//

//

// WORKING SETUP - REPLACE WITH ABOVE IF NEEDED
// const Home = () => {
//   const dispatch = useDispatch();
//   const homeIsHidden = useSelector((state) => state.hidden.home);
//   const aboutIsHidden = useSelector((state) => state.hidden.about);
//   const workIsHidden = useSelector((state) => state.hidden.work);
//   const currentPage = useSelector((state) => state.hidden.currentPage);

//   console.log("\nCURRENT PAGE:", currentPage);
//   let currentIndex = 0;
//   let aboutIsAbove, homeIsAbove, workIsAbove;
//   useEffect(() => {
//     currentIndex = PAGE_ORDER.indexOf(currentPage);
//     console.log("CURRENT INDEX:", currentIndex);

//     aboutIsAbove = PAGE_ORDER.indexOf("about") < currentIndex;
//     console.log("aboutIsAbove:", aboutIsAbove);

//     homeIsAbove = PAGE_ORDER.indexOf("home") < currentIndex;
//     console.log("homeIsAbove:", homeIsAbove);

//     workIsAbove = PAGE_ORDER.indexOf("work") < currentIndex;
//     console.log("workIsAbove:", workIsAbove);
//   }, [currentPage]);

//   useEffect(() => {
//     setTimeout(() => {
//       dispatch(hiddenActions.unhideHome());
//     }, 2000); //2000ms animation
//   }, []);

//   return (
//     <div className={classNames(classes.container)}>
//       <div
//         className={classNames(
//           classes.homeContainer,
//           // !homeIsHidden && classes.offPageBottom,
//           homeIsHidden && classes.hidden,
//           !homeIsHidden && classes.slideInUp,
//           homeIsHidden && classes.slideOutUp,
//           homeIsHidden && classes.offPageTop
//         )}
//       >
//         <HomePage />
//       </div>
//       <div
//         className={classNames(
//           classes.aboutContainer,
//           // aboutIsHidden && classes.offPageBottom,
//           aboutIsHidden && classes.hidden,
//           !aboutIsHidden && classes.slideInUp
//         )}
//       >
//         <AboutPage />
//       </div>
//       <div
//         className={classNames(
//           classes.aboutContainer,
//           // workIsHidden && classes.offPageBottom,
//           workIsHidden && classes.hidden,
//           !workIsHidden && classes.slideInUp
//         )}
//       >
//         <WorkPage />
//       </div>
//     </div>
//   );
// };

// export default Home;
