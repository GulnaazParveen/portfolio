import React, { useRef } from 'react'
import {  PerspectiveCamera, RenderTexture } from '@react-three/drei'
import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Cube = () => {
    const textRef=useRef();
    useFrame(
        (state)=>
        (textRef.current.position.x=Math.sin(state.clock.elapsedTime)*2)
    ) ;
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 3]}
                    />
                    <color attach="background" args={["hotpink"]} />
                    <Text ref={textRef} fontSize={1} color="#555">
                        Hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube
