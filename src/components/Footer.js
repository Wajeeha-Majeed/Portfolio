import React from 'react'

export default function Footer() {
  return (
    <section className='footer-section' id='footer'>
      <div className="container">
        <p className="footer-copyright"><i className="ri-copyright-line"></i> Copyright 2026 Wajeeha Majeed. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className="footer-socials">
          <a href="#footer"><i className="ri-facebook-circle-fill"></i></a>
          <a href="mailto:majeedwajeeha228@gmail.com?subject=Portfolio%20Contact"><i className="ri-mail-fill"></i></a>
          <a href="https://www.linkedin.com/in/wajeeha-majeed-a67a7737a/"><i className="ri-linkedin-box-fill"></i></a>
          <a href="https://github.com/"><i className="ri-github-fill"></i></a>
        </ul>
      </div>
    </section>
  )
}
