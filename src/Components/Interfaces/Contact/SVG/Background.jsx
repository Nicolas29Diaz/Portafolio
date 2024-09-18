import React from "react";
import "./SVG.css";
function Background() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "0",
          top: "0",
          left: "0",
        }}
      >
        {/* Borders setup */}
        <g>
          <polyline
            points="96.6,35 546,35 546,539 490,581 98,581 42,581 28,567 28,105 98,35"
            className="contact-border-line"
          />

          <polyline
            points="96.6,35 350,35 290,105 30,105 97,35"
            className="contact-border-line-2"
          />

          <polyline
            points="546,35 546,150 520,130 520,35 546,35"
            className="contact-border-line-2"
          />

          {/* <text x="130" y="84" className="contact-title">
            CONTACT
          </text> */}
        </g>

        {/* IMAGES LOGOS */}
        {/* <g transform="translate(65 0)">
          <g transform="translate(100 490)">
            <clipPath id="contact-circle1">
              <circle cx="0" cy="0" r="30" fill="none" stroke="black" />
            </clipPath>
            <image
              xlinkHref="/Images/SkillsLogos/Github.png"
              x="-25"
              y="-25"
              width="50"
              height="50"
              style={{ objectFit: "cover" }}
              clip-path="url(#contact-circle1)"
            />
          </g>

          <g transform="translate(180 490)">
            <clipPath id="contact-circle1">
              <circle cx="0" cy="0" r="30" fill="none" stroke="black" />
            </clipPath>
            <image
              xlinkHref="/Images/SkillsLogos/Github.png"
              x="-25"
              y="-25"
              width="50"
              height="50"
              style={{ objectFit: "cover" }}
              clip-path="url(#contact-circle1)"
            />
          </g>

          <g transform="translate(260 490)">
            <clipPath id="contact-circle1">
              <circle cx="0" cy="0" r="30" fill="none" stroke="black" />
            </clipPath>
            <image
              xlinkHref="/Images/SkillsLogos/Github.png"
              x="-25"
              y="-25"
              width="50"
              height="50"
              style={{ objectFit: "cover" }}
              clip-path="url(#contact-circle1)"
            />
          </g>

          <g transform="translate(340 490)">
            <clipPath id="contact-circle1">
              <circle cx="0" cy="0" r="30" fill="none" stroke="black" />
            </clipPath>
            <image
              xlinkHref="/Images/SkillsLogos/Github.png"
              x="-25"
              y="-25"
              width="50"
              height="50"
              style={{ objectFit: "cover" }}
              clip-path="url(#contact-circle1)"
            />
          </g>
        </g> */}
      </svg>

      <div>
        <h1 className="contact-title">CONTACT ME</h1>
      </div>
    </>
  );
}

export default Background;
