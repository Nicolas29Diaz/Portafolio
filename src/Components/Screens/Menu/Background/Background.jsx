import React, { useEffect } from "react";
import { useScaleAnimation } from "../../../../Animation/useScaleAnimation";
import styles from "./Background.module.css";

function Background() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 440"
      className={styles.background}
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      {/* Borders setup */}
      <g transform="translate(-6 12) scale(1.15 1)">
        <polyline
          points="49,0 350,0 350,380 340,390 300,390 290,380 60,380 50,390 10,390 0,380 0,50 50,0"
          className={styles.borderLine}
        />
      </g>
      <g transform="translate(-6 12) scale(1.15 1)">
        <polyline
          points="0,395 0,420 350,420 350,395 340,405 300,405 290,395 60,395 50,405 10,405 0,395"
          className={styles.borderLine2}
        />
      </g>
      {/* Decoration */}
      <g transform="translate(-6 12) scale(1.15 1)">
        <polyline
          points="330,0 330,60 350,90 350,0"
          className={styles.borderLine2}
        />
      </g>
      <g transform="translate(-6 12) scale(1.15 1)">
        <polyline
          points="49,0 200,0 150,50 0,50"
          className={styles.borderLine2}
        />
      </g>
      {/* Decoration 2*/}
      <g transform="translate(210 22) scale(0.5)">
        <polyline
          className={styles.borderLine2}
          points="40,0 70,0 30,40 0,40 40,0"
        ></polyline>
        <polyline
          transform="translate(40 0)"
          className={styles.borderLine2}
          points="40,0 70,0 30,40 0,40 40,0"
        ></polyline>
        <polyline
          transform="translate(80 0)"
          className={styles.borderLine2}
          points="40,0 70,0 30,40 0,40 40,0"
        ></polyline>
        <polyline
          transform="translate(120 0)"
          className={styles.borderLine2}
          points="40,0 70,0 30,40 0,40 40,0"
        ></polyline>
        <polyline
          transform="translate(160 0)"
          className={styles.borderLine2}
          points="40,0 70,0 30,40 0,40 40,0"
        ></polyline>
      </g>
    </svg>
  );
}

export default Background;
