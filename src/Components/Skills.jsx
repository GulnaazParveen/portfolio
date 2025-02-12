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
          <div className="row firstrow-card">
            {/* Frontend Card */}
            <div className="col-md-4 mb-2 d-flex align-items-stretch">
              <div className="skills-card w-100">
                <h3 className="skill-name">Frontend</h3>
                <ul>
                  <li>🔹 HTML | CSS | JS | React</li>
                  <li>🎨 Tailwind | MUI | Bootstrap</li>
                </ul>
              </div>
            </div>
            {/* Backend Card */}
            <div className="col-md-4 mb-2 d-flex align-items-stretch ">
              <div className="skills-card w-100">
                <h3 className="skill-name">Backend</h3>
                <ul>
                  <li>🔹 Node.js, Express.js</li>
                  <li>🗄️ MongoDB, MySQL, REST APIs</li>
                </ul>
              </div>
            </div>
            {/* Tools & Technologies Card */}
            <div className="col-md-4 mb-2 d-flex align-items-stretch">
              <div className="skills-card w-100">
                <h3 className="skill-name">Tools &amp; Technologies</h3>
                <ul>
                  <li>🔹 Git, GitHub</li>
                  <li>🔹 Postman, Chrome DevTools</li>
                  <li>🔹 Docker, Vercel, Heroku, Netlify</li>
                  <li>🔹 Figma, Canva, Photoshop</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Row: 2 Cards (Centered) */}
          <div className="row justify-content-center  mx-5">
            {/* Real-Time Development Card */}
            <div className="col-md-5 mb-4">
              <div className="skills-card w-100 secondRow-card">
                <h3 className="skill-name">Real-Time Development</h3>
                <ul>
                  <li>🔹 Firebase, Socket.io</li>
                  <li>🔹 WebSockets, Firebase Auth</li>
                </ul>
              </div>
            </div>
            {/* Testing & QA Card */}
            <div className="col-md-5 mb-4">
              <div className="skills-card w-100 secondRow-card">
                <h3 className="skill-name">Testing &amp; QA</h3>
                <ul>
                  <li>🔹 Jest, Mocha, Chai</li>
                  <li>🔹 Cypress, React Testing Library</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills
