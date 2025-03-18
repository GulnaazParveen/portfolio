import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="line-box">
          <span className="line"></span>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Gulnaaz Parveen | All Rights
          Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer
