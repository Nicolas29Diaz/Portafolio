// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import useStore from "../../../../Store/Store.js";
import Slider from "react-slick";
import { Html } from "@react-three/drei";

// Importing styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Skills.module.css";

// Importing components
import SkillContainer from "../SkillContainer/SkillContainer.jsx";
import BackGround from "../Background/BackGround.jsx";
import Subtitle from "../Subtitle/Subtitle.jsx";
import { useScaleAnimation } from "../../../../Animation/useScaleAnimation.jsx";

// Importing constants
import { sliderConf, skillsConf } from "../Constants/Constants.js";
import IconTutorial from "../../../../IconsTutorials/IconTutorial.jsx";
import { hideSkillIconTutorialTime } from "../../../../Constants/Times.js";

function Skills({ showScreen }) {
  const { cameraFocus, showButtonStart, gpuTier } = useStore();
  const [active, setActive] = useState(0);

  const [isLowTier, setIsLowTier] = useState(false);
  const [animate, setAnimate] = useState(false);

  const [showSubtitle, setShowSubtitle] = useState(false);

  const [showIconTutorial, setShowIconTutorial] = useState(false);

  const scale = useScaleAnimation(showIconTutorial);

  useEffect(() => {
    if (cameraFocus === "SKILLS") {
      setAnimate(true);
      setShowSubtitle(true);
      setShowIconTutorial(true);
      setTimeout(() => {
        setShowIconTutorial(false);
      }, hideSkillIconTutorialTime);
    } else {
      setAnimate(false);
      setShowSubtitle(false);
    }
  }, [cameraFocus]);

  return (
    <>
      <Html
        className={`${styles.html} ${animate ? "" : styles.noPointer}`}
        distanceFactor={1.72}
        transform
        occlude="blending"
        position={[0, 0.15, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        visible={showScreen}
      >
        <section className={styles.fullContainer}>
          <BackGround animate={animate} active={active}></BackGround>

          {showSubtitle && (
            <Subtitle
              animate={animate}
              active={active}
              subTitleOptions={skillsConf[active].category}
            ></Subtitle>
          )}

          <section className={styles.sectionSlider}>
            <div className={styles.sliderContainer}>
              <Slider
                {...sliderConf}
                prevArrow={<SamplePrevArrow />}
                nextArrow={<SampleNextArrow />}
                beforeChange={(current, next) => {
                  setActive(next);
                }}
              >
                {skillsConf.map((skillsGroup, groupIndex) => (
                  <div key={groupIndex}>
                    <div className={styles.sliderItem}>
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
                          cameraFocus={cameraFocus}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          {/* <section className={styles.sectionCharacter}>
  <img src="" alt="CharacterModelRotating" />
</section> */}
        </section>

        {scale > 0 && (
          <IconTutorial
            move={true}
            top="50%"
            left="50%"
            scale={scale}
          ></IconTutorial>
        )}
      </Html>
    </>
  );
}

export default Skills;

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.customSlickArrowPrev} onClick={onClick}>
      <svg width={"100%"} height={"100%"}>
        <path
          fill="#08bee1"
          d="M 10 0 L 0 10 L 10 20"
          transform="translate(3 0)"
        ></path>
      </svg>
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.customSlickArrowNext} onClick={onClick}>
      <svg width={"100%"} height={"100%"}>
        <path
          fill="#08bee1"
          d="M 10 0 L 0 10 L 10 20"
          transform="translate(-3 0) rotate(180 10 10)"
        ></path>
      </svg>
    </div>
  );
}
