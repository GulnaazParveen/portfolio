import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import Header from './Header'
import HeroImage from '../images/Hero.png'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei'

import About from './About'
import Skills from './Skills'
import Project from './Project'
import Work from './Work'
import Contact from './Contact'
import Cube from './Cube'
import Dodecadronshape from './Dodecadronshape'
const Hero = () => {
    return (
        <>
            <Header />
            <section className="section home">
                <div className="container-fluid">
                    <div className="row section-home">
                        <div className="col-md-6  d-flex flex-column justify-content-center align-items-center">
                            <div className="home-left">
                                <div className="main-heading">
                                    <h1> Hi, I'm a Full-Stack Developer <span className="main-text">Building Interactive Experiences</span></h1>
                                </div>
                                <div className="subtext">
                                    <p>At the crossroads of creativity and tech skills, I excel at making awesome 3D experiences
                                        that grab attention. I know JavaScript, HTML, CSS, Three.js, Node.js, MongoDB,
                                        Express.js, and stuff like Bootstrap. I turn ideas into cool web apps that you can
                                        interact with. Check out my portfolio and see the fun for yourself.
                                    </p>
                                </div>
                                <div className="btn-container text-center">
                                    <a href="" className="main-btn ">
                                        <span className="btn-text">explore my work</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 herobackground ">
                            <div className="home-right">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="Canvas">
                                            <Canvas camera={{ fov: 9, position: [-8, 0, 8] }}>
                                                <OrbitControls enableZoom={false} />
                                                <ambientLight />
                                                <directionalLight position={[3, 2, 1]} />
                                                <Cube />
                                            </Canvas>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="main-image">
                                            <img src="Hero.png" alt="image not found" className='img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero


