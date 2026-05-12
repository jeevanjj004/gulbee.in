import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const pointsRef = useRef();
  
  const particlesCount = 3000; // Reduced for better performance
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 50;
    }
    return positions;
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.1;
    }
  });
  
  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#5865f2" // Changed to match your theme (blue)
        size={0.25}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GlowingOrb() {
  const orbRef = useRef();
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 2;
      orbRef.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.3) * 1.5;
      orbRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      orbRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });
  
  return (
    <mesh ref={orbRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#5865f2" // Changed to blue theme
        emissive="#4b6cb7"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.3}
        transparent
        opacity={0.6}
      />
      <pointLight intensity={1.0} distance={30} color="#5865f2" />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 35], fov: 75 }}
        style={{ 
          background: 'linear-gradient(135deg, #0a0a1a 0%, #0f0f2a 50%, #1a1a3a 100%)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <ambientLight intensity={0.3} />
        <GlowingOrb />
        <ParticleField />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}