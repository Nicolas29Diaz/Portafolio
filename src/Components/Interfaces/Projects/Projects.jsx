import React, { useEffect, useState } from "react";
import "./Projects.css";

import { Html } from "@react-three/drei";
import BackGround from "./SvgItems/BackGround";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "./Project";
import useStore from "../../../Store/Store";
function Projects() {
  const projectsData = [
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/Projects/Prueba.png",
      alt: "Project",
      link: "Images/Projects/Prueba.png",
    },
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/Projects/Prueba.png",
      alt: "Project",
      link: "Images/Projects/Prueba.png",
    },
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/Projects/Shewhart.png",
      alt: "Project",
      link: "Images/Projects/Shewhart.png",
    },
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/Projects/Shewhart.png",
      alt: "Project",
      link: "Images/Projects/Shewhart.png",
    },
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/Projects/Shewhart.png",
      alt: "Project",
      link: "Images/Projects/Shewhart.png",
    },
    {
      title: "Title",
      description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt exaspernatur vero adipisci praesentium nam quas quo libero, minima adharum laboriosam consequatur ducimus dolore provident accusantium iurenisi asperiores?",
      img: "Images/Projects/Shewhart.png",
      alt: "Project",
      link: "Images/Projects/Shewhart.png",
    },
  ];
  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  const [animate, setAnimate] = useState(false);
  const { cameraFocus } = useStore();

  useEffect(() => {
    if (cameraFocus === "PROJECTS") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [cameraFocus]);

  const sliderProjects = projectsData.map((project, i) => (
    <Project project={project} key={i} animate={animate} />
  ));
  return (
    <Html
      //   pixelRatio={window.devicePixelRatio}
      className="background-projects"
      distanceFactor={1}
      transform
      occlude="blending"
      position={[0, 0.095, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <div className="slider-container-projects">
        <Slider {...settings}>{sliderProjects}</Slider>
      </div>

      <BackGround animate={animate}></BackGround>
    </Html>
  );
}

export default Projects;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
