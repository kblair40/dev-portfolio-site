import React, { useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { scroller } from "react-scroll";

import { hiddenActions } from "../../../store/hiddenSlice";
import classes from "./DownArrow.module.css";

const DownArrow = ({ curPage, nextPage, prevPage }) => {
  const dispatch = useDispatch();
  const homeIsHidden = useSelector((state) => state.hidden.home);
  const aboutIsHidden = useSelector((state) => state.hidden.about);

  const hidePage = () => {
    if (curPage === "home") {
      dispatch(hiddenActions.hideHome());
      dispatch(hiddenActions.unhideAbout());
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer}>
        <IconButton onClick={hidePage} className={classes.iconBtnRoot}>
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default DownArrow;

//

//

// WORKING SETUP - REPLACE WITH ABOVE IF NEEDED
// const DownArrow = ({ to, pageToUnhide, hidePage }) => {
//   const dispatch = useDispatch();
//   const homeIsHidden = useSelector((state) => state.hidden.home);
//   const aboutIsHidden = useSelector((state) => state.hidden.about);

//   console.log("pageToUnhide:", pageToUnhide);

//   // const unhidePage = () => {
//   //   dispatch(hiddenActions.unhideAbout());
//   // };

//   return (
//     <div className={classes.container}>
//       <div className={classes.arrowContainer}>
//         {/* <IconButton onClick={unhidePage} className={classes.iconBtnRoot}> */}
//         <IconButton onClick={hidePage} className={classes.iconBtnRoot}>
//           <ArrowDownwardIcon fontSize="large" />
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// export default DownArrow;
