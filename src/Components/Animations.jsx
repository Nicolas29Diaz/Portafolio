/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/Models/Animations.glb 
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Animations(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./Models/Animations.glb");
  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
    actions[names[1]].reset().fadeIn(0.5).play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="IronManModel"
            geometry={nodes.IronManModel.geometry}
            material={materials["Iron_Man1.002"]}
            skeleton={nodes.IronManModel.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./Models/Animations.glb");