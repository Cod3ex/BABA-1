import { useRef } from 'react';
import { Canvas, useFrame, type RootState } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function StudioHorizon() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state: RootState) => {
    if (!gridRef.current) return;
    const time = state.clock.getElapsedTime();
    gridRef.current.rotation.z = Math.sin(time * 0.04) * 0.05;
  });

  return (
    <group position={[0, -1.0, 0]} rotation={[Math.PI / 5, 0, 0]}>
      {/* High-contrast technical architectural line mappings */}
      <gridHelper 
        ref={gridRef} 
        args={[35, 35, '#121316', '#e4e4e7']} 
        position={[0, 0, 0]} 
      />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 opacity-25 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, 5, 2]} intensity={0.5} color="#121316" />
        
        <StudioHorizon />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  );
}
