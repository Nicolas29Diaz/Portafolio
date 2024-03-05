import * as THREE from "three";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
// Let's make the marker into a component so that we can abstract some shared logic
export function FloatButton({ text, backgroundColor, position, ...props }) {
  const ref = useRef();
  // This holds the local occluded state
  const [isOccluded, setOccluded] = useState();
  const [isInRange, setInRange] = useState();
  const isVisible = isInRange && !isOccluded;
  // Test distance
  const vec = new THREE.Vector3();
  useFrame((state) => {
    const range =
      state.camera.position.distanceTo(ref.current.getWorldPosition(vec)) <=
      1000;
    if (range !== isInRange) setInRange(range);
  });
  return (
    <group ref={ref} position={position}>
      <Html
        distanceFactor={10}
        // 3D-transform contents
        // transform
        // Hide contents "behind" other meshes
        occlude
        // Tells us when contents are occluded (or not)
        onOcclude={setOccluded}
        // We just interpolate the visible state into css opacity and transforms
        style={{
          transition: "all 0.2s",
          opacity: isVisible ? 1 : 0,
          transform: `scale(${isVisible ? 1 : 0.25})`,
        }}
      >
        <div style={{ display: "flex", alignContent:"center", gap:"0.2rem" }}>
          <button
            className="floatinButton"
            style={{ backgroundColor: backgroundColor }}
            {...props}
          >
            +
          </button>
          <h1>{text ?? "Hola"}</h1>
        </div>
      </Html>
    </group>
  );
}
