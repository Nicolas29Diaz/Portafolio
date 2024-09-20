import React, { useEffect, useState } from "react";
import styles from "./Subtitle.module.css";

function Subtitle({ active, subTitleOptions }) {
  const [subTitleOptionsDelay, setSubTitleOptionsDelay] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSubTitleOptionsDelay(subTitleOptions);
      // console.log(subTitleOptions.text);
    }, 400);
  }, [active]);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 32"
        className={styles.svg}
      >
        <defs>
          <linearGradient id="text-gradient-slideIn">
            <stop offset="5%" stopColor="rgba(96, 202, 255, 1)"></stop>
            <stop offset="100%  " stopColor="rgba(255, 255, 255, 0)"></stop>
          </linearGradient>
          <linearGradient id="text-gradient-slideOut">
            <stop offset="5%  " stopColor="rgba(255, 255, 255, 0)"></stop>
            <stop offset="100%" stopColor="rgba(96, 202, 255, 1)"></stop>
          </linearGradient>
        </defs>

        <g key={active}>
          <rect className={styles.rectSliderText} height="100%" width="10px" />
          <clipPath id="mask-subtitle">
            <rect fill="white" height="43px" className={styles.rectMask} />
          </clipPath>
        </g>

        <text
          x={subTitleOptionsDelay.x}
          y="24.5"
          className="text-subtitle"
          mask="url(#mask-subtitle)"
        ></text>
      </svg>

      <div className={styles.textContainer}>
        <h2>{subTitleOptionsDelay.text}</h2>
      </div>
    </>
  );
}

export default Subtitle;
