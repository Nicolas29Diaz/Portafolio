// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import useStore from "../../../Store/Store";
import Slider from "react-slick";

// Importing styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";

// Importing components
import HtmlBase from "../HtmlBase";
import SkillContainer from "../SVGItems/SkillContainer";

function Skills() {
  const { cameraFocus } = useStore();
  useEffect(() => {
    console.log(cameraFocus);
  }, [cameraFocus]);

  const [active, setActive] = useState(0);

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <HtmlBase
      backgroundColor="#031732"
      sizeScreen={["980px", "480px"]}
      borderRadius="0px"
      position={[0, 0.08, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <div className="general-container">
        <div className="container-1">
          <div className="title-container">SKILLS</div>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <div className="slider-item">
                  {cameraFocus === "SKILLS" && (
                    <>
                      <SkillContainer skillPoints={2} />
                      <SkillContainer skillPoints={3} />
                      <SkillContainer skillPoints={1} />
                      <SkillContainer skillPoints={2} />
                    </>
                  )}
                </div>
              </div>
              <div>
                <div className="slider-item">
                  {cameraFocus === "SKILLS" && (
                    <>
                      <SkillContainer skillPoints={2} />
                      <SkillContainer skillPoints={3} />
                      <SkillContainer skillPoints={1} />
                      <SkillContainer skillPoints={2} />
                    </>
                  )}
                </div>
              </div>
              <div>
                <div className="slider-item">
                  {cameraFocus === "SKILLS" && (
                    <>
                      <SkillContainer skillPoints={2} />
                      <SkillContainer skillPoints={3} />
                      <SkillContainer skillPoints={1} />
                      <SkillContainer skillPoints={2} />
                    </>
                  )}
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="container-2">3D</div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "3",
            width: "100px",
            height: "100%",
            alignContent: "center",
            padding: "20px",
            gap: "20px",
          }}
        >
          <div style={{ height: "50px" }}></div>
          <div></div>
        </div>
        <div style={{ flex: "1", padding: "20px", height: "100%" }}>
          <div>MODELO 3D</div>
        </div> */}
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
