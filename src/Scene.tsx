import { useRef } from 'react';
import { Canvas, useFrame, type RootState } from '@react-three/fiber'; // 1. Fixed: Explicit type-only import
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AllianceTable() {
  const groupRef = useRef<THREE.Group>(null);
  
  // 7 core industry chairs represented as professional monolithic nodes
  const chairs = [
    { name: 'Real Estate', color: '#00f0ff', angle: 0 },
    { name: 'Financial Services', color: '#6366f1', angle: (Math.PI * 2) / 7 },
    { name: 'Legal Counsel', color: '#38bdf8', angle: ((Math.PI * 2) / 7) * 2 },
    { name: 'IT & Managed Services', color: '#0dd3c5', angle: ((Math.PI * 2) / 7) * 3 },
    { name: 'Trades & Construction', color: '#f59e0b', angle: ((Math.PI * 2) / 7) * 4 },
    { name: 'Marketing & Media', color: '#ec4899', angle: ((Math.PI * 2) / 7) * 5 },
    { name: 'Healthcare Systems', color: '#10b981', angle: ((Math.PI * 2) / 7) * 6 },
  ];

  // Smooth rotation to represent structural support and shared momentum
  useFrame((state: RootState) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.04;
  });

  return (
    <group ref={groupRef} position={[0.8, -0.4, 0]}>
      {/* 1. The Central Accountability Table Base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <cylinderGeometry args={[2.0, 2.2, 0.1, 32]} />
        <meshStandardMaterial color="#11131c" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* 2. Central Core Light - Representing Shared Business Knowledge */}
      <mesh position={[0, 0.01, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
        <meshStandardMaterial color="#00f0ff" emissive="#004c66" roughness={0.1} />
      </mesh>

      {/* 3. Industry Chairs - Monoliths Standing Side-by-Side */}
      {chairs.map((chair, index) => {
        const radius = 1.8;
        const x = Math.cos(chair.angle) * radius;
        const z = Math.sin(chair.angle) * radius;

        return (
          <group key={index} position={[x, 0.3, z]}>
            {/* The Professional Node Monolith */}
            <mesh>
              <boxGeometry args={[0.2, 0.8, 0.2]} />
              <meshStandardMaterial 
                color={chair.color} 
                roughness={0.2} 
                metalness={0.9}
                emissive={chair.color}
                emissiveIntensity={0.15}
              />
            </mesh>
            {/* Small glowing crown representing an exclusive industry seat */}
            <mesh position={[0, 0.45, 0]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshStandardMaterial color="#ffffff" emissive={chair.color} emissiveIntensity={0.8} />
            </mesh>
          </group>
        );
      })}

      {/* 4. Referral Pathways - Tracing Lines Interconnecting Everyone */}
      {/* Fixed: Replaced <line> with <lineSegments> to avoid JSX naming collision with browser HTML line tags */}
      {chairs.map((chairStart, i) => 
        chairs.map((chairEnd, j) => {
          if (i >= j) return null;
          const r = 1.8;
          const x1 = Math.cos(chairStart.angle) * r;
          const z1 = Math.sin(chairStart.angle) * r;
          const x2 = Math.cos(chairEnd.angle) * r;
          const z2 = Math.sin(chairEnd.angle) * r;

          const points = [new THREE.Vector3(x1, 0.3, z1), new THREE.Vector3(x2, 0.3, z2)];
          const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

          return (
            <lineSegments key={`${i}-${j}`} geometry={lineGeometry}>
              <lineBasicMaterial color="#38bdf8" transparent opacity={0.15} linewidth={1} />
            </lineSegments>
          );
        })
      )}
    </group>
  );
}

export default function Scene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
      <Canvas camera={{ position: [0, 2.5, 4.5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        {/* Crisp downward lights highlighting the professional table environment */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, 5, 5]} intensity={1.0} color="#00f0ff" />
        <directionalLight position={[-5, 2, -5]} intensity={0.5} color="#6366f1" />
        <pointLight position={[0, 2, 0]} intensity={0.8} color="#00f0ff" />
        
        <AllianceTable />
        
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 4} />
      </Canvas>
    </div>
  );
}
