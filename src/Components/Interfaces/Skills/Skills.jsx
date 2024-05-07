// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import useStore from "../../../Store/Store";
import Slider from "react-slick";
import { Canvas } from "@react-three/fiber";

// Importing styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";

// Importing components
import HtmlBase from "../HtmlBase";
import SkillContainer from "../SVGItems/SkillContainer";
import BackGround from "./BackGround";
function Skills() {
  const { cameraFocus } = useStore();
  useEffect(() => {
    console.log(cameraFocus);
  }, [cameraFocus]);

  const [active, setActive] = useState(0);
  const [change, setChange] = useState(false);
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
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
        {cameraFocus === "SKILLS" && <BackGround></BackGround>}

        <div className="container-1">
          <div className="slider-container">
            <Slider
              {...settings}
              afterChange={(current, next) => {
                setActive(current);
              }}
            >
              <div>
                <div className="slider-item">
                  {cameraFocus === "SKILLS" && (
                    <>
                      {[4, 4, 2, 1].map((skillPoints, index) => (
                        <SkillContainer
                          key={index}
                          skillPoints={skillPoints}
                          activeSkillPoints={active === 0 ? true : false}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
              <div>
                <div className="slider-item">
                  {cameraFocus === "SKILLS" && (
                    <>
                      {[4, 2, 2, 2].map((skillPoints, index) => (
                        <SkillContainer
                          key={index}
                          skillPoints={skillPoints}
                          activeSkillPoints={active === 1 ? true : false}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
              <div>
                <div className="slider-item">
                  {cameraFocus === "SKILLS" && (
                    <>
                      {[3, 3, 2, 1].map((skillPoints, index) => (
                        <SkillContainer
                          key={index}
                          skillPoints={skillPoints}
                          activeSkillPoints={active === 2 ? true : false}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="container-2"></div>
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
