import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";

import classes from "./MePixelized.module.css";

const MePixelized = () => {
  const containerRef = useRef();
  const [mouseOnLeftHalf, setMouseOnLeftHalf] = useState(true);
  const [animationActive, setAnimationActive] = useState(true);

  const trackMouse = (e) => {
    let screenWidth = e.target.clientWidth;
    let halfway = screenWidth / 2;
    let mouseX = e.pageX;
    if (!animationActive) {
      if (!mouseOnLeftHalf && mouseX < halfway) {
        setMouseOnLeftHalf(true);
      } else if (mouseOnLeftHalf && mouseX > halfway) {
        setMouseOnLeftHalf(false);
      }
    }
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", trackMouse);
    containerRef.current.addEventListener("animationstart", () => {
      setAnimationActive(true);
    });
    containerRef.current.addEventListener("animationend", () => {
      setAnimationActive(false);
    });
    // window.addEventListener("mousemove", trackMouse);
    // window.addEventListener("animationstart", () => {
    //   setAnimationActive(true);
    // });
    // window.addEventListener("animationend", () => {
    //   setAnimationActive(false);
    // });

    return () => {
      // window.removeEventListener("mousemove", trackMouse);
      // window.removeEventListener("animationstart", () => {
      //   setAnimationActive(true);
      // });
      // window.removeEventListener("animationend", () => {
      //   setAnimationActive(false);
      // });
      if (containerRef && containerRef.current) {
        containerRef.current.removeEventListener("mousemove", trackMouse);
        containerRef.current.removeEventListener("animationstart", () => {
          setAnimationActive(true);
        });
        containerRef.current.removeEventListener("animationend", () => {
          setAnimationActive(false);
        });
      }
    };
  });

  return (
    <div ref={containerRef} className={classes.container}>
      <div
        className={classNames(
          classes.meContainer,
          mouseOnLeftHalf ? classes.lookLeft : classes.lookRight
        )}
      >
        <div className={classes.me}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MePixelized;
