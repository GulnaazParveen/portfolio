
import React, { useState, useEffect } from 'react';
const About = () => {

    const [count, setCount] = useState(1);
    const endNum = 10;

    useEffect(() => {
        const interval = setInterval(() => {
            if (count <= endNum) {
                console.log(count);
                setCount(count + 1);
            } else {
                clearInterval(interval);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [count]); // Re-run effect whenever count changes

    useEffect(() => {
        const pulsateInterval = setInterval(() => {
            const bulb = document.getElementById('bulb');
            if (bulb) {
                bulb.classList.toggle('fade');
            }
        }, 1000);

        return () => clearInterval(pulsateInterval);
    }, []); // Run effect only once on component mount

    return (
        <>
            <section class="section about">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sec-heading">
                                <h1 class="secMain-heading">about <span class="main-text">me</span></h1>
                            </div>
                        </div>
                    </div>
                    <div class="row  aboutContainer ">
                        <div class="col-6 ">
                            <div class="about-left">
                                <div class="light-bulb-container ">
                                    <i class="fas fa-lightbulb light-bulb" id="bulb"></i>
                                </div>
                                <div className="row d-lg-flex aboutinteractive">
                                    <div className="col-lg-6">
                                        <div class="about-container backgroundlayer">
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
                                            <div class="box " id='backgroundwave'>
                                                <div class=" wave-one wave"></div>
                                                <div class="wave-two wave"></div>
                                                <div class="wave-three wave">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="about-items">
                                            <div class="about-cover"></div>
                                            <div class="about-page">
                                                <p class="counter ">{count}</p>
                                                <p class="small-text ">projects <br /> Compeleted</p>
                                            </div>
                                            <div class="AboutBack-cover"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-right">
                                <h4>Information About Me </h4>
                                <p class="about-content">
                                    I didn't take any formal classes to learn web development. Instead, I've always been
                                    interested in learning how things work and solving problems. So I decided to teach myself
                                    how to code by exploring different technologies and working on my own projects. This
                                    hands-on approach has helped me to develop a strong understanding of the fundamentals of web
                                    development and how to troubleshoot problems.
                                </p>
                                <h4>Interests</h4>
                                <p class="about-content">
                                    I'm particularly interested in learning more about JavaScript and Three.js. I'm fascinated
                                    by the potential of 3D web experiences and I believe that Three.js can be a powerful tool
                                    for creating engaging and interactive applications. My goal is to use these skills to create
                                    easy-to-understand 3D learning experiences that can be accessed by anyone, regardless of
                                    their background or budget.
                                </p>
                                <div class="follow-link-container">
                                    <span class="link-text">follow <span class="main-text">me on:</span></span>
                                    <span class="link-icons">
                                        <a href="" class="icon">
                                            <i class="fa-brands fa-linkedin"></i>
                                        </a>
                                        <a href="" class="icon">
                                            <i class="fa-brands fa-github"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
