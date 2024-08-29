import { CameraControls, Html } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { FloatButton } from "./FloatButton.jsx";
import { MeshFit } from "./MeshFit.jsx";
import { SceneConf } from "./SceneConf.jsx";
import useStore from "../Store/Store.js";
import { views } from "../Store/Store.js";
import { Scene3D } from "./3D_Components/3D_Scene.jsx";
import { useThree } from "@react-three/fiber";

import { getCameraControls } from "../Store/cameraControls.js";

export function Scene2() {
  const timeToChangeView = 1500;

  const cameraControlRef = useRef();
  const [cameraControls, setCameraControls] = useState(getCameraControls());
  const [currentView, setCurrentView] = useState(views.INITIAL);
  const {
    showCancelButton,
    setShowCancelButton,
    showButtonStart,
    setCameraFocus,
    setShowButtonStart,
    showFloatButtons,
    setShowFloatButtons,
    setCameraControls2,
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

    if (currentView === views.CHARACTER) {
      camera.distance = current.dolly.distance;
    }
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
  };

  const changeView = (view) => {
    setCameraFocus(view);
    setCurrentView(view);
    setShowFloatButtons(false);
  };

  //In this function the camera is moved to the object, but
  //the movemente is repeated until the camera is in the correct position
  const fixedMoveCameraToObject = () => {
    if (currentView !== views.CHARACTER && currentView !== views.INITIAL) {
      const intervalId = setInterval(moveCameraToObject, 1);
      setTimeout(() => {
        clearInterval(intervalId);
        setShowCancelButton(true);
      }, timeToChangeView);
    } else {
      moveCameraToObject();
    }
  };

  useEffect(() => {
    moveCameraToObject();
    updateControlsCamera();
  }, [cameraControls]);

  useEffect(() => {
    fixedMoveCameraToObject();
    updateControlsCamera();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentView]);

  useEffect(() => {
    if (!showButtonStart) {
      setCurrentView(views.CHARACTER);
      setTimeout(() => {
        setShowFloatButtons(true);
      }, 1000);
    }
  }, [showButtonStart]);

  useEffect(() => {
    if (!showCancelButton && !showButtonStart) {
      setCameraFocus(views.CHARACTER);
      setCurrentView(views.CHARACTER);
      setShowFloatButtons(true);
    }
  }, [showCancelButton]);

  useEffect(() => {
    const camera = cameraControlRef.current;
    let pos = {};
    camera.addEventListener("controlend", () => {
      pos = {
        x: camera._camera.position.x,
        y: camera._camera.position.y,
        z: camera._camera.position.z,
      };

      // console.log("azimuthAngle: ", camera.azimuthAngle);
      // console.log("polarAngle:", camera.polarAngle);
      console.log("distance:", camera.distance);
      console.log("Camera position", pos);
      // camera.distance = 0;
    });
  }, []);

  return (
    <>
      {/* Camera configuration */}
      <CameraControls ref={cameraControlRef} truckSpeed={1} />

      <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <Scene3D></Scene3D>
      </group>

      <>
        <FloatButton
          view={views.CONTACT}
          changeView={changeView}
          position={[5, 2.53, -7.668]}
          rotation={[0, -Math.PI / 5, Math.PI / 4]}
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
