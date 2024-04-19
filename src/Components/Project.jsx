import React from 'react'
import styled from "styled-components"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei'
import Cube from './Cube'
import Sphere from './Sphere'
import Torus from './Torus'
import Conecomponet from './Conecomponet'
import Dodecadronshape from './Dodecadronshape'
import TorusKnotshape from './TorusKnotshape'
const Section = styled.div`
  height: 100vh;
  background: #0A1A2A;
  border-top:0;
  border-left:0;
  border-right:0;
  border-bottom:1px solid white;
 
`;

const Title = styled.h1`
  font-size: 50px;
`;
const CustomCanvas = styled(Canvas)`
  margin: 0; /* Set margin to zero */
`;
const Project = () => {
  return (
    <Section className="container">
      <div className="row h-100 project">
        <div className="col-lg-6 col-md-4">
          <div className="canvasGeometry">
            <Canvas camera={{ fov: 20, position: [6, 6, 25] }}>
              <OrbitControls enableZoom={false} />
              <ambientLight />
              <directionalLight position={[3, 2, 1]} />
              <Torus />
              <Conecomponet />
            </Canvas>
          </div>
        </div>
        <div className="col-lg-6 col-md-4">
          <div className='canvasGeometry positionsgeometry'>
            <Canvas camera={{ fov: 30, position: [3, 3, 9] }}>
              <OrbitControls enableZoom={false} />
              <ambientLight />
              <directionalLight position={[3, 2, 1]} />
              <Sphere />
            </Canvas>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className='canvasGeometry cube3d'>
              <Canvas camera={{ fov: 10, position: [0, 0, 9] }}>
                <OrbitControls enableZoom={false} />
                <ambientLight />
                <directionalLight position={[3, 2, 1]} />
                <Cube />
              </Canvas>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className='canvasGeometry geometry'>
            <Canvas camera={{ fov: 50, position: [0, 0, 8] }}>
              <OrbitControls enableZoom={false} />
              <ambientLight />
              <directionalLight position={[3, 2, 1]} />
              <Dodecadronshape />
            </Canvas>
          </div>
        </div>
        <div className="col-lg-6  ">
          <div className='canvasGeometry  geometry positionsgeometry'>
            <Canvas camera={{ fov: 10, position: [3, 3, 12] }}>
              <OrbitControls enableZoom={false} />
              <ambientLight />
              <directionalLight position={[3, 2, 1]} />
              <TorusKnotshape />
            </Canvas>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Project;