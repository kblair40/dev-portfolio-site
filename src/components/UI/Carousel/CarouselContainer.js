import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";

import ProjectCard from "../ProjectCards/ProjectCard";
import classes from "./CarouselContainer.module.css";

const CarouselContainer = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const slides = [
    {
      key: 0,
      content: (
        <ProjectCard
          name="ecommerce"
          liveLink="https://ecommerce-kb.netlify.app/"
          githubLink="https://github.com/kblair40/ecommerce"
        />
      ),
    },
    {
      key: 1,
      content: (
        <ProjectCard
          name="memory"
          liveLink="https://memory-6fc80b.netlify.app/"
          githubLink="https://github.com/kblair40/memory"
        />
      ),
    },
    {
      key: 2,
      content: (
        <ProjectCard
          name="ecommerce"
          liveLink="https://ecommerce-kb.netlify.app/"
          githubLink="https://github.com/kblair40/ecommerce"
        />
      ),
    },
    {
      key: 3,
      content: (
        <ProjectCard
          name="todos"
          liveLink="https://todos-kb.netlify.app/"
          githubLink="https://github.com/kblair40/Todo"
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  return (
    <div className={classes.container}>
      <Carousel slides={slides} goToSlide={goToSlide} />
    </div>
  );
};

export default CarouselContainer;
