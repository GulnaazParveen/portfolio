import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh castShadow receiveShadow>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 3]} />
          <color attach="background" args={["hotpink"]} />
          <Text ref={textRef} fontSize={1} color="#555" position={[0, 0, 0]}>
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default React.memo(Cube);
