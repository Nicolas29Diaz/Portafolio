import { CameraControls } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { FloatButton } from "./Floats/FloatButton.jsx";

import useStore from "../Store/Store.js";
import { views } from "../Store/Store.js";

import {
  breakPointWidth,
  getCameraControls,
  truckSpeed,
} from "../Constants/cameraControls.js";

import {
  fixedMoveCameraToObjectTime,
  enableCameraMovementTime,
  showFloatButtonsTime,
} from "../Constants/Times.js";

export function Scene({ moveInitialCamera }) {
  const cameraControlRef = useRef();
  const [cameraControls, setCameraControls] = useState(getCameraControls());
  const [currentView, setCurrentView] = useState(views.INITIAL);
  const [firstViewToCharacter, setFirstViewToCharacter] = useState(true);
  const [enableCameraMovement, setEnableCameraMovement] = useState(false);
  const [initialView, setInitialView] = useState(true);
  const {
    isCancelButtonVisible,
    setCancelButtonVisibility,
    isCancelButtonPressed,
    setCancelButtonPressed,

    setCameraFocus,
    cameraFocus,

    showFloatButtons,
    setShowFloatButtons,
    setCameraControls2,
    isMenuView,
    setMenuView,
    menuOption,
    setMenuOption,
    setMenuButtonVisible,

    isStartButtonPressed,
    setStartButtonVisibility,
    setStartButtonPressed,
  } = useStore();

  const moveCameraToObject = () => {
    const currentCoordCamera = cameraControls[currentView].coordCamera;
    const currentCoordLook = cameraControls[currentView].coordLook;

    cameraControlRef.current.setLookAt(
      currentCoordCamera.x,
      currentCoordCamera.y,
      currentCoordCamera.z,
      currentCoordLook.x,
      currentCoordLook.y,
      currentCoordLook.z,
      true
    );
  };

  const handleResize = () => {
    const updatedCameraControls = getCameraControls();
    setCameraControls(updatedCameraControls);
  };

  const updateControlsCamera = () => {
    const camera = cameraControlRef.current;
    const current = cameraControls[currentView];

    // if (currentView === views.CHARACTER ) {
    //   camera.distance = current.dolly.distance;
    // }
    // camera.distance = current.dolly.distance;
    // console.log("distanceUpdte", current.dolly.distance);

    camera.dollySpeed = current.dolly.speed;
    camera.minDistance = current.dolly.min;
    camera.maxDistance = current.dolly.max;

    camera.polarRotateSpeed = current.rotation.polar.speed;
    camera.maxPolarAngle = current.rotation.polar.max;
    camera.minPolarAngle = current.rotation.polar.min;

    camera.azimuthRotateSpeed = current.rotation.azimuth.speed;
    camera.minAzimuthAngle = current.rotation.azimuth.min;
    camera.maxAzimuthAngle = current.rotation.azimuth.max;

    if (firstViewToCharacter) {
      camera.polarRotateSpeed = 0;
      camera.azimuthRotateSpeed = 0;
      setFirstViewToCharacter(false);

      setTimeout(() => {
        camera.polarRotateSpeed = current.rotation.polar.speed;
        camera.azimuthRotateSpeed = current.rotation.azimuth.speed;
      }, enableCameraMovementTime);
    }
  };

  const changeView = (view, floatButton = false) => {
    setCameraFocus(view);
    setCurrentView(view);
    setShowFloatButtons(floatButton);
  };

  //In this function the camera is moved to the object, but
  //the movemente is repeated until the camera is in the correct position
  const fixedMoveCameraToObject = () => {
    if (currentView !== views.CHARACTER && currentView !== views.INITIAL) {
      const intervalId = setInterval(moveCameraToObject, 100);

      setTimeout(() => {
        clearInterval(intervalId);
      }, fixedMoveCameraToObjectTime);
    } else {
      moveCameraToObject();
    }
  };

  const updateCancelButtonVisibility = () => {
    if (currentView !== views.CHARACTER && currentView !== views.INITIAL) {
      setCancelButtonVisibility(true);
    } else {
      setCancelButtonVisibility(false);
    }
  };

  useEffect(() => {
    updateControlsCamera();
    moveCameraToObject();
  }, [cameraControls]);

  useEffect(() => {
    updateControlsCamera();

    if (currentView === views.CHARACTER) {
      setMenuButtonVisible(true);
    } else {
      setMenuButtonVisible(false);
    }

    if (currentView === views.INITIAL) {
      if (window.innerWidth >= 1440) {
        cameraControlRef.current.setLookAt(1.3, 3.5, 6, 3.3, 1.2, 0, false);
      } else if (window.innerWidth >= 1024) {
        cameraControlRef.current.setLookAt(1.8, 3.5, 6, 2.8, 1.2, 0, false);
      } else {
        cameraControlRef.current.setLookAt(0.9, 3.5, 4, 1.9, 1.2, 0, false);
      }
    } else {
      fixedMoveCameraToObject();
      setTimeout(() => {
        updateCancelButtonVisibility();
      }, fixedMoveCameraToObjectTime);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentView]);

  useEffect(() => {
    if (isStartButtonPressed) {
      setStartButtonVisibility(false);
      changeView(views.CHARACTER, false);
      setTimeout(() => {
        setShowFloatButtons(true);
      }, showFloatButtonsTime);
      setFirstViewToCharacter(true);
    }
  }, [isStartButtonPressed]);

  useEffect(() => {
    if (isCancelButtonPressed) {
      setCancelButtonPressed(false);
      setCancelButtonVisibility();
      changeView(views.CHARACTER, true);
    }
  }, [isCancelButtonPressed]);

  //MOSTAR COORDENADAS CAMARA

  // useEffect(() => {
  //   const camera = cameraControlRef.current;
  //   let pos = {};
  //   camera.addEventListener("controlend", () => {
  //     pos = {
  //       x: camera._camera.position.x,
  //       y: camera._camera.position.y,
  //       z: camera._camera.position.z,
  //     };

  //     // console.log("azimuthAngle: ", camera.azimuthAngle);
  //     // console.log("polarAngle:", camera.polarAngle);
  //     console.log("distance:", camera.distance);
  //     console.log("Camera position", pos);
  //     // camera.distance = 0;
  //   });
  // }, []);

  useEffect(() => {
    if (isMenuView) {
      // console.log("isMenuView", isMenuView);
      changeView(views.MENU);
      setMenuView(false);
    }
  }, [isMenuView]);

  useEffect(() => {
    if (menuOption !== "") {
      // console.log("menuOption", menuOption);
      // setCancelButtonVisibility(false);
      // setCameraFocus(menuOption);
      // setCurrentView(menuOption);
      // setShowFloatButtons(false);
      setCancelButtonVisibility(false);
      changeView(menuOption);
      // console.log("menuOption", menuOption);
      setMenuOption("");
    }
  }, [menuOption]);

  useEffect(() => {
    if (moveInitialCamera && currentView === views.INITIAL) {
      console.log("moveInitialCamera");
      moveCameraToObject();
      setInitialView(false);
    }
  }, [moveInitialCamera]);

  return (
    <>
      {/* Camera configuration */}
      <CameraControls ref={cameraControlRef} truckSpeed={truckSpeed} />

      <>
        <FloatButton
          view={views.CONTACT}
          changeView={changeView}
          position={[0, 2.1, -6]}
          rotation={[0, 0, Math.PI / 4]}
        />
        <FloatButton
          view={views.SKILLS}
          changeView={changeView}
          position={[-6.85, 4, -2.37]}
          rotation={[0, 1, Math.PI / 4]}
        />
        <FloatButton
          view={views.PROJECTS}
          changeView={changeView}
          position={[0.5, 2.53, 7]}
          rotation={[0, 0, Math.PI / 4]}
        />
        <FloatButton
          view={views.ABOUT}
          changeView={changeView}
          position={[8, 2.8, 0.65]}
          rotation={[0, Math.PI / 2, Math.PI / 4]}
        />
      </>
    </>
  );
}
