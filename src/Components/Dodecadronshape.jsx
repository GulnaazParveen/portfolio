import React from 'react'
const Dodecadronshape = () => {
    return (
        <mesh>
        <dodecahedronGeometry args={[3]} />
        <meshStandardMaterial color={"#F598F2"} />
    </mesh>
    )
}

export default Dodecadronshape
