import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import {
  FloatingCube,
  FloatingOctahedron,
  FloatingTorus,
  ParticleField,
} from "./FloatingGeometry";

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas className="w-full h-full">
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} />

          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#ff00ff"
          />

          {/* Floating Geometries */}
          <FloatingCube position={[-5, 2, -2]} color="#00ffff" size={1.2} />
          <FloatingCube
            position={[6, -1, -3]}
            color="#ff00ff"
            size={0.8}
            rotationSpeed={0.015}
          />
          <FloatingOctahedron position={[3, 3, -1]} color="#00ff88" size={1} />
          <FloatingOctahedron
            position={[-3, -2, -4]}
            color="#ff4444"
            size={1.5}
            rotationSpeed={0.008}
          />
          <FloatingTorus position={[0, -3, -2]} color="#ffff00" size={1.2} />
          <FloatingTorus
            position={[-6, 1, -5]}
            color="#8800ff"
            size={0.9}
            rotationSpeed={0.025}
          />

          {/* Additional scattered elements */}
          <FloatingCube
            position={[8, 4, -6]}
            color="#00ddff"
            size={0.6}
            rotationSpeed={0.02}
          />
          <FloatingOctahedron
            position={[-8, -3, -1]}
            color="#ff6600"
            size={0.7}
          />

          {/* Particle field background */}
          <ParticleField />

          {/* Auto-rotate controls (very slow) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.2}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
