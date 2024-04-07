import { CameraControls } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";

import { FloatButton } from "./FloatButton.jsx";
import { MeshFit } from "./MeshFit.jsx";
import { SceneConf } from "./SceneConf.jsx";
import useStore from "../Store/Store.js";

import { Scene3D } from "./3D_Components/Scene3D.jsx";

export function Scene() {
  const cameraControls = {
    TV: {
      maxDist: 13, //Max distance dolly to the object focused
      minDist: 1, //Min distance dolly to the object focused
      currentDist: 13,
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
    CHARACTER: {
      maxDist: 9, //Max distance dolly to the object focused
      minDist: 7, //Min distance dolly to the object focused
      currentDist: 7,
      minAngle: Math.PI / 3,
      maxAngle: Math.PI / 2,
      coordCamera: { x: 0, y: 0, z: 20 }, //Coordinates to posisionate the camera view
      speed: 0.7, //Enable/Disable (1 or 0) orbits controls
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
      currentDist: 10,
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
    INITIAL: {
      maxDist: 15, //Max distance dolly to the object focused
      minDist: 0, //Min distance dolly to the object focused
      currentDist: 7,
      minAngle: Math.PI / 3,
      maxAngle: Math.PI / 2,
      coordCamera: { x: 0, y: 0, z: 20 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [3, 1, 0], //Mesh fit position
        size: [5, 5, 5], //Mesh fit size
        layer: 1, //Mesh fit layer
      },
    },
  };
  const { showButton, setShowButton, showButtonStart, setShowButtonStart } =
    useStore();

  //Current view of the camera
  const views = {
    TV: "TV",
    CHARACTER: "CHARACTER",
    PC: "PC",
    INITIAL: "INITIAL",
  };
  const [currentView, setCurrentView] = useState(views.INITIAL);

  let firstFit = true;

  const [minPolarAngle, setMinPolarAngle] = useState();
  const [maxPolarAngle, setMaxPolarAngle] = useState();
  const cameraControlRef = useRef();

  //Orbital controls
  const [speed, setSpeed] = useState();
  const [distMax, setDistMax] = useState();
  const [distMin, setDistMin] = useState();

  function initialConfig() {
    setMinPolarAngle(cameraControls.INITIAL.minAngle);
    setMaxPolarAngle(cameraControls.INITIAL.maxAngle);
    setDistMax(cameraControls.INITIAL.maxDist);
    setDistMin(cameraControls.INITIAL.minDist);
    setSpeed(cameraControls.INITIAL.speed);
  }

  const fitCamera = () => {
    const { maxDist, minDist, speed, maxAngle, minAngle, currentDist } =
      cameraControls[currentView];

    cameraControlRef.current.smoothTime = 0.3;
    cameraControlRef.current.fitToSphere(
      cameraControls[currentView].mesh.ref.current,
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

    if (firstFit) {
      console.log("FirstFit");
      const { currentDist } = cameraControls[currentView];
      cameraControlRef.current.distance = currentDist;
      firstFit = false;
    }
  };

  useEffect(() => {
    initialConfig();
    console.log(cameraControlRef.current);
  }, []);

  useEffect(() => {
    if (currentView === views.INITIAL) {
      console.log("INITIAL");
      // const intervalId = setInterval(movCameraToObject, 1);
      // setTimeout(() => {
      //   clearInterval(intervalId);
      //   setShowButton(true);
      // }, 1500);
    }

    if (currentView !== views.CHARACTER && currentView !== views.INITIAL) {
      console.log("CHARACTER");
      const intervalId = setInterval(movCameraToObject, 1);
      setTimeout(() => {
        clearInterval(intervalId);
        setShowButton(true);
      }, 1500);
    }

    fitCamera();

    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentView]);

  function movCameraToObject() {
    const currentCoordCamera = cameraControls[currentView].coordCamera;
    const currentMesh = cameraControls[currentView].mesh.ref.current.position;
    const { currentDist } = cameraControls[currentView];

    cameraControlRef.current.setLookAt(
      currentCoordCamera.x,
      currentCoordCamera.y,
      currentCoordCamera.z,
      currentMesh.x,
      currentMesh.y,
      currentMesh.z,
      true
    );

    cameraControlRef.current.distance = currentDist;
  }

  useEffect(() => {
    console.log(showButton);
    if (!showButton) {
      setCurrentView(views.CHARACTER);
    }
  }, [showButton]);

  useEffect(() => {
    if (!showButtonStart) {
      setCurrentView(views.INITIAL);
      fitCamera();
    } else {
      setCurrentView(views.CHARACTER);
    }
  }, [showButtonStart]);

  //Para mapear el cameraViews y mostrarlos
  const meshFitComponents = Object.entries(cameraControls).map(
    ([view, data]) => (
      <MeshFit
        key={view} // Asegúrate de tener una clave única
        ref={data.mesh.ref}
        position={data.mesh.position}
        size={data.mesh.size}
        layer={data.mesh.layer}
      />
    )
  );

  return (
    <>
      {/* Camera configuration */}
      <CameraControls
        ref={cameraControlRef}
        minPolarAngle={minPolarAngle}
        maxPolarAngle={maxPolarAngle}
        maxDistance={distMax}
        minDistance={distMin}
        // infinityDolly={false}
        truckSpeed={0}
        dollySpeed={speed ? speed : 0}
        polarRotateSpeed={speed ? speed : 0}
        azimuthRotateSpeed={speed ? speed : 0}
        // enabled={false}
      ></CameraControls>
      {/* Scene configuration */}
      <SceneConf></SceneConf>

      {/* Mesh fit camera targets */}
      <>{meshFitComponents}</>

      {/* Buttons configuration */}
      <FloatButton
        position={[10, 1, 0]}
        backgroundColor={"blue"}
        onClick={() => setCurrentView(views.TV)}
        text={"Move Camera"}
      />
      <FloatButton
        position={[-10, 1, 0]}
        backgroundColor={"White"}
        onClick={() => {
          setCurrentView(views.PC);
        }}
        text={"Move Camera"}
      />

      <FloatButton
        position={[0.2, 3.6, 0]}
        backgroundColor={"White"}
        onClick={() => setCurrentView(views.TV)}
        text={"Skills"}
      />

      <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <Scene3D />
        {/* <Model></Model> */}
      </group>
    </>
  );
}
