import React from "react";
import { Html } from "@react-three/drei";
function Skills({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      <Html>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "black",
          }}
        >
          HOLA
        </div>
      </Html>
    </group>
  );
}

export default Skills;
