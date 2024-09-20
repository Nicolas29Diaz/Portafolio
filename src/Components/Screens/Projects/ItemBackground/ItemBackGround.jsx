import React, { useEffect, useState } from "react";
// import "./SVG.css";
import useStore from "../../../../Store/Store";

import styles from "./ItemBackground.module.css";
function ItemBackGround({ project, animate }) {
  const { gpuTier } = useStore();
  const [isLowRes, setLowRes] = useState(false);

  useEffect(() => {
    if (gpuTier >= 3) {
      setLowRes(false);
    } else {
      setLowRes(true);
    }
  }, [gpuTier]);

  return (
    <>
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
        {/*Item Background */}

        {/* Item Border BackGround */}
        <g>
          <polyline
            className={`${styles.borderThick} ${styles.noFill} ${
              animate ? styles.borderThickAnim : styles.borderThickNoAnim
            }`}
            points="300,-100 640,-100 640,50 680,90 680,840 160,840 110,790 110,540 60,500 60,-100 140,-100"
          ></polyline>
        </g>

        {/* Decoration 1 */}
        <g>
          <polyline
            className={styles.fill2}
            points="160,-120 280,-120 285,-90 155,-90 165,-120"
          ></polyline>
        </g>
        {/* Decoration 2 */}
        <g transform=" rotate(90 680 -90)">
          <polyline
            className={styles.fill2}
            points="705,-90 825,-90 800,-70 680,-70 705,-90"
          ></polyline>
        </g>
        {/* Decoration 3 */}
        {!isLowRes && (
          <g>
            <polyline
              className={`${styles.borderThick} ${styles.noFill}`}
              points="500,-125 670,-125 670,-45"
            ></polyline>
            <circle
              className={styles.fill2}
              cx="500"
              cy="-125"
              r="10"
              fill="white"
            />
          </g>
        )}

        {/* Decoration 5 */}
        {!isLowRes && (
          <g transform="translate(70 440) rotate(90) scale(0.3 0.2)">
            <g transform="translate(300 -115)">
              <polyline
                className={styles.fill2}
                points="100,0 200,0 115,200 0,200 100,0"
              ></polyline>
            </g>
            <g transform="translate(450 -115)">
              <polyline
                className={styles.fill2}
                points="100,0 200,0 115,200 0,200 100,0"
              ></polyline>
            </g>
            <g transform="translate(600 -115)">
              <polyline
                className={styles.fill2}
                points="100,0 200,0 115,200 0,200 100,0"
              ></polyline>
            </g>
            <g transform="translate(750 -115)">
              <polyline
                className={styles.fill2}
                points="100,0 200,0 115,200 0,200 100,0"
              ></polyline>
            </g>
          </g>
        )}
        {/* Decoration 6 */}
        <g>
          <polyline
            className={`${styles.borderThick} ${styles.noFill}`}
            points={`75,${isLowRes ? "550" : "730"} 75,800 145,870 275,870`}
          ></polyline>
          <circle className={styles.fill2} cx="275" cy="870" r="12" />
        </g>
      </svg>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 450 720"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >
        <g>
          <polyline
            className={`${styles.borderThick} ${styles.noFill} ${
              animate ? styles.borderThickAnim : styles.borderThickNoAnim
            }`}
            points="40,100 390,100 390,220 415,240 415,710 100,710 60,670 60,500 20,460 20,100 100,100"
          ></polyline>
        </g>
      </svg> */}
    </>
  );
}

export default ItemBackGround;
