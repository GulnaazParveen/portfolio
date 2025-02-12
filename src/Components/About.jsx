
import React, { useState, useEffect } from 'react';
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
const About = () => {

    return (
      <>
        <section class="section about">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="sec-heading">
                  <h1 class="secMain-heading">
                    about <span class="main-text">me</span>
                  </h1>
                </div>
              </div>
            </div>
            <div class="row ">
              <div class="col-md-6 ">
                <div className="about-left " style={{padding:"4rem 0 0 0"}}>
                  <div class="about-items">
                    <div class="book">
                      <div class="cover"></div>
                      <div class="page"></div>
                      <div class="page"></div>
                      <div class="page"></div>
                      <div class="page"></div>
                      <div class="page"></div>
                      <div class="page"></div>
                      <div class="page"></div>
                      <div class="last-page"></div>
                      <div class="back-cover"></div>
                    </div>
                    <div id="backgroundwave">
                      <div class=" wave-one wave"></div>
                      <div class="wave-two wave"></div>
                      <div class="wave-three wave"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-right">
                  <div className="top">
                    <div className="about-heading">
                      <div className="head-icon ">
                        <WorkIcon className="workIcon" />
                      </div>
                      <h4>experiences </h4>
                    </div>
                    <div className="about-content">
                      <div className="items">
                        <div className="item">
                          <div className="item-name">celebal Technologies</div>
                          <div className="item-depart">reactjs</div>
                        </div>
                        <div className="completion-date">june-aug-2024</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="about-heading">
                      <div className="head-icon">
                        <SchoolIcon className="education" />
                      </div>
                      <h4>education</h4>
                    </div>
                    <div className="about-content">
                      <div className="items">
                        <div className="item">
                          <div className="item-name">
                            Central Institute of Technologies,Kokrajhar
                          </div>
                          <div className="item-depart">Btech(CSE)</div>
                        </div>
                        <div className="completion-date">2021-2025</div>
                      </div>
                      <div className="items">
                        <div className="item">
                          <div className="item-name">
                            S.S.S Mahila College Bihat
                          </div>
                          <div className="item-depart">12th(Science)</div>
                        </div>
                        <div className="completion-date">2017-2019</div>
                      </div>
                      <div className="items">
                        <div className="item">
                          <div className="item-name">
                            Utkramit M S Papraur,Barauni
                          </div>
                          <div className="item-depart">10th</div>
                        </div>
                        <div className="completion-date">2017</div>
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

export default About
