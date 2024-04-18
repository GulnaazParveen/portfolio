import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const Sphere = () => {
 const ref=useRef();
 useFrame((state,delta)=>{
    ref.current.rotation.x +=2*delta; // Adjust rotation speed
    ref.current.rotation.y += 2* delta;
    ref.current.position.z=Math.sin(state.clock.elapsedTime)*0.8

})
  return (
     <mesh ref={ref} scale={[2,2,2]} >
        <sphereGeometry args={[1,32,16]}/>
        {/* <meshStandardMaterial color={"#73E0F5"}/> */}
        <meshBasicMaterial opacity={0.5} color="#1BB3D1" />
     </mesh>
  )
}

export default Sphere
