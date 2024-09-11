import { Html } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import useStore from "../../../Store/Store";
import "./Menu.css";
import Background from "./SVG/Background";
import Buttons from "./SVG/Buttons";
import { useScaleAnimation } from "../../../Animation/useScaleAnimation";
function Menu() {
  const { cameraFocus, showButtonStart, setMenuView, isMenuView } = useStore();
  const [animate, setAnimate] = useState(false);
  const [canPressButton, setCanPressButton] = useState(false);
  const [isHandVisible, setHandVisible] = useState(false);
  const [isMenuOptionsVisible, setMenuOptionsVisible] = useState(false);

  const opacity = useScaleAnimation(!showButtonStart);
  useEffect(() => {
    if (cameraFocus === "MENU") {
      // setAnimate(true);

      setHandVisible(false);
      setMenuOptionsVisible(true);
      setTimeout(() => {
        setCanPressButton(true);
      }, 1500);
    } else {
      setHandVisible(true);
      setMenuOptionsVisible(false);

      setCanPressButton(false);
    }
  }, [cameraFocus]);

  return (
    <>
      <Html
        className={`menu-html ${animate ? "" : ""}`}
        distanceFactor={1.72}
        transform
        occlude="blending"
        position={[0, 1.57, 0]}
        rotation={[-Math.PI / 3, 0, 0]}
        style={{ opacity: opacity }}
      >
        <Background
          isHandVisible={isHandVisible}
          onHandClick={() => setMenuView(true)}
        />

        {isMenuOptionsVisible && (
          <Buttons
            isMenuOptionsVisible={isMenuOptionsVisible}
            canPressButton={canPressButton}
          />
        )}
        {/* <Buttons animate={animate} canPressButton={canPressButton} /> */}
      </Html>
    </>
  );
}

export default Menu;
