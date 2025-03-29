import React from "react";
import Project from "./Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
const Work = () => {
  const projects = [
    {
      title: "Jobportal",
      imgUrl: "/images/jobportal.png",
      githubLink: "https://github.com/GulnaazParveen/jobPortal_Mern",
      description: "A MERN-based job portal for employers and job seekers.",
    },
    {
      title: "SynChat",
      imgUrl: "/images/chat.png",
      githubLink: "https://github.com/GulnaazParveen/SyncChat",
      description:
        "Real-time chat application with secure JWT authentication and seamless messaging.",
    },
    {
      title: "Git",
      imgUrl: "/images/GIT.png",
      githubLink: "https://github.com/GulnaazParveen/version_control_system",
      description:
        "A custom-built version control system inspired by Git, featuring file versioning, object storage, and commit tracking.",
    },
    {
      title: "Weather App",
      imgUrl: "/images/weather.png",
      githubLink: "https://github.com/GulnaazParveen/Node-Weather",
      description: "Real-time weather updates using Node.js and APIs.",
    },
    {
      title: "Tic-Toe Game",
      imgUrl: "/images/ticToe.png",
      githubLink: "https://github.com/GulnaazParveen/PRODIGY_WD_03",
      description: "Interactive Tic-Tac-Toe game built with React.",
    },
  ];

  return (
    <>
      <section className="section" style={{ padding: "2.5rem 0 0 0" }}>
        <div className="container ">
          <div className="row">
            <div className="col-5">
              <div className="works d-flex flex-column justify-content-start align-items-center ">
                <h2 className="work-subhead">creative works</h2>
                <p class="port-text sub-text">
                  here is some my work that I'have worked on recently
                </p>
                <div className="btn-containers">
                  <div className="btnbox d-flex justify-content-center   align-items-center">
                    <div className="work-text">
                      <span className="btn-text">see more works</span>
                    </div>
                    <div className="icons">
                      <span class="btn-icons">
                        <ArrowCircleDownIcon className="arrowIcon" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 mb-5 mt-5 ">
              <Project />
            </div>
          </div>

          {/* Swiper Section */}
          <div className="mySwiperContainer">
            <Swiper
              modules={[Pagination]}
              spaceBetween={28}
              slidesPerView={3}
              pagination={{
                clickable: true,
                type: "bullets",
                el: ".custom-pagination",
              }}
              style={{padding:"15px"}}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="custom-slide">
                  <div className="portfolio-item">
                    <div className="port-image">
                      <img src={project.imgUrl} alt={project.title} />
                    </div>
                    <div className="project-details">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-links">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
