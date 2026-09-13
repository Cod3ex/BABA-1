import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCard({ position, color, index, activeCard, setActiveCard }: {
  position: [number, number, number];
  color: string;
  index: number;
  activeCard: number | null;
  setActiveCard: (idx: number | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Smoothly interpolate the 3D position and rotation based on physics frame ticks
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // 1. Kinetic floating lift tracking calculations
    const hoverOffset = hovered ? 0.3 : 0;
    const activeOffset = activeCard === index ? 0.5 : 0;
    
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      position[1] + Math.sin(time + index) * 0.1 + hoverOffset + activeOffset,
      0.1
    );
    
    meshRef.current.position.z = THREE.MathUtils.lerp(
      meshRef.current.position.z,
      position[2] + (hovered || activeCard === index ? 0.8 : 0),
      0.1
    );

    // 2. Continuous premium studio rotation physics
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      state.pointer.x * 0.4 + (activeCard === index ? Math.PI * 2 : 0),
      0.08
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -state.pointer.y * 0.3,
      0.08
    );
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => { e.stopPropagation(); setActiveCard(activeCard === index ? null : index); }}
      castShadow
      receiveShadow
    >
      {/* Heavy-duty 3D rounded rectangular slab geometry matching premium visual tokens */}
      <boxGeometry args={[1.5, 2.2, 0.08]} />
      
      {/* High-end physical material defining light refraction, metal boundaries, and glass gloss */}
      <meshPhysicalMaterial
        color={hovered || activeCard === index ? color : '#181920'}
        roughness={0.05}
        metalness={0.9}
        clearcoat={1.0}
        clearcoatRoughness={0.05}
        transmission={0.3}
        thickness={0.5}
        ior={1.5}
      />
    </mesh>
  );
}

function SceneContent() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { viewport } = useThree();

  const networkPillars = [
    { color: '#d4af37', x: -1.8 },
    { color: '#00f0ff', x: 0 },
    { color: '#6366f1', x: 1.8 }
  ];

  return (
    <Center scale={[viewport.width / 6, viewport.height / 6, 1]}>
      {/* Subtle floor shadow plane to catch casting lights dynamically */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.8, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.4} />
      </mesh>

      {networkPillars.map((pillar, idx) => (
        <FloatingCard
          key={idx}
          index={idx}
          position={[pillar.x, 0, 0]}
          color={pillar.color}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      ))}
    </Center>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 bg-[#040508]">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={['#040508']} />
        
        {/* Deep atmospheric boardroom ambient light settings */}
        <ambientLight intensity={0.15} />
        
        {/* Premium multi-directional key points generating razor-sharp metallic lighting lines */}
        <directionalLight 
          position={[5, 8, 5]} 
          intensity={2.5} 
          castShadow 
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-5, 4, -2]} intensity={0.6} color="#00f0ff" />
        <pointLight position={[0, -2, 3]} intensity={1.5} color="#d4af37" />
        
        <SceneContent />
      </Canvas>
    </div>
  );
}
