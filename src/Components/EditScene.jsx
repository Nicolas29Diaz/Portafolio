import { CameraControls, OrbitControls } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { FloatButton } from "./FloatButton.jsx";
import { MeshFit } from "./MeshFit.jsx";
import { SceneConf } from "./SceneConf.jsx";
import useStore from "../Store/Store.js";
import { views } from "../Store/Store.js";
import { AxesHelper } from "three";
import { Html } from "@react-three/drei";
import { Scene3D } from "./3D_Models/Scene3D.jsx";
// import { Scene3D2 } from "./3D_Models/3D_Scene.jsx";
import {
  GizmoHelper,
  GizmoViewport,
  PivotControls,
  Grid,
  TransformControls,
} from "@react-three/drei";
export function EditScene() {
  const cameraControls = {
    SKILLS: {
      maxDist: 6, //Max distance dolly to the object focused
      minDist: 1, //Min distance dolly to the object focused
      currentDist: 1,
      currentDistMobile: 6,
      minAngle: Math.PI / 4,
      maxAngle: Math.PI / 2,
      minAzimuthAngle: -Math.PI / 2,
      maxAzimuthAngle: Math.PI / 2,
      coordCamera: { x: 0, y: 3.5, z: 0 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      dollySpeed: 0.5,
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [-9.7, 3.6, 6.4], //Mesh fit position
        size: [0.1, 0.5, 2], //Mesh fit size
        layer: 1, //Mesh fit layer
        rotation: [0, Math.PI / 5.5, 0],
      },
    },
    CHARACTER: {
      maxDist: 9, //Max distance dolly to the object focused
      minDist: 7, //Min distance dolly to the object focused
      currentDist: 9,
      minAngle: Math.PI / 3,
      maxAngle: Math.PI / 2,
      coordCamera: { x: 0, y: 0, z: 20 }, //Coordinates to posisionate the camera view
      speed: 0.7, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [0.5, 1, 0], //Mesh fit position
        size: [2, 2, 1], //Mesh fit size
        layer: 1, //Mesh fit layer
      },
    },
    INITIAL: {
      maxDist: 30, //Max distance dolly to the object focused
      minDist: 0, //Min distance dolly to the object focused
      currentDist: 7,
      minAngle: Math.PI / 3,
      maxAngle: Math.PI / 2,
      coordCamera: { x: 0, y: 0, z: 20 }, //Coordinates to posisionate the camera view
      speed: 1, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [3, 1, 0], //Mesh fit position
        size: [5, 5, 5], //Mesh fit size
        layer: 1, //Mesh fit layer
      },
    },
    CONTACT: {
      maxDist: 12, //Max distance dolly to the object focused
      minDist: 1, //Min distance dolly to the object focused
      currentDist: 3,
      currentDistMobile: 6,
      minAngle: Math.PI / 4,
      maxAngle: Math.PI / 2,
      coordCamera: { x: -5, y: 3.6, z: 3 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [5.8, 2, -10], //Mesh fit position
        size: [4, 4, 4], //Mesh fit size
        layer: 1, //Mesh fit layer
        rotation: [0, 0, 0],
      },
    },
    PROJECTS: {
      maxDist: 12, //Max distance dolly to the object focused
      minDist: 1, //Min distance dolly to the object focused
      currentDist: 3,
      currentDistMobile: 6,
      minAngle: Math.PI / 4,
      maxAngle: Math.PI / 2,
      coordCamera: { x: -5, y: 3.6, z: 3 }, //Coordinates to posisionate the camera view
      speed: 0, //Enable/Disable (1 or 0) orbits controls
      mesh: {
        ref: useRef(), //Mesh to center the camera view
        position: [11.5, 2.53, 3], //Mesh fit position
        size: [1, 4, 7], //Mesh fit size
        layer: 0, //Mesh fit layer
        rotation: [0, -(14 * Math.PI) / 180, 0],
      },
    },
  };
  const { showButtonStart, setShowButtonStart } = useStore();

  const refMesh = useRef();

  useEffect(() => {
    setShowButtonStart(false);
  }, []);

  //Para mapear el cameraViews y mostrarlos
  const meshFitComponents = Object.entries(cameraControls).map(
    ([view, data]) => (
      <MeshFit
        key={view} // Asegúrate de tener una clave única
        ref={data.mesh.ref}
        position={data.mesh.position}
        rotation={data.mesh?.rotation}
        size={data.mesh.size}
        layer={data.mesh.layer}
      />
    )
  );

  // const cameraControlRef = useRef();
  // useEffect(() => {
  //   const camera = cameraControlRef.current;
  //   let pos = {};
  //   camera.addEventListener("controlend", () => {
  //     pos = {
  //       x: camera._camera.position.x,
  //       y: camera._camera.position.y,
  //       z: camera._camera.position.z,
  //     };

  //     console.log("azimuthAngle: ", camera.azimuthAngle);
  //     console.log("polarAngle:", camera.polarAngle);
  //     console.log("distance:", camera.distance);
  //     console.log("Camera position", pos);
  //   });
  // }, []);

  return (
    <>
      {/* <CameraControls ref={cameraControlRef}></CameraControls> */}
      <SceneConf></SceneConf>
      <OrbitControls></OrbitControls>
      <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
        {/* <Escena></Escena> */}
        <Scene3D></Scene3D>
        {/* <Scene3D_2></Scene3D_2> */}
      </group>

      {/* <Grid></Grid> */}

      <PivotControls
        scale={5}
        disableScaling={false}
        annotations={true}
        // depthTest={false}
        onDragEnd={() => {
          console.log("refMesh.current");
        }}
      >
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]}></boxGeometry>
          <meshStandardMaterial
            color="red"
            transparent
            opacity={0.5}
          ></meshStandardMaterial>
        </mesh>
      </PivotControls>
     

      {/* <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper> */}
    </>
  );
}
