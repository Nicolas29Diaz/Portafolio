// Importing necessary libraries and components
import React, { useEffect, useRef, useState } from "react";
import useStore from "../../../Store/Store";
import Slider from "react-slick";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

// Importing styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";

// Importing components
import HtmlBase from "../HtmlBase";
import SkillContainer from "./SvgItems/SkillContainer";
import BackGround from "./SvgItems/BackGround";
function Skills() {
  const { cameraFocus } = useStore();
  const canvas = useRef();
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
        <div className="container-2">
          <div className="canvas-skills-container">
            <img
              src="public/Images/1200px-computer-screen-code-glitch-animation-gif-background-free.gif"
              alt="Gift background"
            />
            PONER UNA MASCARA QUE VAYA DE ABAJO HACIA ARRIBA PARA MOSTRAR EL
            MODELO 3D
            <svg></svg>
          </div>
        </div>
      </div>
    </HtmlBase>
  );
}

export default Skills;
