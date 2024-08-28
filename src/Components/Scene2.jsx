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

  const updatedCameraControls = () => {
    const camera = cameraControlRef.current;
    const current = cameraControls[currentView];

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

    if (view === views.CHARACTER || view === views.INITIAL) {
      setShowCancelButton(false);
    } else {
      setShowCancelButton(true);
    }
  };

  useEffect(() => {
    moveCameraToObject();
    updatedCameraControls();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentView, cameraControls]);

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

  return (
    <>
      {/* Camera configuration */}
      <CameraControls ref={cameraControlRef} truckSpeed={0} />

      {/* Mesh fit camera targets */}
      {/* <>{meshFitComponents}</> */}

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
          position={[0.5, 2.53, 6]}
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
