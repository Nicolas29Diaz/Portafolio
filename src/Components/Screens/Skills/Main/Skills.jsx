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

// Importing constants
import { sliderConf, skillsConf } from "../Constants/Constants.js";

function Skills({ showScreen }) {
  const { cameraFocus, showButtonStart, gpuTier } = useStore();
  const [active, setActive] = useState(0);

  const [isLowTier, setIsLowTier] = useState(false);
  const [animate, setAnimate] = useState(false);

  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    if (cameraFocus === "SKILLS") {
      setAnimate(true);
      setShowSubtitle(true);
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
      </Html>
    </>
  );
}

export default Skills;
