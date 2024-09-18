import React, { useEffect } from "react";
import { useState } from "react";

export const FloatObjects = ({
  isCancelButtonVisible,
  setStartButtonPressed,
  isStartButtonPressed,
  progress,
  isStartButtonVisible,
  windowWidth,
  isMenuButtonVisible,
  setCancelButtonPressed,
  setCancelButtonVisibility,
  setStartButtonVisibility,
  setMenuView,
  cameraFocus,
}) => {
  const [showMoveLogo, setShowMoveLogo] = useState(false);

  useEffect(() => {
    console.log("isStartButtonPressed", isStartButtonPressed);
    if (isStartButtonPressed) {
      setTimeout(() => {
        setShowMoveLogo(true);
      }, 3500);
    }
  }, [isStartButtonPressed]);

  return (
    <>
      {showMoveLogo && <div className="logo-canMove"></div>}

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

      {isStartButtonVisible && (
        <div className="containerStartButton">
          <button
            onClick={() => {
              setStartButtonPressed(true);
            }}
          >
            Start
          </button>
        </div>
      )}

      {/* {isStartButtonVisible && (
        <div
          className={
            windowWidth > 1000 ? "vintage-overlay-1" : "vintage-overlay-2"
          }
        ></div>
      )} */}

      {isMenuButtonVisible && (
        <div
          className="menu-button-container"
          onClick={() => setMenuView(true)}
        >
          <img src="./Images/Icons/Menu3.webp" alt="MenuIcon" />
        </div>
      )}
    </>
  );
};
