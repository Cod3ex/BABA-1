import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function BusinessPlexus() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current || !ring1Ref.current || !ring2Ref.current || !ring3Ref.current) return;
    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y = time * 0.05;

    ring1Ref.current.rotation.x = time * 0.2;
    ring1Ref.current.rotation.y = time * 0.1;

    ring2Ref.current.rotation.y = -time * 0.15;
    ring2Ref.current.rotation.z = time * 0.1;

    ring3Ref.current.rotation.x = -time * 0.1;
    ring3Ref.current.rotation.z = -time * 0.2;
  });

  return (
    <group ref={groupRef} position={[1.2, 0, 0]}>
      <mesh scale={0.6}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#00f0ff" roughness={0.1} metalness={0.9} emissive="#002b3d" />
      </mesh>

      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.2, 0.04, 16, 100]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.2} metalness={0.8} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.7, 0.05, 16, 100]} />
        <meshStandardMaterial color="#1e3a8a" roughness={0.3} metalness={0.9} />
      </mesh>

      <mesh ref={ring3Ref} rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[1.2, 0.03, 16, 100]} />
        <meshStandardMaterial color="#0dd3c5" roughness={0.1} metalness={0.9} />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(
                Array.from({ length: 300 }, () => (Math.random() - 0.5) * 8)
              ),
              3,
            ]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#38bdf8" transparent opacity={0.6} sizeAttenuation />
      </points>
    </group>
  );
}

export default function Scene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -5, -5]} intensity={0.8} color="#00f0ff" />
        <pointLight position={[0, 3, 2]} intensity={0.5} />
        
        <BusinessPlexus />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
