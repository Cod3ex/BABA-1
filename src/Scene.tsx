import { useRef } from 'react';
import { Canvas, useFrame, type RootState } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function GridHorizon() {
  const gridRef = useRef<THREE.GridHelper>(null);

  // Ultra-slow structural animation tick to mimic a living background landscape
  useFrame((state: RootState) => {
    if (!gridRef.current) return;
    const time = state.clock.getElapsedTime();
    // Subtle rotation to change perspective paths gently over time
    gridRef.current.rotation.z = Math.sin(time * 0.05) * 0.08;
  });

  return (
    <group position={[0, -1.2, 0]} rotation={[Math.PI / 6, 0, 0]}>
      {/* Infinite technical grid map */}
      <gridHelper 
        ref={gridRef} 
        args={[30, 30, '#d4af37', '#111217']} 
        position={[0, 0, 0]} 
      />
      {/* Light atmospheric fog overlay boundary to blend background depth edges */}
    </group>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[0, 3, 2]} intensity={0.5} color="#d4af37" />
        
        <GridHorizon />
        
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  );
}
