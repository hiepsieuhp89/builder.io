"use client";
import {
  Line,
  OrbitControls,
  Preload,
  Trail,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Earth = () => {
  const meshRef = useRef();

  // Call useGLTF at the top level - it handles loading states internally
  const earth = useGLTF("./planet/scene.gltf");

  // Always call useFrame at the top level
  useFrame((state) => {
    if (earth?.scene) {
      earth.scene.rotation.y = state.clock.getElapsedTime() * 0.1;
    } else if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  // If earth model is not loaded yet or has issues, show fallback
  if (!earth?.scene) {
    return <EarthFallback meshRef={meshRef} />;
  }

  return (
    <group>
      {/* <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color="turquoise"
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="turquoise"
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, Math.PI / 3]}
        speed={6.5}
      />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={7}
      /> */}
      <primitive
        ref={meshRef}
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </group>
  );
};

// Improved Fallback Earth component with better textures
const EarthFallback = ({ meshRef }) => {
  return (
    <group>
      {/* Main Earth sphere - blue oceans */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial
          color="#0369a1" // Ocean blue
          roughness={0.6}
          metalness={0.1}
          emissive="#0c1445"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Continents layer */}
      <mesh>
        <sphereGeometry args={[2.51, 32, 32]} />
        <meshStandardMaterial
          color="#8b5a3c" // Brown/earth color for continents
          transparent
          opacity={0.7}
          roughness={0.9}
          metalness={0.0}
        />
      </mesh>

      {/* Green vegetation layer */}
      <mesh>
        <sphereGeometry args={[2.515, 16, 16]} />
        <meshStandardMaterial
          color="#166534" // Forest green
          transparent
          opacity={0.4}
          roughness={0.95}
        />
      </mesh>

      {/* Atmosphere effect */}
      <mesh>
        <sphereGeometry args={[2.7, 32, 32]} />
        <meshBasicMaterial
          color="#87ceeb" // Sky blue
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
};

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <Trail
        local
        width={5}
        length={6}
        color={new THREE.Color(2, 1, 10)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Add lighting */}
        <ambientLight intensity={0.15} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        {/* <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer> */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

// Preload the GLTF file
useGLTF.preload("/planet/scene.gltf");

export default EarthCanvas;
