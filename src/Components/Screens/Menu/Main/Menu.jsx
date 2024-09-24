// Drei
import { Html } from "@react-three/drei";

// React
import React, { useEffect, useState } from "react";

// State Management
import useStore from "../../../../Store/Store";

// Styles
import styles from "./Menu.module.css";

// Local Components
import Background from "../Background/Background";
import Buttons from "../Buttons/Buttons";

// Animation
import { useScaleAnimation } from "../../../../Animation/useScaleAnimation";

function Menu({ showScreen }) {
  const { cameraFocus, setMenuView, isMenuView } = useStore();

  const [canPressButton, setCanPressButton] = useState(false);
  const [isHandVisible, setHandVisible] = useState(false);
  const [isMenuOptionsVisible, setMenuOptionsVisible] = useState(false);
  const [isInteractable, setInteractable] = useState(false);

  const scale = useScaleAnimation(showScreen);

  useEffect(() => {
    if (cameraFocus === "MENU") {
      // setAnimate(true);

      setHandVisible(false);
      setMenuOptionsVisible(true);
      setTimeout(() => {
        setCanPressButton(true);
      }, 1500);
    } else if (cameraFocus === "INITIAL") {
      setInteractable(false);
      setHandVisible(true);
    } else {
      setInteractable(true);
      setHandVisible(true);
      setMenuOptionsVisible(false);
      setCanPressButton(false);
    }
  }, [cameraFocus]);

  const opacity = useScaleAnimation(isHandVisible);

  return (
    <>
      <Html
        className={`${styles.html} ${
          isInteractable ? "auto" : styles.noInteraction
        }`}
        distanceFactor={1}
        transform
        occlude="blending"
        position={[0, 0.51, 0]}
        rotation={[-Math.PI / 2.71, 0, 0]}
        scale={scale}
      >
        <Background />
        {opacity > 0 && (
          <div
            className={styles.handContainer}
            onClick={() => setMenuView(true)}
            style={{ opacity: opacity }}
          >
            <img src="/Images/Icons/HandMenu.png" alt="HandIcon" />
          </div>
        )}

        <h1 className={styles.title}>MENU</h1>
        {isMenuOptionsVisible && (
          <Buttons
            isMenuOptionsVisible={isMenuOptionsVisible}
            canPressButton={canPressButton}
          />
        )}
      </Html>
    </>
  );
}

export default Menu;
