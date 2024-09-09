/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
export function Character({
  props,
  introAnimation,
  sitAnimation,
  visible = true,
  dissolveEyes,
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Models/Character.glb");
  const { actions, names } = useAnimations(animations, group);

  const [fadeFactor, setFadeFactor] = useState(0);
  const [fading, setFading] = useState(false);
  // Configura un efecto de interpolación suave entre los colores
  const colorInicial = new THREE.Color("#2A2A2A");
  const colorFinal = new THREE.Color("white");
  const currentColor = colorInicial.clone().lerp(colorFinal, fadeFactor); // Interpolación suave

  useEffect(() => {
    if (sitAnimation) {
      const sit = actions[names[0]];
      actions[names[1]].fadeOut(0.5);
      sit.reset().fadeIn(0.5).play();
      sit.setLoop(THREE.LoopOnce);
      sit.clampWhenFinished = true;
    }

    if (introAnimation) {
      actions[names[1]].play();
    }
  }, [introAnimation, sitAnimation, actions, names]);

  // Usamos `useFrame` para actualizar el fadeFactor solo cuando está en transición
  useFrame(() => {
    if (fading && fadeFactor < 1) {
      setFadeFactor(fadeFactor + 0.008); // Se disuelve de negro a blanco
    } else if (fadeFactor >= 1 && fading) {
      setFading(false); // Detiene la transición cuando el fade ha terminado
    }
  });

  useEffect(() => {
    if (dissolveEyes) {
      setFading(true);
    }
  }, [dissolveEyes]);

  return (
    <group ref={group} {...props} dispose={null} visible={visible}>
      <group name="Scene">
        <group
          name="Character"
          position={[0, 0, 0.786]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group name="Brazo1001">
            <skinnedMesh
              name="Cube020"
              geometry={nodes.Cube020.geometry}
              material={materials["Piel.001"]}
              skeleton={nodes.Cube020.skeleton}
            />
            <skinnedMesh
              name="Cube020_1"
              geometry={nodes.Cube020_1.geometry}
              material={materials["Shirt.001"]}
              skeleton={nodes.Cube020_1.skeleton}
            />
            <skinnedMesh
              name="Cube020_2"
              geometry={nodes.Cube020_2.geometry}
              material={materials["Manga.001"]}
              skeleton={nodes.Cube020_2.skeleton}
            />
          </group>
          <group name="Brazo2001">
            <skinnedMesh
              name="Cube022"
              geometry={nodes.Cube022.geometry}
              material={materials["Piel.001"]}
              skeleton={nodes.Cube022.skeleton}
            />
            <skinnedMesh
              name="Cube022_1"
              geometry={nodes.Cube022_1.geometry}
              material={materials["Shirt.001"]}
              skeleton={nodes.Cube022_1.skeleton}
            />
            <skinnedMesh
              name="Cube022_2"
              geometry={nodes.Cube022_2.geometry}
              material={materials["Manga.001"]}
              skeleton={nodes.Cube022_2.skeleton}
            />
          </group>
          <skinnedMesh
            name="Cabeza001"
            geometry={nodes.Cabeza001.geometry}
            material={materials["Piel.001"]}
            skeleton={nodes.Cabeza001.skeleton}
          />
          <skinnedMesh
            name="Cejas001"
            geometry={nodes.Cejas001.geometry}
            material={materials["Fade2.001"]}
            skeleton={nodes.Cejas001.skeleton}
          />
          <skinnedMesh
            name="Ojos001"
            geometry={nodes.Ojos001.geometry}
            skeleton={nodes.Ojos001.skeleton}
          >
            <meshStandardMaterial
              color={currentColor} // El color interpolado se aplica aquí
              transparent={true} // Activa la transparencia
            />
          </skinnedMesh>
          <group name="Pelo001">
            <skinnedMesh
              name="Sphere009"
              geometry={nodes.Sphere009.geometry}
              material={materials["Fade1.001"]}
              skeleton={nodes.Sphere009.skeleton}
            />
            <skinnedMesh
              name="Sphere009_1"
              geometry={nodes.Sphere009_1.geometry}
              material={materials["Fade2.001"]}
              skeleton={nodes.Sphere009_1.skeleton}
            />
            <skinnedMesh
              name="Sphere009_2"
              geometry={nodes.Sphere009_2.geometry}
              material={materials["Fade3.001"]}
              skeleton={nodes.Sphere009_2.skeleton}
            />
          </group>
          <group name="Piernas001">
            <skinnedMesh
              name="Cube023"
              geometry={nodes.Cube023.geometry}
              material={materials["Piel.001"]}
              skeleton={nodes.Cube023.skeleton}
            />
            <skinnedMesh
              name="Cube023_1"
              geometry={nodes.Cube023_1.geometry}
              material={materials["jean.001"]}
              skeleton={nodes.Cube023_1.skeleton}
            />
            <skinnedMesh
              name="Cube023_2"
              geometry={nodes.Cube023_2.geometry}
              material={materials["Medias.001"]}
              skeleton={nodes.Cube023_2.skeleton}
            />
          </group>
          <group name="Tenis001">
            <skinnedMesh
              name="Cube025"
              geometry={nodes.Cube025.geometry}
              material={materials["jean.001"]}
              skeleton={nodes.Cube025.skeleton}
            />
            <skinnedMesh
              name="Cube025_1"
              geometry={nodes.Cube025_1.geometry}
              material={materials["Cordones.001"]}
              skeleton={nodes.Cube025_1.skeleton}
            />
            <skinnedMesh
              name="Cube025_2"
              geometry={nodes.Cube025_2.geometry}
              material={materials["TenisBase.001"]}
              skeleton={nodes.Cube025_2.skeleton}
            />
            <skinnedMesh
              name="Cube025_3"
              geometry={nodes.Cube025_3.geometry}
              material={materials["Tenis2.001"]}
              skeleton={nodes.Cube025_3.skeleton}
            />
            <skinnedMesh
              name="Cube025_4"
              geometry={nodes.Cube025_4.geometry}
              material={materials["Tenis3.001"]}
              skeleton={nodes.Cube025_4.skeleton}
            />
          </group>
          <group name="Torzo2002">
            <skinnedMesh
              name="Cube031"
              geometry={nodes.Cube031.geometry}
              material={materials["Shirt.001"]}
              skeleton={nodes.Cube031.skeleton}
            />
            <skinnedMesh
              name="Cube031_1"
              geometry={nodes.Cube031_1.geometry}
              material={materials["jean.001"]}
              skeleton={nodes.Cube031_1.skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/Character.glb");
