import { CameraControls } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";

import { FloatButton } from "./FloatButton.jsx";
import { MeshFit } from "./MeshFit.jsx";
import { SceneConf } from "./SceneConf.jsx";

import useStore from "../Store/Store.js";

export function ThreeScene() {
  const { showButton, setShowButton } = useStore();

  //Current view of the camera
  const [currentView, setCurrentView] = useState("character");
  const cameraControlRef = useRef();

  //Orbital controls
  const [speed, setSpeed] = useState(1);
  const [maxDistance, setmaxDistance] = useState(50);
  const [minDistance, setminDistance] = useState(10);

  //Max/Min distance dolly to the object focused
  const maxDistCharacter = 50;
  const minDistCharacter = 10;

  const maxDistTV = 12;
  const minDistTV = 0;

  const maxDistPC = 80;
  const minDistPC = 10;

  //Mesh to center the camera view
  const meshFitCameraCharacter = useRef();
  const meshFitCameraTV = useRef();
  const meshFitCameraPC = useRef();

  //Coordinates to posisionate the camera view
  const coordCameraCharacter = { x: 0, y: 0, z: 0 };
  const coordCameraTV = { x: 4, y: 0, z: 4 };
  const coordCameraPC = { x: 0, y: 0, z: 0 };

  //Function to fitCameraView responsive
  const fitCamera = () => {
    switch (currentView) {
      case "character":
        // meshFitCameraCharacter.current.layers.set(1);
        cameraControlRef.current.fitToSphere(
          meshFitCameraCharacter.current,
          true,
          0,
          0,
          0,
          0
        );
        break;
      case "tv":
        // meshFitCameraTV.current.layers.set(1);
        cameraControlRef.current.fitToSphere(
          meshFitCameraTV.current,
          true,
          0,
          0,
          0,
          0
        );
        break;
      default:
    }
  };

  function movCamera() {
    switch (currentView) {
      case "tv":
        orbitControls(0, maxDistTV, minDistTV);
        cameraControlRef.current.setLookAt(
          coordCameraTV.x,
          coordCameraTV.y,
          coordCameraTV.z,
          meshFitCameraTV.current.position.x,
          meshFitCameraTV.current.position.y,
          meshFitCameraTV.current.position.z,
          true
        );
        break;
      case "pc":
        break;
      case "character":
        break;
      default:
    }
  }

  //Introduction anamiation
  async function Intro() {
    cameraControlRef.current.dolly(-22);
    cameraControlRef.current.smoothTime = 0.5;
    fitCamera();
  }

  //Introduction anamiation
  useEffect(() => {
    // cameraControlRef.current.max; //No recuerdo que es
    Intro();
  }, []);

  //Responsive fit camera
  useEffect(() => {
    if (currentView === "tv") {
      const intervalId = setInterval(movCamera, 1);
      setTimeout(() => {
        clearInterval(intervalId);
        setShowButton(true);
      }, 2000);
    }
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentView]);

  //orbitControls properties
  function orbitControls(speed, max = 50, min = 10) {
    setSpeed(speed);
    setmaxDistance(max);
    setminDistance(min);
  }

  //Cancel button hidde
  useEffect(() => {
    if (!showButton) {
      orbitControls(1);
      setCurrentView("character");
      orbitControls(1);
    }
  }, [showButton]);

  ////////////////////////////////
  return (
    <>
      {/* Camera configuration */}
      <CameraControls
        ref={cameraControlRef}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        maxDistance={maxDistance}
        minDistance={minDistance}
        infinityDolly={false}
        truckSpeed={0}
        dollySpeed={speed}
        polarRotateSpeed={speed}
        azimuthRotateSpeed={speed}
      ></CameraControls>

      {/* Scene configuration */}
      <SceneConf></SceneConf>

      {/* Mesh fit camera targets */}
      <>
        <MeshFit
          ref={meshFitCameraCharacter}
          position={[0, 0, 0]}
          size={[2, 2, 2]}
          layer={1}
        ></MeshFit>
        <MeshFit
          ref={meshFitCameraPC}
          position={[-10, 0, -10]}
          size={[1, 1, 1]}
          layer={1}
        ></MeshFit>
        <MeshFit
          ref={meshFitCameraTV}
          position={[10, 0, 10]}
          size={[1, 1, 1]}
          layer={0}
        ></MeshFit>
      </>

      {/* Buttons configuration */}
      <FloatButton
        position={[10, 1, 10]}
        backgroundColor={"blue"}
        // onClick={(e) => focusCamera("tv")}
        onClick={() => setCurrentView("tv")}
        text={"Move Camera"}
      />
      <FloatButton
        position={[-10, 1, -10]}
        backgroundColor={"White"}
        // onClick={ResetCamera}
        text={"Reset Camera"}
      />
      <FloatButton
        position={[-2, 3, 0]}
        backgroundColor={"Orange"}
        // onClick={toggleButtonVisibility}
        text={"Shake Camera"}
      />
    </>
  );
}
