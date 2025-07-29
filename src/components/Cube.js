import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.6;
    mesh.current.rotation.y += delta * 0.6;
  });
  return (
    <mesh ref={mesh} scale={[1.8, 1.8, 1.8]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff6b6b" />
    </mesh>
  );
};

export default Cube;