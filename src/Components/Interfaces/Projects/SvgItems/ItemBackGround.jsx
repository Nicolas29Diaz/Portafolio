import React, { useEffect, useState } from "react";
import "./SVG.css";
import useStore from "../../../../Store/Store";

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
          // zIndex: "1000",
        }}
      >
        {/*Item Background */}
        <g>
          <polyline
            className="projects-fill-green-1"
            points="80,-80 620,-80 620,70 660,110 660,820 180,820 130,770 130,520 80,480 80,-80"
          ></polyline>
          <clipPath id="imageMask">
            <polyline
              style={{ fill: "white" }}
              points="80,-80 620,-80 620,70 660,110 660,370 80,370 80,480 80,-80"
            ></polyline>
          </clipPath>
          <g className="clipped-image">
            <image
              href={project.img}
              x="80"
              y="-80"
              height="80%"
              width="80%"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>

          <text x="130" y="450" fill="white" className="projects-text-title">
            {project.title}
          </text>
          <text
            x="160"
            y="550"
            fill="white"
            className="projects-text-description"
          >
            {project.title}
          </text>
        </g>

        {/* Item Border BackGround */}
        <g>
          <polyline
            className={`projects-border-thick projects-no-fill ${
              animate
                ? "projects-border-thick-anim"
                : "projects-border-thick-no-anim"
            }`}
            points="300,-100 640,-100 640,50 680,90 680,840 160,840 110,790 110,540 60,500 60,-100 140,-100"
          ></polyline>
        </g>

        {/* Decoration 1 */}
        <g>
          <polyline
            className="projects-fill-green-2"
            points="160,-120 280,-120 285,-90 155,-90 165,-120"
          ></polyline>
        </g>
        {/* Decoration 2 */}
        <g transform=" rotate(90 680 -90)">
          <polyline
            className="projects-fill-green-2"
            points="705,-90 825,-90 800,-70 680,-70 705,-90"
          ></polyline>
        </g>
        {/* Decoration 3 */}
        {!isLowRes && (
          <g>
            <polyline
              className="projects-border-thick projects-no-fill"
              points="500,-125 670,-125 670,-45"
            ></polyline>
            <circle
              className="projects-fill-green-2"
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
                className="projects-fill-green-2"
                points="100,0 200,0 115,200 0,200 100,0"
              ></polyline>
            </g>
            <g transform="translate(450 -115)">
              <polyline
                className="projects-fill-green-2"
                points="100,0 200,0 115,200 0,200 100,0"
              ></polyline>
            </g>
            <g transform="translate(600 -115)">
              <polyline
                className="projects-fill-green-2"
                points="100,0 200,0 115,200 0,200 100,0"
              ></polyline>
            </g>
            <g transform="translate(750 -115)">
              <polyline
                className="projects-fill-green-2"
                points="100,0 200,0 115,200 0,200 100,0"
              ></polyline>
            </g>
          </g>
        )}
        {/* Decoration 6 */}
        <g>
          <polyline
            className="projects-border-thick projects-no-fill"
            points={`75,${isLowRes ? "550" : "730"} 75,800 145,870 275,870`}
          ></polyline>
          <circle className="projects-fill-green-2" cx="275" cy="870" r="12" />
        </g>
      </svg>
    </>
  );
}

export default ItemBackGround;
