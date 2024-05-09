"use client";
import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  ContactShadows,
  SpotLight,
  useDepthBuffer,
  Sphere,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { Vector3 } from "three";
import { EffectComposer, GodRays, Bloom } from "@react-three/postprocessing";

function Model({ open, hinge, ...props }) {
  const group = useRef();
  // Load model
  const { nodes, materials } = useGLTF("/mac-draco.glb");
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered],
  );
  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.1,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 4 : 0,
      0.1,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.1,
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.1,
    );
  });
  // The view was auto-generated by: https://github.com/pmndrs/gltfjsx
  // Events and spring animations were added afterwards
  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
    >
      {console.log("materials", materials)}
      {console.log("nodes", nodes)}
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials["1976logo"]}
            geometry={nodes["logo"].geometry}
            position={[
              -0.008667165413498878, -0.17309677600860596, 0.7195109128952026,
            ]}
            rotation={[
              1.5669386850871616, -4.3542756229220016e-8, 3.1415926098787423,
            ]}
            scale={[0.4, 0.4, 0.4]}
          />
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh
            material={materials["screen.001"]}
            geometry={nodes["Cube008_2"].geometry}
          />
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0,
      ),
      0.1,
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      depthBuffer={depthBuffer}
      {...props}
    />
  );
}

const LaptopCanvas = () => {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -25], fov: 35 }}>
      {/* <MovingSpot
        color="#0c8cbf"
        position={[3, 3, 2]}
      />
      <MovingSpot
        color="#b00c3f"
        position={[1, 3, 0]}
      /> */}
      <three.pointLight
        position={[9.5, 5.5, 0.41]}
        intensity={1}
        color={props.open.to([0, 1], ["#f0f0f0", "#35211e"])}
      />
      {/* <Sphere position={[9.5, 5.5, 0.41]} args={[0.08, 64, 64]}>
        <meshBasicMaterial color={[212, 103, 69]} toneMapped={false} />
      </Sphere> */}
      <group
        rotation={[0, Math.PI, 0]}
        onClick={(e) => (e.stopPropagation(), setOpen(!open))}
      >
        <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.325])} />
      </group>
      <Environment preset="city" />
      <ContactShadows
        position={[0, -4.5, 0]}
        opacity={0.5}
        scale={20}
        blur={1.75}
        far={4.5}
      />
      {/* <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer> */}
    </Canvas>
  );
};

export default LaptopCanvas;
