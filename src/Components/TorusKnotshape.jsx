
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const TorusKnotshape = () => {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.x += delta
        ref.current.rotation.y += delta
        ref.current.position.z = Math.sin(state.clock.elapsedTime) * 0.5
    })
    return (
        <mesh  ref={ref}>
            <torusKnotGeometry args={[0.5,0.1,1000,50]} />
            <meshStandardMaterial color={"orange"} />
        </mesh>
    )
}

export default TorusKnotshape
