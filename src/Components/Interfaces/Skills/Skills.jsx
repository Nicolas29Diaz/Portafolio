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
import { sliderConf, skillsConf } from "./Constants.js";

import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import Subtitle from "./SvgItems/Subtitle.jsx";

function Skills() {
  const { cameraFocus, showButtonStart } = useStore();
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

  useEffect(() => {
    // console.log(skillsConf[0].category);
  }, []);

  const viewport = useThree();
  return (
    <>
      {/* <pointLight
        // ref={lightRef}
        color="#002e63"
        intensity={10}
        distance={20}
        position={[0, 0, 1]}
      /> */}

      <Html
        className={`skills-html ${animate ? "" : "skills-no-pointer"}`}
        distanceFactor={1.72}
        transform
        occlude="blending"
        position={[0, 0.15, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <BackGround animate={animate} active={active}></BackGround>
        {/* <div
            style={{
              background: "red",
              width: "900px",
              height: "400px",
            }}
          >
            <h1>Hi, I'm Nicolas Diaz</h1>
          </div> */}

        <Subtitle
          active={active}
          subTitleOptions={skillsConf[active].category}
        ></Subtitle>

        <section className="skills-sectionSlider">
          <div className="skills-sliderContainer">
            <Slider
              {...sliderConf}
              beforeChange={(current, next) => {
                setActive(next);
              }}
            >
              {skillsConf.map((skillsGroup, groupIndex) => (
                <div key={groupIndex}>
                  <div className="skills-sliderItem">
                    {skillsGroup.skills.map((skill, index) => (
                      <SkillContainer
                        animate={animate}
                        key={index}
                        skillPoints={skill.points}
                        skillText={skill.text}
                        x={skill.x}
                        y={skill.y}
                        activeSkillPoints={active === groupIndex}
                        srcImg={skill.srcImg}
                        altImg={skill.altImg}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="skills-sectionCharacter">
          <img src="" alt="Character model rotating" />
        </section>
      </Html>
    </>
  );
}

export default Skills;
