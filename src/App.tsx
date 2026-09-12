import { useRef, useMemo } from 'react';
import { Canvas, useFrame, RootState } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 40; // Number of business nodes in the local alliance

  // Generate random positions for our network nodes
  const [positions, lineGeometry] = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    // Build standard lines connecting successive business nodes together
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    return [posArray, geometry];
  }, []);

  // Subtle pulsing rotation to simulate a living, growing market network
  useFrame((state: RootState) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.03;
    groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
  });

  return (
    <group ref={groupRef} position={[1.0, 0, 0]}>
      {/* 1. The Lines - Showing the strong referrals connecting businesses together */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.3} linewidth={1} />
      </lineSegments>

      {/* 2. The Nodes - Individual business chairs sitting in the local alliance */}
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} position={[positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial 
            color={i % 4 === 0 ? "#00f0ff" : "#6366f1"} // Bright highlights for core partners
            emissive={i % 4 === 0 ? "#003f44" : "#1a103c"} 
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Scene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -5, -2]} intensity={0.5} color="#00f0ff" />
        <pointLight position={[0, 0, 2]} intensity={0.5} />
        
        <NetworkNodes />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
