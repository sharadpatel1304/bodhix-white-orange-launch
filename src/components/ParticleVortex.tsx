import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const { positions, velocities, radii } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);
    const radii = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      // Create a tighter orbit around center (the buddha)
      const radius = Math.random() * 2.5 + 1.8;
      const y = (Math.random() - 0.5) * 4;

      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * radius;

      // Much slower velocities
      velocities[i] = Math.random() * 0.002 + 0.001;
      radii[i] = radius;
    }

    return { positions, velocities, radii };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const positionArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = positionArray[i3];
      const z = positionArray[i3 + 2];

      // Orbital motion around center
      const currentAngle = Math.atan2(z, x);
      const newAngle = currentAngle + velocities[i];
      
      // Slightly oscillating radius for dynamic effect
      const baseRadius = radii[i];
      const oscillation = Math.sin(time * 0.5 + i * 0.1) * 0.2;
      const currentRadius = baseRadius + oscillation;

      positionArray[i3] = Math.cos(newAngle) * currentRadius;
      positionArray[i3 + 2] = Math.sin(newAngle) * currentRadius;
      
      // Gentle vertical drift
      positionArray[i3 + 1] += velocities[i] * 0.15;

      if (positionArray[i3 + 1] > 2) {
        positionArray[i3 + 1] = -2;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
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
        size={0.02}
        color="#C26637"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
};

const ParticleVortex = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [4, 1, 3], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleVortex;