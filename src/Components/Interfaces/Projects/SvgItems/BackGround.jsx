import React from "react";

function BackGround({ animate }) {
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
          zIndex: "0",
        }}
      >
        {/* Border BackGround */}
        <g transform="translate(-230 20) scale(1)">
          <polyline
            // className={`projects-border-background projects-no-fill ${
            //   animate
            //     ? "projects-border-thick-anim"
            //     : "projects-border-thick-no-anim"
            // }`}
            className={`projects-border-background projects-no-fill projects-border-thick-no-anim
            `}
            points="78,0 1200,0 1200,695 0,695 0,80 80,0"
          ></polyline>
        </g>
        {/* Decoration 1 */}
        <g transform="translate(-230 20) scale(1)">
          <polyline
            className={`projects-fill-green-2`}
            points="0,80 350,80 430,0 80,0 0,80"
          ></polyline>
          <text x="100" y="55" fill="white" className="projects-text-title-2">
            PROJECTS
          </text>
        </g>

        {/* Decoration 2 */}
        <g transform="translate(170 30) scale(0.7)">
          <polyline
            className={`projects-fill-green-2`}
            points="40,0 70,0 30,40 0,40 40,0"
          ></polyline>
          <polyline
            transform="translate(40 0)"
            className={`projects-fill-green-2`}
            points="40,0 70,0 30,40 0,40 40,0"
          ></polyline>
          <polyline
            transform="translate(80 0)"
            className={`projects-fill-green-2`}
            points="40,0 70,0 30,40 0,40 40,0"
          ></polyline>
          <polyline
            transform="translate(120 0)"
            className={`projects-fill-green-2`}
            points="40,0 70,0 30,40 0,40 40,0"
          ></polyline>
          <polyline
            transform="translate(160 0)"
            className={`projects-fill-green-2`}
            points="40,0 70,0 30,40 0,40 40,0"
          ></polyline>
        </g>

        {/* Decoration 2 */}
        <g transform="translate(940 20) scale(1)">
          <polyline
            className={`projects-fill-green-2`}
            points="0,0 30,0 30,100 0,70"
          ></polyline>
        </g>

        {/* Decoration 4 */}
        <g transform="translate(-150 682) scale(1)">
          <polyline
            className={`projects-fill-green-2`}
            points="40,0 250,0 290,30 0,30 40,0"
          ></polyline>
        </g>
        {/* Decoration 5 */}
        <g transform="translate(620 682) scale(1)">
          <polyline
            className={`projects-fill-green-2`}
            points="40,0 250,0 290,30 0,30 40,0"
          ></polyline>
        </g>
      </svg>
    </>
  );
}

export default BackGround;
