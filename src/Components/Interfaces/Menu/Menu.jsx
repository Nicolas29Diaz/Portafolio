import { Html } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import useStore from "../../../Store/Store";
import "./Menu.css";
import Background from "./SVG/Background";
import Buttons from "./SVG/Buttons";
import { useScaleAnimation } from "../../../Animation/useScaleAnimation";

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

  return (
    <>
      <Html
        className={`menu-html ${
          isInteractable ? "" : "menu-html-no-interaction"
        } `}
        distanceFactor={1.72}
        transform
        occlude="blending"
        position={[0, 1.57, 0]}
        rotation={[-Math.PI / 3, 0, 0]}
        scale={scale}
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
