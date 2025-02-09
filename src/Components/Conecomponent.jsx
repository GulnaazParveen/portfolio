
import React, { useMemo } from 'react'
import * as THREE from 'three'; // Import THREE
const Conecomponent = () => {

  // UseMemo for geometry and material
  const geometry = useMemo(() => new THREE.ConeGeometry(3, 4, 8), []);
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#1BB3D1" }),
    []
  );

  return <mesh geometry={geometry} material={material} />;
}

export default Conecomponent
