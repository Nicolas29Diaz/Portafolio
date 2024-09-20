import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ItemBackGround from "../ItemBackground/ItemBackGround";

import { projectsData, settings } from "../Constants/Constants";
import ItemProject from "../ItemProject/ItemProject";
import styles from "./ProjectsSlider.module.css";

function ProjectsSlider({ animate, interaction }) {
  const sliderProjects = projectsData.map((project, i) => (
    <ItemProject
      project={project}
      key={i}
      animate={animate}
      interaction={interaction}
    />
  ));
  return (
    <div
      className={`${styles.sliderContainer} ${
        animate ? styles.interaction : styles.noInteraction
      }`}
    >
      <Slider {...settings} nextArrow={<></>} prevArrow={<></>}>
        {sliderProjects}
      </Slider>
    </div>
  );
}

export default ProjectsSlider;
