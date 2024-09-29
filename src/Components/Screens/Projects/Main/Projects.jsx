import React, { lazy, useEffect, useState } from "react";

import { Html } from "@react-three/drei";
import BackGround from "../Background/BackGround";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemProject from "../ItemProject/ItemProject";
import useStore from "../../../../Store/Store";

import styles from "./Projects.module.css";
import ProjectsSlider from "../Slider/ProjectsSlider";

import { useScaleAnimation } from "../../../../Animation/useScaleAnimation.jsx";
import IconTutorial from "../../../../IconsTutorials/IconTutorial.jsx";
import { hideProjectsIconTutorialTime } from "../../../../Constants/Times.js";

function Projects({ showScreen }) {
  const [animate, setAnimate] = useState(false);
  const [interaction, setInteraction] = useState(false);
  const { cameraFocus, gpuTier } = useStore();

  const [showMoveLogo, setShowMoveLogo] = useState(false);
  const scale = useScaleAnimation(showMoveLogo);

  useEffect(() => {
    if (cameraFocus === "PROJECTS") {
      setShowMoveLogo(true);
      setTimeout(() => {
        setShowMoveLogo(false);
      }, hideProjectsIconTutorialTime);
      setInteraction(true);
      if (gpuTier >= 3) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    } else {
      setInteraction(false);
      setAnimate(false);
    }
  }, [cameraFocus]);

  return (
    <Html
      className={styles.html}
      distanceFactor={2}
      transform
      occlude="blending"
      tabIndex={0}
      position={[0, 0.15, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      visible={showScreen}
    >
      <ProjectsSlider
        animate={animate}
        interaction={interaction}
      ></ProjectsSlider>

      <BackGround animate={animate}></BackGround>

      {scale > 0 && (
        <IconTutorial
          move={true}
          top="35%"
          left="50%"
          scale={scale}
        ></IconTutorial>
      )}
    </Html>
  );
}

export default Projects;
