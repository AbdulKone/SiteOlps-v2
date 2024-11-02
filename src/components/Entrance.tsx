import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Html } from '@react-three/drei';
import * as THREE from 'three';

const Entrance = ({ onEnter }) => {
  const courtRef = useRef();

  useFrame(({ clock }) => {
    if (courtRef.current) {
      courtRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[0, 10, 0]} intensity={0.5} />
      
      <group>
        <Box
          ref={courtRef}
          args={[4, 6, 4]}
          onClick={onEnter}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            color="#4a4a4a"
            roughness={0.7}
            metalness={0.3}
          />
        </Box>

        <Html position={[0, -4, 0]} center>
          <div className="text-white text-center pointer-events-none">
            <p className="text-2xl font-bold mb-2">Olympeus Record</p>
            <p className="text-sm animate-pulse">Click to Enter</p>
          </div>
        </Html>
      </group>
    </>
  );
};

export default Entrance;