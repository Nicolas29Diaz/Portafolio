import React, { useEffect } from "react";

export const MeshFit = React.forwardRef(
  ({ position = [0, 0, 0], size = [1, 1, 1], layer = 0, cube = true, cubeSize = [1, 1, 1], cubeVisible = true}, ref) => {
    useEffect(() => {
      if (ref && ref.current) {
        ref.current.layers.set(layer);
      }
    }, [ref]);

    return (
      <>
        <mesh position={position} ref={ref} visible={true}>
          <boxGeometry args={size}></boxGeometry>
          <meshStandardMaterial
            color="orange"
            transparent
            opacity={0.5}
          ></meshStandardMaterial>
        </mesh>

        {/* {cube && (
          <mesh position={position} visible={cubeVisible}>
            <boxGeometry args={cubeSize}></boxGeometry>
            <meshStandardMaterial></meshStandardMaterial>
          </mesh>
        )} */}
      </>
    );
  }
);
