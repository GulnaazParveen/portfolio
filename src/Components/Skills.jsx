import React, { useEffect, useRef } from 'react'
const Skills = () => {

  return (
    <>
      <section class="section pt-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="sec-heading">
                <h1 class="secMain-heading">
                  my <span class="main-text">skills</span>
                </h1>
              </div>
            </div>
          </div>
          <div class="row mx-5">
            <div className="col-4">
              <div className="skill-item d-flex justify-content-center   align-items-center flex-column">
                <div className="skill-image">
                  <img src="/frontend.png" alt="not imported" class="image" />
                </div>
                <div>
                  <h4 className="skill-name">frontend</h4>
                </div>
                <div className="text-items  d-flex justify-content-start align-items-start flex-column position-relative ">
                  <div className="text-item d-inline  justify-content-start   align-items-center ">
                    <span className="text-item-head">Language:</span>
                    <span className="text">HtmL,CSS, Javascript</span>
                  </div>
                  <div className="text-item d-inline  justify-content-start      align-items-center">
                    <span className="text-item-head">Frameworks: </span>
                    <span className="text">React</span>
                  </div>
                  <div className="text-item d-inline justify-content-start      align-items-center ">
                    <span className="text-item-head m-0">Styling Tools: </span>
                    <span className="text  ">
                      Tailwind CSS, Material-UI, Bootstrap
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="skill-item d-flex justify-content-center   align-items-center flex-column">
                <div className="skill-image">
                  <img src="Backend.png" alt="not imported" class="image" />
                </div>
                <div>
                  <h4 className="skill-name">Backend</h4>
                </div>
                <div className="text-items  d-flex justify-content-start align-items-start flex-column position-relative ">
                  <div className="text-item d-inline  justify-content-start   align-items-center ">
                    <span className="text-item-head">
                      Languages & Frameworks:
                    </span>
                    <span className="text">Node.js, Express.js</span>
                  </div>
                  <div className="text-item d-inline  justify-content-start      align-items-center">
                    <span className="text-item-head">Database: </span>
                    <span className="text">MongoDB,Mysql</span>
                  </div>
                  <div className="text-item d-inline justify-content-start      align-items-center ">
                    <span className="text-item-head m-0">API Development: </span>
                    <span className="text  ">REST APIs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="skill-item d-flex justify-content-center   align-items-center flex-column">
                <div className="skill-image">
                  <img src="tool.png" alt="not imported" class="image" />
                </div>
                <div>
                  <h4 className="skill-name">Tools & Technologies</h4>
                </div>
                <div className="text-items  d-flex justify-content-start align-items-start flex-column position-relative ">
                  <div className="text-item d-inline  justify-content-start   align-items-center ">
                    <span className="text-item-head">Version Control:</span>
                    <span className="text">Git, GitHub</span>
                  </div>
                  <div className="text-item d-inline  justify-content-start      align-items-center">
                    <span className="text-item-head">Debugging & Testing: </span>
                    <span className="text">Postman , Chrome DevTools</span>
                  </div>
                  <div className="text-item d-inline  justify-content-start      align-items-center ">
                    <span className="text-item-head m-0">
                      Deployment Tools: 
                    </span>
                    <span className="text  ">
                      Docker, Vercel, Heroku,Netlify
                    </span>
                  </div>
                  <div className="text-item d-inline  justify-content-start      align-items-center ">
                    <span className="text-item-head m-0">Design Tools: </span>
                    <span className="text  ">Figma,Canva, Photoshop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mx-5 mt-4 d-flex justify-content-start align-items-center">
            <div className="col-4 ">
              <div className="skill-item d-flex justify-content-center   align-items-center flex-column">
                <div className="skill-image">
                  <img src="/frontend.png" alt="not imported" class="image" />
                </div>
                <div>
                  <h4 className="skill-name">Real-Time Development</h4>
                </div>
                <div className="text-items  d-flex justify-content-start align-items-start flex-column position-relative ">
                  <div className="text-item d-inline  justify-content-start   align-items-center ">
                    <span className="text-item-head">
                      Languages & Frameworks:
                    </span>
                    <span className="text">Firebase, Socket.io</span>
                  </div>
                  <div className="text-item d-inline  justify-content-start      align-items-center">
                    <span className="text-item-head">Technologies: </span>
                    <span className="text">
                      WebSockets, Firebase Authentication
                    </span>
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

export default Skills
