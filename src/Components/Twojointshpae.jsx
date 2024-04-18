import React from 'react'
import styled from 'styled-components'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei'
import Torus from './Torus'
import Conecomponet from './Conecomponet'
const Container = styled.div`
  height:100vh;
  width:100%
  background:red;
  scroll-snap-align:center;
`

const Twojointshpae = () => {
    return (
        <Container>
            <Canvas camera={{ fov: 40, position: [15, 15, 15] }}>
                <OrbitControls enableZoom={false} />
                <ambientLight />
                <directionalLight position={[3, 2, 1]} />
                <Torus />
                <Conecomponet />
            </Canvas>
        </Container >
    )
}

export default Twojointshpae
