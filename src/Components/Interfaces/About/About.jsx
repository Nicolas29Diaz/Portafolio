// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import useStore from "../../../Store/Store";
import { Html } from "@react-three/drei";

// Importing styles
import "./About.css";

// Importing components

function About({ animate = false }) {
  return (
    <Html
      className={`about-background ${animate ? "" : ""}`}
      distanceFactor={1}
      transform
      occlude="blending"
      tabIndex={0}
      position={[0.22, 0, 0.22]}
      rotation={[0, Math.PI/3.95, 0]}
      scale={[1.72, 1.72, 1.72]}
    >
      Hola
    </Html>
  );
}

export default About;
