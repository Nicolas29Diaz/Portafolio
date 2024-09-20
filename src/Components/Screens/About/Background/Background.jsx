import React from "react";
import styles from "./Background.module.css";
function Background() {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 740 740"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <g transform="translate(-350 0)">
        <polyline
          className={styles.borderLine}
          points="-250,50 450,50 525,150 925,150 1000,50 1700,50"
        ></polyline>
        <polyline
          transform="translate(0 725) rotate(180 725 0)"
          className={styles.borderLine}
          points="-250,50 525,50 550,60 900,60 925,50 1700,50"
        ></polyline>
      </g>
    </svg>
  );
}

export default Background;
