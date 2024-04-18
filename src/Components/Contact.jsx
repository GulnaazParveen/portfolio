import React from 'react'
import backgroundImage from '../images/background.png'

const Contact = () => {
    return (
        <>
            <section className="section contact  ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5  ">
                            <div className="contact-details ">
                                <div className="contactTextBox">
                                    <h2 className="contact-head">Get in touch</h2>
                                    <p className="contact-demo"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nihil
                                        et eaque aliquid
                                        deleniti dolorum voluptatum aperiam, tempore quaerat quasi Lorem, ipsum
                                    </p>
                                </div>
                                <div className="contact-items">
                                    <div className="contact-item " >
                                        <div className="contact-icon icon">
                                            <i class="fa-solid fa-envelope-open"></i>
                                        </div>
                                        <div className="contact-icon-text">
                                            <span >gulnaazparweenpap@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="contact-item " >
                                        <div className="contact-icon icon">
                                            <i class="fa-solid fa-phone-volume" ></i>
                                        </div>
                                        <div className="contact-icon-text">
                                            <span >+91 987654321</span>
                                        </div>
                                    </div>
                                    <div className="contact-item " >
                                        <div className="contact-icon icon">
                                            <i class="fa-solid fa-user-graduate" ></i>
                                        </div>
                                        <div className="contact-icon-text">
                                            <span className="contact-text">central institute of technology Kokrajhar</span>
                                        </div>
                                    </div>
                                    <div className="contact-item " >
                                        <div className="contact-icon icon">
                                            <i class="fa-solid fa-location-dot "></i>
                                        </div>
                                        <div className="contact-icon-text">
                                            <span className="contact-text">begusarai,bihar</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-lg-5 ">
                            <div className="form-container ">
                                <form>
                                    <div className="form-textBox">
                                        <label for="firstName">First Name</label>
                                        <input type="text" id="firstName" name="firstName" className="form-text" />
                                    </div>
                                    <div className="form-textBox">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" id="lastName" name="lastName" className="form-text" />
                                    </div>
                                    <div className="form-textBox">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" className="form-text" />
                                    </div>
                                    <div className="form-textBox">
                                        <label for="phoneNumber">Phone Number</label>
                                        <input type="tel" id="phoneNumber" name="phoneNumber" className="form-text" />
                                    </div>
                                    <div className="form-textBox  textareabox">
                                        <label for="message">Message</label>
                                        <textarea id="message" name="message" className="form-text"
                                            placeholder="message here......"></textarea>
                                    </div>
                                    <div className="btn-container submitBox">
                                        <a href="" className="main-btn">
                                            <span className="btn-text ">submit</span>
                                        </a>
                                    </div>
                                </form>
                                <div className="bgcontaine bgimage">
                                   <img src={backgroundImage}alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Contact
