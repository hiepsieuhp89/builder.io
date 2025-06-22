"use client";
import { OrbitControls, Preload, Trail, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Earth = () => {
  try {
    // Try loading the GLTF first
    const earth = useGLTF("./planet/scene.gltf");
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
          object={earth.scene}
          scale={2.5}
          position-y={0}
          rotation-y={0}
        />
      </group>
    );
  } catch (error) {
    console.error("Error loading Earth GLTF model:", error);
    // Fallback to a simple Earth-like sphere
    return <EarthFallback />;
  }
};

// Fallback Earth component with simple geometry
const EarthFallback = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial 
          color="#4ade80"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      {/* Add some atmosphere effect */}
      <mesh>
        <sphereGeometry args={[2.7, 32, 32]} />
        <meshBasicMaterial 
          color="#87ceeb" 
          transparent 
          opacity={0.1}
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
