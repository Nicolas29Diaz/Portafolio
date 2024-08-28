import { Canvas, useThree } from "@react-three/fiber";
import { CameraControls, Html, OrbitControls, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Esta es una opción para calcular la distancia de la cámara al objeto
//paso a paso, si más adelante quiero mejorar le movimiento, sobre todo,
// en el responsive, puedo hacerlo así. Otra opción es intentar cambiar el fov, no la distancia
// de la cámara como tal.

function calculateDistanceToFitObject(object, camera, fitOffset = 2) {
  const boundingBox = new THREE.Box3().setFromObject(object);
  const size = boundingBox.getSize(new THREE.Vector3());

  const maxSize = Math.max(size.x, size.y, size.z);

  const aspect = camera.aspect;

  const fov = camera.fov * (Math.PI / 180);

  // Considerar el aspecto de la cámara para calcular la distancia
  const distance = maxSize / (2 * Math.tan(fov / 2)) / aspect;

  return distance * fitOffset;
}

function TV({ position, screenColor = "black" }) {
  const mesh = useRef();
  const { camera } = useThree();

  const handleClick = () => {
    // const distance = calculateDistanceToFitObject(mesh.current, camera);
    // const direction = new THREE.Vector3(0, 0, 1); // Hacia adelante en el eje Z

    // // Mover la cámara hacia adelante en relación con el TV
    // const newCameraPosition = new THREE.Vector3()
    //   .copy(mesh.current.position)
    //   .add(direction.multiplyScalar(distance));

    // camera.position.set(
    //   newCameraPosition.x,
    //   newCameraPosition.y,
    //   newCameraPosition.z
    // );
    // camera.lookAt(mesh.current.position);

    const fov = camera.fov;
    console.log("FOV: ", fov);
    camera.fov = 80;
    camera.updateProjectionMatrix();
    console.log("FOV: ", camera.fov);
  };

  return (
    <>
      <mesh position={position} rotation={[0, 0, 0]} ref={mesh}>
        <boxGeometry args={[4, 2.5, 0.2]} />
        <meshBasicMaterial attachArray="material" color={screenColor} />
      </mesh>
      <Html position={[position[0], position[1], position[2]]}>
        <button
          onClick={handleClick}
          style={{ padding: "5px", fontSize: "12px" }}
        >
          Go to TV
        </button>
      </Html>
    </>
  );
}

export default function SceneCopy() {
  return (
    <>
      <group position={[0, 1, 0]}>
        <Text>HOLA</Text>
      </group>

      <CameraControls></CameraControls>
      <TV position={[0, 0, 0]} />
    </>
  );
}
