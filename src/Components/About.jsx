import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const About = () => {
  return (
    <section className="section about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-heading">
              <h1 className="secMain-heading">
                About <span className="main-text">Me</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="about-left">
              <div className="hero-card">
                <img src="/Hero.png" alt="Hero" className="hero-image" />
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="col-md-6">
            <div className="about-right">
              <div className="about-content">
                <h2>Hi, I'm Gulnaaz</h2>
                <p>
                  A passionate Frontend Developer who loves crafting engaging,
                  high-performance web applications. I specialize in building
                  scalable and user-friendly interfaces with modern web
                  technologies.
                </p>

                <div className="about-details">
                  <div className="detail-item">
                    <div className="icon-container">
                      <WorkIcon className="workIcon" />
                    </div>
                    <div>
                      <h4>Experience</h4>
                      <p>
                        React.js Intern at Celebal Technologies (June - Aug
                        2024)
                      </p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="icon-container">
                      <SchoolIcon className="education" />
                    </div>
                    <div>
                      <h4>Education</h4>
                      <p>
                        B.Tech, Computer Science - CIT Kokrajhar (2021-2025)
                      </p>
                    </div>
                  </div>
                </div>

                <button className="btn btn-secondary main-btn">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
