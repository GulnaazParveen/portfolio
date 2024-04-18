// import React from 'react'
// const Torus = () => {
//   return (
//     <mesh>
//         <torusGeometry args={[ 7.2, 2,16, 100]}/>
//         <meshStandardMaterial color={"orange"}/>
//     </mesh>
//   )
// }

// export default Torus
import React, { useState } from 'react'

const Torus = () => {
  const [radius, setRadius] = useState(3.6)
  const [tube, setTube] = useState(1)

  return (
    <mesh >
      <torusGeometry args={[radius, tube, 16, 100]}/>
      <meshStandardMaterial color={"#F73C6D"}/>
    </mesh>
  )
}
export default Torus