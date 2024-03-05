import { CameraControls } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";

import { FloatButton } from "./FloatButton.jsx";
import { MeshFit } from "./MeshFit.jsx";
import { SceneConf } from "./SceneConf.jsx";
import Animations from "./Animations.jsx";
import useStore from "../Store/Store.js";
import { useFrame } from "@react-three/fiber";

export function ThreeScene() {
  const { showButton, setShowButton } = useStore();

  //Current view of the camera
  const views = { TV: "TV", IRONMAN: "IRONMAN", PC: "PC" };
  const [currentView, setCurrentView] = useState(views.IRONMAN);
  const [minPolarAngle, setMinPolarAngle] = useState(views.IRONMAN.minAngle);
  const [maxPolarAngle, setMaxPolarAngle] = useState(views.IRONMAN.maxAngle);
  const cameraControlRef = useRef();

  const speedMov = 0.7;

  //Properties of the current camera view
  const cameraViews = {
    TV: {
      maxDist: 13, //Max distance dolly to the object focused
      minDist: 1, //Min distance dolly to the object focused
      minAngle: Math.PI / 4,
      maxAngle: Math.PI / 2,
      coordCamera: { x: 4, y: 0, z: 4 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [10, 0, 0], //Mesh fit position
        size: [1, 1, 1], //Mesh fit size
        layer: 0, //Mesh fit layer
      },
    },
    IRONMAN: {
      maxDist: 20, //Max distance dolly to the object focused
      minDist: 18, //Min distance dolly to the object focused
      minAngle: Math.PI / 3,
      maxAngle: Math.PI / 2.5,
      coordCamera: { x: 0, y: 0, z: 20 }, //Coordinates to posisionate the camera view
      speed: speedMov, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [0, 1, 0], //Mesh fit position
        size: [1, 2, 1], //Mesh fit size
        layer: 0, //Mesh fit layer
      },
    },
    PC: {
      maxDist: 13, //Max distance dolly to the object focused
      minDist: 1, //Min distance dolly to the object focused
      minAngle: Math.PI / 4,
      maxAngle: Math.PI / 2,
      coordCamera: { x: -1, y: 1, z: -1 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [-10, 0, 0], //Mesh fit position
        size: [1, 1, 1], //Mesh fit size
        layer: 0, //Mesh fit layer
      },
    },
  };

  //Orbital controls
  const [speed, setSpeed] = useState(1);
  const [distMax, setDistMax] = useState(cameraViews.IRONMAN.maxDist);
  const [distMin, setDistMin] = useState(cameraViews.IRONMAN.minDist);

  useFrame(() => {
    console.log(cameraControlRef.current.distance);
  });
  //Function to fitCameraView responsive
  const fitCamera = () => {
    console.log("Fir");

    const { maxDist, minDist, speed, maxAngle, minAngle } =
      cameraViews[currentView];

    cameraControlRef.current.fitToSphere(
      cameraViews[currentView].mesh.ref.current,
      true,
      0,
      0,
      0,
      0
    );

    setDistMax(maxDist);
    setDistMin(minDist);
    setMaxPolarAngle(maxAngle);
    setMinPolarAngle(minAngle);
    setSpeed(speed);
  };

  //Move the camera to a point and set its look
  function movCamera() {
    const { coordCamera, mesh } = cameraViews[currentView];

    cameraControlRef.current.setLookAt(
      coordCamera.x,
      coordCamera.y,
      coordCamera.z,
      mesh.ref.current.position.x,
      mesh.ref.current.position.y,
      mesh.ref.current.position.z,
      true
    );
  }

  //Introduction anamiation
  async function Intro() {
    // cameraControlRef.current.dolly(-22);
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
    if (currentView !== views.IRONMAN) {
      const intervalId = setInterval(movCamera, 1);
      setTimeout(() => {
        clearInterval(intervalId);
        setShowButton(true);
      }, 2000);
    } else {
      const intervalId = setInterval(movCamera, 1);
      setTimeout(() => {
        clearInterval(intervalId);
      }, 500);
    }

    fitCamera();

    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentView]);

  //Cancel button hidde
  useEffect(() => {
    if (!showButton) {
      // orbitControls(1);
      // cameraControlRef.current.distance = cameraViews.IRONMAN.minDist;
      setCurrentView(views.IRONMAN);
      cameraControlRef.current.distance = cameraViews.IRONMAN.minDist;
    }
  }, [showButton]);

  //Para mapear el cameraViews y mostrarlos
  const meshFitComponents = Object.entries(cameraViews).map(([view, data]) => (
    <MeshFit
      key={view} // Asegúrate de tener una clave única
      ref={data.mesh.ref}
      position={data.mesh.position}
      size={data.mesh.size}
      layer={data.mesh.layer}
    />
  ));
  ////////////////////////////////

  return (
    <>
      {/* Scene configuration */}
      <SceneConf></SceneConf>

      {/* Mesh fit camera targets */}
      <>{meshFitComponents}</>

      {/* Buttons configuration */}
      <FloatButton
        position={[10, 1, 0]}
        backgroundColor={"blue"}
        // onClick={(e) => focusCamera("tv")}
        onClick={() => setCurrentView(views.TV)}
        text={"Move Camera"}
      />
      <FloatButton
        position={[-10, 1, 0]}
        backgroundColor={"White"}
        onClick={() => setCurrentView(views.PC)}
        text={"Move Camera"}
      />

      <FloatButton
        position={[0.2, 3.6, 0]}
        backgroundColor={"White"}
        // onClick={toggleButtonVisibility}
        text={"Skills"}
      />

      <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <Animations />
      </group>

      {/* Camera configuration */}
      <CameraControls
        ref={cameraControlRef}
        minPolarAngle={minPolarAngle}
        maxPolarAngle={maxPolarAngle}
        maxDistance={distMax}
        minDistance={distMin}
        // infinityDolly={false}
        truckSpeed={speed}
        dollySpeed={speed}
        polarRotateSpeed={speed}
        azimuthRotateSpeed={speed}
        // enabled={false}
      ></CameraControls>
    </>
  );
}
