import React, { memo, lazy, Suspense } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "./Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DownloadIcon from "@mui/icons-material/Download";

const Cube = lazy(() => import("./Cube"));

const Hero = () => {
  return (
    <>
      <Header />
      <section className="section home">
        <div className="container-fluid">
          <div className="row section-home">
            <div className="col-md-7 d-flex flex-column justify-content-center align-items-center my-3">
              <div className="home-left">
                <div className="main-heading">
                  <h1
                    style={{
                      fontSize: "2.4rem",
                    }}
                  >
                    Full Stack Developer
                    <span className="main-text">
                      Building Interactive Experiences
                    </span>
                  </h1>
                </div>
                <div className="subtext">
                  <p
                    style={{
                      fontSize: "1.3rem",
                      paddingRight: "2rem 5rem 0rem 0rem",
                      marginBottom: "2rem",
                    }}
                  >
                    I create immersive 3D and web experiences, blending
                    creativity with technology. Passionate about full-stack
                    development, I turn ideas into interactive and dynamic
                    applications.
                  </p>
                </div>
                <div className="btn-container text-center">
                  <div className="cta">
                    <a href="/ResumeGulnaazParveen.pdf" className="main-btn">
                      <span
                        className="btn-text"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "700",
                          fontFamily: "Outfit, sans-serif",
                        }}
                      >
                        get resume
                      </span>
                      <span className="btn-icon" style={{ margin: "0 0.2rem" }}>
                        <DownloadIcon />
                      </span>
                    </a>
                  </div>
                  <div className="follow-link-container">
                    <span className="link-icons">
                      <a
                        href="https://www.linkedin.com/in/gulnaaz-parveen/"
                        className="icon"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a
                        href="https://github.com/GulnaazParveen"
                        className="icon"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 herobackground">
              <div className="home-right">
                <div className="box herowave">
                  <div className="wave-one wave cubewave"></div>
                  <div className="wave-two wave cubewave"></div>
                  <div className="wave-three wave cubewave"></div>
                </div>
                <div className="Canvas">
                  <Canvas camera={{ fov: 8, position: [-8, 0, 8] }}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight />
                    <directionalLight position={[3, 2, 1]} />
                    <Suspense
                      fallback={
                        <mesh>
                          <boxGeometry args={[1, 1, 1]} />
                          <meshStandardMaterial color="hotpink" />
                        </mesh>
                      }
                    >
                      <Cube />
                    </Suspense>
                  </Canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Hero);
