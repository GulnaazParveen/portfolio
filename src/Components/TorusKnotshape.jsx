import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from 'three'; // Import THREE
const TorusKnotshape = () => {
  const ref = useRef();

  // UseMemo for geometry and material
  const geometry = useMemo(
    () => new THREE.TorusKnotGeometry(0.5, 0.2, 300, 20),
    []
  );
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#1BB3D1" }),
    []
  );

  // Apply rotation and position animations
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return <mesh ref={ref} geometry={geometry} material={material} />;
};

export default TorusKnotshape;
