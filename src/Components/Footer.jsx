import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='line-box'>
            <span className='line'></span>
        </div>
        <p className='footer-text'>
          &copy; {new Date().getFullYear()} gp-uixdev | Designed & Developed by
          Gulnaaz Parveen
        </p>
      </div>
    </>
  );
}

export default Footer
