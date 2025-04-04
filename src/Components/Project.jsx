import React, { memo, Suspense } from 'react'
import styled from "styled-components"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei'

import Torus from './Torus'
import TorusKnotshape from './TorusKnotshape'
import Conecomponent from './Conecomponent'
const Section = styled.div`
padding-top:3rem;
  background: #0A1A2A;
 border:2px solid #454e56;
 border-radius:15px;

`;

const Title = styled.h1`
  font-size: 50px;
`;
const CustomCanvas = styled(Canvas)`
  margin: 0; /* Set margin to zero */
`;
const MemoizedCanvas = memo(({ children, fov, position }) => (
  <Canvas frameloop="demand" camera={{ fov, position }}>
    <OrbitControls enableZoom={false} />
    <ambientLight  />
    <directionalLight position={[3, 2, 1]} />
    <Suspense fallback={null}>{children}</Suspense>
  </Canvas>
));

const Project = () => {
  return (
    <Section className="container">
      <div className="row project">
        {/* First Canvas */}
        <div className="col-lg-6">
          <div className="canvasGeometry">
            <MemoizedCanvas fov={30} position={[5, 5, 20]}>
              <Torus />
              <Conecomponent />
            </MemoizedCanvas>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="canvasGeometry">
            <MemoizedCanvas fov={18} position={[4, 4, 5]}>
              <TorusKnotshape />
            </MemoizedCanvas>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default memo(Project);