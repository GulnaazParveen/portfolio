import React from 'react'
import WeatherImage from '../images/weather.png'
import ShoppingImage from '../images/shopping.png'
import Project from './Project'


const Work = () => {
    return (
        <>
            <section className="section work-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div class="sec-heading">
                                <h1 class="secMain-heading">my <span class="main-text">projects</span></h1>
                            </div>
                            <p class="port-text">
                                here is some my work that I'have done in various programming
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="project">
                                <div className="portfolio-item">
                                    <div className="port-image">
                                        <img src={WeatherImage} alt="" />
                                    </div>
                                    <div className="hover-item">
                                        <h3>Project source</h3>
                                        <div className="icons">
                                            <a href="www.google.com" target="_blank" className="icon">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                            <a href="www.google.com" target="_blank" className="icon">
                                                <i class="fa-brands fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="project">
                                <div className="portfolio-item">
                                    <div className="port-image">
                                        <img src={ShoppingImage} alt="" />
                                    </div>
                                    <div className="hover-item">
                                        <h3>Project source</h3>
                                        <div className="icons">
                                            <a href="www.google.com" target="_blank" className="icon">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                            <a href="www.google.com" target="_blank" className="icon">
                                                <i class="fa-brands fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="project">
                                <div className="portfolio-item">
                                    <div className="port-image">
                                        <img src={WeatherImage} alt="" />
                                    </div>
                                    <div className="hover-item">
                                        <h3>Project source</h3>
                                        <div className="icons">
                                            <a href="www.google.com" target="_blank" className="icon">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                            <a href="www.google.com" target="_blank" className="icon">
                                                <i class="fa-brands fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Project/>
            </section>
         
        </>
    )
}

export default Work
