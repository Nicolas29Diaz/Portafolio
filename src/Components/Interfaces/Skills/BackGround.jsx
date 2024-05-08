import React from "react";

function BackGround() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          margin: "auto",
          zIndex: "0",
        }}
      >
        {/* <defs></defs> */}
        <g transform={`translate(20 20) scale(1)`}>
          <clipPath id="clip-path">
            <polygon points="680,45 715,0 910,0 940,30 940,370 910,400 685,400 710,375 710,75 680,45" />
          </clipPath>
          <polyline
            className="about-box-line"
            points="0,200 0,20 30,0 270,0 300,20 300,50 670,50 700,80 700,200"
          />
          <polyline
            className="about-box-line"
            points="310,20 310,40 670,40 700,0 340,0 310,20"
          />
          <polyline
            className="about-box-line"
            points="0,200 0,370 30,400 670,400 700,370 700,200"
          />
          <polyline
            className="about-box-line"
            points="680,45 715,0 910,0 940,30 940,370 910,400 685,400 710,375 710,75 680,45"
          />
          <g clipPath="url(#clip-path)" transform="translate(680 0)">
            {/* Aquí va tu contenido que quieres dentro del polyline */}
            <div
              style={{
                width: "270px",
                height: "500px",
                backgroundColor: "white",
              }}
            ></div>
          </g>
        </g>
      </svg>
    </>
  );
}

export default BackGround;

{
  /* <polyline
          className="about-box-line"
          points="680,45 715,0 910,0 940,30 940,370 910,400 745,400 710,370 710,75 680,45"
        /> */
}

{
  /* <polyline
        className="about-box-line"
        points="310,15 310,40 670,40 700,0 290,0 310,15"
      /> */
}
