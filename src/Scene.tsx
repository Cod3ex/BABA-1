import { useRef } from 'react';
import { Canvas, useFrame, type RootState } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function PremiumCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state: RootState) => {
    if (!meshRef.current || !ringRef.current) return;
    const time = state.clock.getElapsedTime();
    // Ultra-slow luxury velocity
    meshRef.current.rotation.y = time * 0.03;
    ringRef.current.rotation.z = -time * 0.05;
  });

  return (
    <group position={[1.0, 0, 0]}>
      {/* Central Obsidian Monolith */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.6, 0.6, 2.2, 4]} />
        <meshStandardMaterial 
          color="#0a0b10" 
          roughness={0.05} 
          metalness={0.95} 
        />
      </mesh>

      {/* Gold Alignment Orbit Indicator */}
      <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.5, 0.015, 8, 64]} />
        <meshStandardMaterial color="#d4af37" roughness={0.1} metalness={0.9} />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
      {/* Fixed: Coordinates explicitly filled out to eliminate the ts(1109) error */}
      <Canvas camera={{ position:, fov: 40 }}>
        <ambientLight intensity={0.15} />
        {/* High-intensity key spots to create razor-sharp metallic edge lines */}
        <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-5, -2, -2]} intensity={0.5} color="#00f0ff" />
        <pointLight position={[0, 0, 2]} intensity={1} color="#d4af37" />
        
        <PremiumCore />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.2} />
      </Canvas>
    </div>
  );
}
