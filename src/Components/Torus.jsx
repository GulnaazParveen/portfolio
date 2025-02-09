import React, { useMemo } from "react";
import * as THREE from 'three'; // Import THREE
const Torus = () => {
  const geometry = useMemo(() => new THREE.TorusGeometry(3.6, 1, 16, 100), []);
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#FC26B4" }),
    []
  );

  return <mesh geometry={geometry} material={material} />;
};

export default Torus;
