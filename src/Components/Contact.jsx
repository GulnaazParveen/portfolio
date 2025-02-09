import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h4 className="contact-heading">
          Ready to Make Your Vision Come to Life? Let’s Talk!
        </h4>
        <div class="follow-link-container px-5" style={{ width: "500px" }}>
          <span class="link-icons">
            <a href="https://www.linkedin.com/in/gulnaaz-parveen/" class="icon">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/GulnaazParveen" class="icon">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="" class="icon">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Contact
