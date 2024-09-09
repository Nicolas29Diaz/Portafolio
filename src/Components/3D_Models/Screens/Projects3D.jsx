/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Projects3D({ props, children, visible = true }) {
  const { nodes, materials } = useGLTF("/Models/Screens/ProjectsScreen.glb");
  return (
    <group {...props} dispose={null} visible={visible}>
      <group position={[0.58, 2.478, 7.26]} rotation={[Math.PI / 2, 0, -3.138]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials["MetalSilla.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_1.geometry}
          material={materials.TV_Projects}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_2.geometry}
          material={materials.Screen}
        >
          {children}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["MetalSilla.001"]}
          position={[0, -0.145, 2.485]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Models/Screens/ProjectsScreen.glb");
