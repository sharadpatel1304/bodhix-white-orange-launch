import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = Math.random() * 4 + 0.5;
      const y = (Math.random() - 0.5) * 8;

      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;

      velocities[i] = Math.random() * 0.02 + 0.01;
    }

    return { positions, velocities };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const positionArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = positionArray[i3];
      const z = positionArray[i3 + 2];

      const angle = Math.atan2(z, x) + velocities[i];
      const radius = Math.sqrt(x * x + z * z);

      positionArray[i3] = Math.cos(angle) * radius;
      positionArray[i3 + 2] = Math.sin(angle) * radius;
      positionArray[i3 + 1] += velocities[i] * 0.3;

      if (positionArray[i3 + 1] > 4) {
        positionArray[i3 + 1] = -4;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#C26637"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const ParticleVortex = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [6, 2, 4], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleVortex;