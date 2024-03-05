import { CameraControls } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";

import { FloatButton } from "./FloatButton.jsx";
import { MeshFit } from "./MeshFit.jsx";
import { SceneConf } from "./SceneConf.jsx";
import IronManAnim from "./IronManAnim.jsx";
import useStore from "../Store/Store.js";

export function ThreeScene() {
  const { showButton, setShowButton } = useStore();

  //Current view of the camera
  const views = { TV: "TV", IRONMAN: "IRONMAN", PC: "PC" };
  const [currentView, setCurrentView] = useState(views.IRONMAN);
  const cameraControlRef = useRef();

  const speedMov = 0.7;

  //Properties of the current camera view
  const cameraViews = {
    TV: {
      maxDist: 20, //Max distance dolly to the object focused
      minDist: 5, //Min distance dolly to the object focused
      coordCamera: { x: 4, y: 0, z: 4 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [10, 0, 10], //Mesh fit position
        size: [1, 1, 1], //Mesh fit size
        layer: 0, //Mesh fit layer
      },
    },
    IRONMAN: {
      maxDist: 20, //Max distance dolly to the object focused
      minDist: 12, //Min distance dolly to the object focused
      coordCamera: { x: 0, y: 0, z: 0 }, //Coordinates to posisionate the camera view
      speed: speedMov, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [0, 2, 0], //Mesh fit position
        size: [1, 2, 1], //Mesh fit size
        layer: 1, //Mesh fit layer
        cube: true, //Other cube mesh
        cubeSize: [1, 2, 1], //Other cube size
        cubeVisible: true, //Other cube visible
      },
    },
    PC: {
      maxDist: 12, //Max distance dolly to the object focused
      minDist: 0, //Min distance dolly to the object focused
      coordCamera: { x: 0, y: 0, z: 0 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [-10, 0, -10], //Mesh fit position
        size: [1, 1, 1], //Mesh fit size
        layer: 0, //Mesh fit layer
      },
    },
  };

  //Orbital controls
  const [speed, setSpeed] = useState(1);
  const [distMax, setDistMax] = useState(cameraViews.IRONMAN.maxDist);
  const [distMin, setDistMin] = useState(cameraViews.IRONMAN.minDist);

  //Function to fitCameraView responsive
  const fitCamera = () => {
    const { maxDist, minDist, speed } = cameraViews[currentView];

    setDistMax(maxDist);
    setDistMin(minDist);
    setSpeed(speed);

    cameraControlRef.current.fitToSphere(
      cameraViews[currentView].mesh.ref.current,
      true,
      0,
      0,
      0,
      0
    );
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
    if (currentView !== views.IRONMAN) {
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

  //Cancel button hidde
  useEffect(() => {
    if (!showButton) {
      // orbitControls(1);
      setCurrentView(views.IRONMAN);
    }
  }, [showButton]);

  //Para mapear el cameraViews y mostrarlos
  const meshFitComponents = Object.entries(cameraViews).map(([view, data]) => (
    <MeshFit
      key={view} // Asegúrate de tener una clave única
      ref={data.mesh.ref}
      position={data.mesh.position || [0, 0, 0]}
      size={data.mesh.size || [1, 1, 1]}
      layer={data.mesh.layer || 0}
      {...(data.mesh.cube && { cube: data.mesh.cube })}
      {...(data.mesh.cubeSize && { cubeSize: data.mesh.cubeSize })}
      {...(data.mesh.cubeVisible && { cubeVisible: data.mesh.cubeVisible })}
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
        position={[10, 1, 10]}
        backgroundColor={"blue"}
        // onClick={(e) => focusCamera("tv")}
        onClick={() => setCurrentView(views.TV)}
        text={"Move Camera"}
      />
      <FloatButton
        position={[-10, 1, -10]}
        backgroundColor={"White"}
        onClick={() => setDistMax(80)}
        text={"Reset Camera"}
      />

      <FloatButton
        position={[0, 4, 0]}
        backgroundColor={"White"}
        // onClick={toggleButtonVisibility}
        text={"Skills"}
      />

      <group rotation={[0, -Math.PI / 2, 0]}>
        <IronManAnim />
      </group>

      {/* Camera configuration */}
      <CameraControls
        ref={cameraControlRef}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
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
