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
              <div className="col-md-7  d-flex flex-column justify-content-center align-items-center my-3">
                <div className="home-left">
                  <div className="main-heading">
                    <h1
                      style={{
                        fontSize: "2.4rem",
                      }}
                    >
                      Full-Stack Developer
                      <span className="main-text">
                        Building Interactive Experiences
                      </span>
                    </h1>
                  </div>
                  <div className="subtext">
                    <p
                      style={{
                        fontSize: "1.3rem",
                        paddingRight:"2rem 5rem 0rem 0rem",
                        marginBottom:"2rem"
                      }}
                    >
                      I create immersive 3D and web experiences, blending
                      creativity with technology. Passionate about full-stack
                      development, I turn ideas into interactive and dynamic
                      applications.
                    </p>
                  </div>
                  <div className="btn-container text-center ">
                    <div className="cta">
                      <a href="/ResumeGulnaazParveen.pdf" className="main-btn ">
                        <span
                          className="btn-text"
                          style={{
                            fontSize: "1rem ",
                            fontWeight: "700",
                            fontFamily: "Outfit, sans-serif",
                          }}
                        >
                          get resume
                        </span>
                        <span
                          className="btn-icon"
                          style={{ margin: "0 0.2rem" }}
                        >
                          <DownloadIcon />
                        </span>
                      </a>
                    </div>
                    <div class="follow-link-container">
                      <span class="link-icons">
                        <a
                          href="https://www.linkedin.com/in/gulnaaz-parveen/"
                          class="icon"
                        >
                          <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                          href="https://github.com/GulnaazParveen"
                          class="icon"
                        >
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 herobackground ">
                <div className="home-right">
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
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero


