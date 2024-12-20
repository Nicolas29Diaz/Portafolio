/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { helmetAnimationSpeed } from "../../../Constants/Times.js";

export function Chair({
  props,
  startAnimation,
  helmetResetPosition,
  visible = true,
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Models/Chair.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (startAnimation) {
      // console.log("Chair useEffect");
      const helmet = actions[names[0]];
      helmet.fadeIn(0.5).play().timeScale = helmetAnimationSpeed;
      helmet.setLoop(THREE.LoopOnce);
      helmet.clampWhenFinished = true;
    }

    // if (helmetResetPosition) {
    //   const helmet = actions[names[0]];
    //   helmet.reset().stop().play();
    //   helmet.setLoop(THREE.LoopOnce);
    //   helmet.clampWhenFinished = true;
    //   helmet.timeScale = 0;
    //   helmet.time = helmet.getClip().duration;
    // }
  }, [actions, helmetResetPosition, startAnimation]);

  return (
    <group ref={group} {...props} dispose={null} visible={visible}>
      <group name="Scene">
        <mesh
          name="Silla"
          castShadow
          receiveShadow
          geometry={nodes.Silla.geometry}
          material={materials["Silla2.001"]}
          position={[0, 0.344, 0.157]}
          scale={[0.758, 0.751, 0.489]}
        >
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials["MetalSilla.001"]}
            position={[0, -0.151, -0.065]}
            rotation={[-0.032, 0, 0]}
            scale={[0.468, 0.769, 0.931]}
          >
            <mesh
              name="Cylinder025"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder025.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.878, 0.066, -0.664]}
              rotation={[1.603, 0, 0]}
              scale={[0.096, 0.062, 0.059]}
            />
            <mesh
              name="Cylinder026"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder026.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.458, 0.066, -0.664]}
              rotation={[1.603, 0, 0]}
              scale={[0.096, 0.062, 0.059]}
            >
              <mesh
                name="Cable2_About001"
                castShadow
                receiveShadow
                geometry={nodes.Cable2_About001.geometry}
                material={materials.Cable2Skills}
                position={[4.749, -55.455, 17.875]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[29.248, 29.248, 35.317]}
              >
                <mesh
                  name="Cylinder021"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder021.geometry}
                  material={materials["MetalSilla.001"]}
                  position={[-5.9, 0.591, -1.257]}
                  rotation={[Math.PI / 2, 0, -1.171]}
                  scale={[0.032, 0.014, 0.032]}
                />
              </mesh>
              <mesh
                name="Cable2_About002"
                castShadow
                receiveShadow
                geometry={nodes.Cable2_About002.geometry}
                material={materials.Cable2Projects}
                position={[0.309, -55.455, 17.875]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[29.248, 29.248, 35.317]}
              >
                <mesh
                  name="Cylinder031"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder031.geometry}
                  material={materials["MetalSilla.001"]}
                  position={[-2.832, 0.987, 8.925]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.038, 0.032, 0.038]}
                />
              </mesh>
            </mesh>
            <mesh
              name="Cylinder027"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder027.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.061, 0.066, -0.664]}
              rotation={[1.603, 0, 0]}
              scale={[0.096, 0.062, 0.059]}
            >
              <mesh
                name="Cable2_Projects001"
                castShadow
                receiveShadow
                geometry={nodes.Cable2_Projects001.geometry}
                material={materials.Cable2About}
                position={[35.504, -8.5, -18.477]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[29.248, 29.248, 35.317]}
              >
                <mesh
                  name="Cylinder029"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder029.geometry}
                  material={materials["MetalSilla.001"]}
                  position={[5.554, 0.392, -2.364]}
                  rotation={[Math.PI / 2, 0, 1.529]}
                />
              </mesh>
            </mesh>
          </mesh>
          <group
            name="Plane006"
            position={[0.002, 1.261, -1.161]}
            rotation={[1.485, 0, 0]}
            scale={[1.058, 0.921, 0.864]}
          >
            <mesh
              name="Mesh004"
              castShadow
              receiveShadow
              geometry={nodes.Mesh004.geometry}
              material={materials["Silla2.001"]}
            />
            <mesh
              name="Mesh004_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh004_1.geometry}
              material={materials["Silla1.001"]}
            />
            <mesh
              name="Almohada001"
              castShadow
              receiveShadow
              geometry={nodes.Almohada001.geometry}
              material={materials["Silla2.001"]}
              position={[0, -0.145, -0.543]}
              rotation={[-1.468, 0, 0]}
              scale={[0.669, 0.203, 0.353]}
            />
            <mesh
              name="Cable1_Projects001"
              castShadow
              receiveShadow
              geometry={nodes.Cable1_Projects001.geometry}
              material={materials.Cable1About}
              position={[1.486, -0.042, 0.307]}
              rotation={[-1.484, 0, 0]}
              scale={[1.248, 1.54, 2.222]}
            >
              <mesh
                name="Cylinder024"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder024.geometry}
                material={materials["MetalSilla.001"]}
                position={[-0.961, -0.006, -0.07]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.065, 0.054, 0.065]}
              />
              <mesh
                name="Cylinder028"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder028.geometry}
                material={materials["MetalSilla.001"]}
                position={[5.559, 0.187, -2.245]}
                rotation={[Math.PI / 2, 0, 1.529]}
              />
            </mesh>
            <mesh
              name="Cylinder022"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder022.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.018, -0.197, 0.303]}
              rotation={[0.086, 0, 0]}
              scale={[0.081, 0.12, 0.1]}
            >
              <mesh
                name="Cable1_About001"
                castShadow
                receiveShadow
                geometry={nodes.Cable1_About001.geometry}
                material={materials.Cable1Skills}
                position={[0.197, -23.322, 11.728]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[15.331, 15.331, 18.513]}
              >
                <mesh
                  name="Cylinder020"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder020.geometry}
                  material={materials["MetalSilla.001"]}
                  position={[-5.866, -0.091, -1.364]}
                  rotation={[Math.PI / 2, 0, -1.171]}
                  scale={[0.065, 0.029, 0.065]}
                />
              </mesh>
              <mesh
                name="Cable1_About002"
                castShadow
                receiveShadow
                geometry={nodes.Cable1_About002.geometry}
                material={materials.Cable1Projects}
                position={[-3.436, -23.322, 11.728]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[15.331, 15.331, 18.513]}
              >
                <mesh
                  name="Cylinder030"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder030.geometry}
                  material={materials["MetalSilla.001"]}
                  position={[-2.726, 0.516, 8.925]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={[0.065, 0.054, 0.065]}
                />
              </mesh>
            </mesh>
            <mesh
              name="Cylinder023"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder023.geometry}
              material={materials["MetalSilla.001"]}
              position={[-0.312, -0.198, 0.312]}
              rotation={[0.086, 0, 0]}
              scale={[0.088, 0.13, 0.109]}
            />
            <mesh
              name="SoporteCasco001"
              castShadow
              receiveShadow
              geometry={nodes.SoporteCasco001.geometry}
              material={materials["Casco1.001"]}
              position={[0.015, 1.367, -1.346]}
              rotation={[-1.403, 0, 0]}
              scale={[0.862, 1.082, 1.522]}
            >
              <mesh
                name="CilindroCasco001"
                castShadow
                receiveShadow
                geometry={nodes.CilindroCasco001.geometry}
                material={nodes.CilindroCasco001.material}
                position={[0, -0.161, -0.909]}
                rotation={[-1.638, 0, -Math.PI / 2]}
                scale={[0.102, 0.409, 0.102]}
              >
                <group
                  name="Sphere003"
                  position={[-1.629, 0, 9.951]}
                  rotation={[0, 0, Math.PI / 2]}
                  scale={[2.36, 9.774, 10.79]}
                >
                  <mesh
                    name="Sphere015"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere015.geometry}
                    material={materials["Casco1.001"]}
                  />
                  <mesh
                    name="Sphere015_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere015_1.geometry}
                    material={materials["Casco2.001"]}
                  />
                </group>
              </mesh>
            </mesh>
          </group>
          <group
            name="Silla004"
            position={[-0.993, 0.308, 0]}
            scale={[0.136, 1, 1]}
          >
            <mesh
              name="Plane013"
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials["Silla2.001"]}
            />
            <mesh
              name="Plane013_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane013_1.geometry}
              material={materials["Silla1.001"]}
            />
          </group>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/Models/Chair.glb");
