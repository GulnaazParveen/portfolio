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
      title: "Jobportal not found",
      imgUrl: "/images/jobportal.png",
      githubLink: "https://github.com/GulnaazParveen/jobPortal_Mern",
      linkedinLink: "https://www.linkedin.com/in/gulnaaz-parveen/",
    },
    {
      title: "Weather App",
      imgUrl: "/images/weather.png",
      githubLink: "https://github.com/GulnaazParveen/Node-Weather",
      linkedinLink: "https://www.linkedin.com/in/gulnaaz-parveen",
    },

    {
      title: "Spotify not found",
      imgUrl: "/images/spotify.png",
      githubLink: "https://github.com/GulnaazParveen/reduxSpotify",
      linkedinLink: "https://www.linkedin.com/in/gulnaaz-parveen/",
    },
    {
      title: "Tic-Toe not found",
      imgUrl: "/images/ticToe.png",
      githubLink: "https://github.com/GulnaazParveen/PRODIGY_WD_03",
      linkedinLink: "https://www.linkedin.com/in/gulnaaz-parveen/",
    },
    
    // Add more projects here
  ];

  return (
    <>
      <section className="section" style={{padding:"2.5rem 0 0 0"}}>
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
                       <ArrowCircleDownIcon className="arrowIcon"/>
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
          <div className="mySwiperContainer">
            <div className="card-swiper-wrapper">
              <Swiper
                modules={[Pagination]} // Pass Pagination module here
                spaceBetween={30} // Space between slides
                slidesPerView={2} // Number of cards visible at a time
                pagination={{
                  clickable: true,
                  type: "bullets", // Pagination as bullets
                  el: ".custom-pagination", // Bind to a custom class
                }}
                className="mySwiper"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="custom-slide">
                    <div className="portfolio-item">
                      <div className="port-image">
                        <img src={project.imgUrl} alt={project.title} />
                      </div>
                      <div className="hover-item">
                        <div className="icons">
                          <a
                            href={project.linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="custom-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
