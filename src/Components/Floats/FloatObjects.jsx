import React, { useEffect } from "react";
import { useState } from "react";
import {
  hideIconTutorialCharacterTime,
  showIconTutorialCharacterTime,
} from "../../Constants/Times.js";
// Styles (CSS)
import "../../StylesVariables/Floats/CancelButton.css"; // Cancel button styles
import MenuButtons from "./MenuButtons/MenuButtons.jsx";
import { useScaleAnimation } from "../../Animation/useScaleAnimation.jsx";
import IconTutorial from "../../IconsTutorials/IconTutorial.jsx";

export const FloatObjects = ({
  isCancelButtonVisible,
  isStartButtonPressed,
  isMenuButtonVisible,
  setCancelButtonPressed,
  setCancelButtonVisibility,
  setMenuView,
}) => {
  const [showMoveLogo, setShowMoveLogo] = useState(false);

  const scale = useScaleAnimation(showMoveLogo, 1.1, 1, 0.5);

  useEffect(() => {
    console.log(isStartButtonPressed);
    if (isStartButtonPressed) {
      setTimeout(() => {
        setShowMoveLogo(true);
      }, showIconTutorialCharacterTime);
      setTimeout(() => {
        setShowMoveLogo(false);
      }, hideIconTutorialCharacterTime);
    }
  }, [isStartButtonPressed]);

  return (
    <>
      {/* {showMoveLogo && (
        <div className="logo-canMove">
          <img src="./Images/Icons/Move.webp" alt="MoveIcon" />
        </div>
      )} */}

      {scale > 0 && (
        <IconTutorial
          move={true}
          top="80%"
          left="50%"
          scale={scale}
        ></IconTutorial>
      )}

      {isCancelButtonVisible && (
        <div className="contentCancelButton">
          <div
            onClick={() => {
              setCancelButtonPressed(true);
              setCancelButtonVisibility(false);
            }}
          >
            +
          </div>
          <i></i>
          <i></i>
        </div>
      )}

      <MenuButtons
        isMenuButtonVisible={isMenuButtonVisible}
        setMenuView={setMenuView}
      ></MenuButtons>
    </>
  );
};
