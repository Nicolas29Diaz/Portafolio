// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";

// Importing styles
import styles from "./About.module.css";
import Background from "../Background/Background";
import BasicInfo from "../BasicInfo/BasicInfo";

// Importing components

function About({ animate = false, showScreen }) {
  return (
    <Html
      className={`${styles.html} ${animate ? "" : ""}`}
      distanceFactor={1.72}
      transform
      occlude="blending"
      tabIndex={0}
      position={[0.3, 0, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={1}
      visible={showScreen}
    >
      <Background />

      {/* ICONS AND TEXT */}
      <BasicInfo />

      {/* DESCRIPTION */}
      <section className={styles.descriptionContainer}>
        <p>
          I am a Multimedia Engineer, passionate about web development and
          focused on creating innovative and adaptable solutions in an
          ever-evolving tech environment. I easily adapt to changes and always
          prioritize user needs in every project.
        </p>
      </section>
      {/* CENTRAL IMAGE */}
      <section className={styles.imageContainer}>
        <img
          src="/Images/AboutImages/Yo.webp"
          alt="IconAbout"
        />

        {/* <h2> Virtual Skin</h2> */}
      </section>

      <h1 className={styles.title}>ABOUT</h1>
    </Html>
  );
}

export default About;
