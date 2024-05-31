import React from "react";
import "./Projects.css";

import { Html } from "@react-three/drei";
import BackGround from "./SvgItems/BackGround";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "./Project";
function Projects() {
  const projectsData = [
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/SkillsLogos/JS.png",
      alt: "Project",
      link: "Images/SkillsLogos/JS.png",
    },
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/SkillsLogos/JS.png",
      alt: "Project",
      link: "Images/SkillsLogos/JS.png",
    },
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/SkillsLogos/JS.png",
      alt: "Project",
      link: "Images/SkillsLogos/JS.png",
    },
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/SkillsLogos/JS.png",
      alt: "Project",
      link: "Images/SkillsLogos/JS.png",
    },
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/SkillsLogos/JS.png",
      alt: "Project",
      link: "Images/SkillsLogos/JS.png",
    },
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/SkillsLogos/JS.png",
      alt: "Project",
      link: "Images/SkillsLogos/JS.png",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const sliderProjects = projectsData.map((project, i) => (
    <Project project={project} key={i} />
  ));
  return (
    <Html
      //   pixelRatio={window.devicePixelRatio}
      className="background-projects"
      distanceFactor={0.5}
      transform
      occlude="blending"
      //   tabIndex={0}
      position={[0, 0.08, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <div className="slider-container-projects">
        <Slider {...settings}>{sliderProjects}</Slider>
      </div>
      {/* <BackGround /> */}
      {/* <div className="text">HOLA PROBANDO DISTANCE FACTOR</div> */}
    </Html>
  );
}

export default Projects;
