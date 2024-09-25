import React, { useEffect } from "react";
import { useState } from "react";
import { showMoveIconTime } from "../../Constants/Times.js";
// Styles (CSS)
import "../../StylesVariables/Floats/CancelButton.css"; // Cancel button styles
import MenuButtons from "./MenuButtons/MenuButtons.jsx";

export const FloatObjects = ({
  isCancelButtonVisible,
  isStartButtonPressed,
  isMenuButtonVisible,
  setCancelButtonPressed,
  setCancelButtonVisibility,
  setMenuView,
}) => {
  const [showMoveLogo, setShowMoveLogo] = useState(false);

  useEffect(() => {
    if (isStartButtonPressed) {
      setTimeout(() => {
        setShowMoveLogo(true);
      }, showMoveIconTime);
    }
  }, [isStartButtonPressed]);

  return (
    <>
      {showMoveLogo && (
        <div className="logo-canMove">
          <img src="./Images/Icons/Move.webp" alt="MoveIcon" />
        </div>
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
