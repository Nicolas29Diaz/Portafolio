import React, { useEffect, useState } from "react";
import HtmlBase from "../HtmlBase";
import { Html } from "@react-three/drei";
import useStore from "../../../Store/Store";
import "./Skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillContainer from "../SVGItems/SkillContainer";
// import { views, useStore } from "../../../Store/Store.js";
function Skills() {
  const { cameraFocus } = useStore();
  useEffect(() => {
    console.log(cameraFocus);
  }, [cameraFocus]);

  const [active, setActive] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <HtmlBase
      backgroundColor="#003275"
      sizeScreen={["980px", "480px"]}
      borderRadius="0px"
      position={[0, 0.08, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <div className="general-container">
        <div
          style={{
            flex: "2",
            width: "100px",
            height: "100%",
            alignContent: "center",
            padding: "20px",
          }}
        >
          <Slider
            {...settings}
            beforeChange={(current, next) => {
              setActive(next);
            }}
          >
            <div>
              {cameraFocus === "SKILLS" && active === 0 && (
                <div className="skills-container">
                  <SkillContainer></SkillContainer>
                  <SkillContainer></SkillContainer>
                  <SkillContainer></SkillContainer>
                  <SkillContainer></SkillContainer>
                </div>
              )}
            </div>

            <div>
              {active === 1 && (
                <div className="skills-container">
                  <SkillContainer></SkillContainer>
                  <SkillContainer></SkillContainer>
                  <SkillContainer></SkillContainer>
                  <SkillContainer></SkillContainer>
                </div>
              )}
            </div>
          </Slider>
        </div>
        <div style={{ flex: "1", padding: "20px", height: "100%" }}>
          <div>MODELO 3D</div>
        </div>
      </div>
    </HtmlBase>
  );
}

export default Skills;
{
  /*  <g>
              <mask id="heart-mask">
                <rect className="heart-rect-mask" height="200px" fill="white" />
                <rect className="heart-rect-mask" height="200px" fill="black" />
              </mask>

              <polyline
                className="heart-line"
                points="0,100 70,100 80,120 90,100 120,40 150,170 180,100 250,100"
                mask="url(#heart-mask)"
              />
            </g>
  
  
  
  <g transform="translate(170 118)" fill="#34bfff" font-weight="bold">
             <text x="0" y="0" font-size="12" class="about-header-upper-text">
               Name :
             </text>
             <text x="0" y="20" font-size="18" class="about-header-lower-text">
               David
             </text>
             <text x="110" y="0" font-size="12" class="about-header-upper-text">
               Age :
             </text>
             <text x="110" y="20" font-size="18" class="about-header-lower-text">
               23
             </text>
             <text x="200" y="0" font-size="12" class="about-header-upper-text">
               From :
             </text>
             <text x="200" y="20" font-size="18" class="about-header-lower-text">
               Germany
             </text>
           </g> */
}
