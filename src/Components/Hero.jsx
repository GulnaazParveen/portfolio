import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './Header'
import { Canvas } from "@react-three/fiber"
import { OrbitControls} from '@react-three/drei'
import Cube from './Cube'
import DownloadIcon from "@mui/icons-material/Download";
const Hero = () => {
    return (
      <>
        <Header />
        <section className="section home">
          <div className="container-fluid">
            <div className="row section-home">
              <div className="col-md-6  d-flex flex-column justify-content-center align-items-center my-3">
                <div className="home-left">
                  <div className="main-heading">
                    <h1>
                      {" "}
                      Hi, I'm a Full-Stack Developer{" "}
                      <span className="main-text">
                        Building Interactive Experiences
                      </span>
                    </h1>
                  </div>
                  <div className="subtext">
                    <p>
                      At the crossroads of creativity and tech skills, I excel
                      at making awesome 3D experiences that grab attention. I
                      know JavaScript, HTML, CSS, Three.js, Node.js, MongoDB,
                      Express.js, and stuff like Bootstrap. I turn ideas into
                      cool web apps that you can interact with. Check out my
                      portfolio and see the fun for yourself.
                    </p>
                  </div>
                  <div className="btn-container text-center">
                    <a href="/ResumeGulnaazParveen.pdf" className="main-btn ">
                      <span className="btn-text" style={{ fontSize: "0.9rem" }}>
                        explore my work
                      </span>
                      <span className="btn-icon" style={{ margin: "0 0.2rem" }}>
                        <DownloadIcon />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 herobackground ">
                <div className="home-right">
                  <div className="row">
                    <div className="col-6 herobox">
                      <div class="box herowave  ">
                        <div class=" wave-one wave cubewave"></div>
                        <div class="wave-two wave cubewave"></div>
                        <div class="wave-three wave cubewave"></div>
                      </div>
                      <div className="Canvas">
                        <Canvas camera={{ fov: 8, position: [-8, 0, 8] }}>
                          <OrbitControls enableZoom={false} />
                          <ambientLight />
                          <directionalLight position={[3, 2, 1]} />
                          <Cube />
                        </Canvas>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="main-image">
                        <img
                          src="Hero.png"
                          alt="image not found"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero


