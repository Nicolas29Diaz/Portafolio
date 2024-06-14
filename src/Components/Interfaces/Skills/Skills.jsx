// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import useStore from "../../../Store/Store";
import Slider from "react-slick";
import { Html } from "@react-three/drei";

// Importing styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";

// Importing components
import SkillContainer from "./SvgItems/SkillContainer";
import BackGround from "./SvgItems/BackGround";

// Importing constants
import { skillsConfig, sliderConf } from "./Constants.js";

function Skills() {
  const { cameraFocus } = useStore();
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    // console.log(cameraFocus);
    if (cameraFocus === "SKILLS") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [cameraFocus]);

  return (
    <Html
      className={`background-skills ${animate ? "" : "skills-no-pointer"}`}
      distanceFactor={1}
      transform
      occlude="blending"
      tabIndex={0}
      position={[0, 0.15, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1.72, 1.72, 1.72]}
    >
      {/* {cameraFocus === "SKILLS" ? (  */}
      <div className="general-container-skills">
        <BackGround animate={animate} active={active}></BackGround>

        <div className="container-1-skills">
          <div className="slider-container-skills">
            <Slider
              {...sliderConf}
              beforeChange={(current, next) => {
                setActive(next);
              }}
            >
              <div>
                <div className="slider-item-skills">
                  <>
                    {skillsConfig[0].map((skill, index) => (
                      <SkillContainer
                        animate={animate}
                        key={index}
                        skillPoints={skill.points}
                        skillText={skill.text}
                        x={skill.x}
                        y={skill.y}
                        activeSkillPoints={active === 0 ? true : false}
                        srcImg={skill.srcImg}
                        altImg={skill.altImg}
                      />
                    ))}
                  </>
                </div>
              </div>
              <div>
                <div className="slider-item-skills">
                  <>
                    {skillsConfig[1].map((skill, index) => (
                      <SkillContainer
                        animate={animate}
                        key={index}
                        skillPoints={skill.points}
                        skillText={skill.text}
                        x={skill.x}
                        y={skill.y}
                        activeSkillPoints={active === 1 ? true : false}
                        srcImg={skill.srcImg}
                        altImg={skill.altImg}
                      />
                    ))}
                  </>
                </div>
              </div>
              <div>
                <div className="slider-item-skills">
                  <>
                    {skillsConfig[2].map((skill, index) => (
                      <SkillContainer
                        animate={animate}
                        key={index}
                        skillPoints={skill.points}
                        skillText={skill.text}
                        x={skill.x}
                        y={skill.y}
                        activeSkillPoints={active === 2 ? true : false}
                        srcImg={skill.srcImg}
                        altImg={skill.altImg}
                      />
                    ))}
                  </>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="container-2-skills">
          <div className="canvas-container-skills">
            <img src="Images/SkillsLogos/JS.png" alt="Gift background" />
            PONER UNA MASCARA QUE VAYA DE ABAJO HACIA ARRIBA PARA MOSTRAR EL
            MODELO 3D
            <svg></svg>
          </div>
        </div>
      </div>
      {/* // ) : ("")} */}
    </Html>
  );
}

export default Skills;
