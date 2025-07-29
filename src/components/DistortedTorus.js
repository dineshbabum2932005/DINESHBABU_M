import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";

const DistortedTorus = () => {
  const mesh = useRef();

  // Slow rotation
  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * 0.4;
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh ref={mesh} scale={1.8}>
        {/* torusKnot args: radius, tube, radialSeg, tubularSeg */}
        <torusKnotGeometry args={[1, 0.4, 128, 32]} />
        <MeshDistortMaterial
          color="#8b5cf6"        // Tailwind's indigo‑500
          emissive="#c084fc"     // Lighter glow
          distort={0.4}          // Amount of wobble
          speed={2}              // Wobble speed
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
};

export default DistortedTorus;
