import React from 'react'

export default function About() {

 const scrollToContact = () => {
    const section = document.getElementById('contacts');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      data-aos="fade-up" className='about-section' id='about'>
      <div className="container">
        <h1 className='about-title text-center fw-bold'>About Me</h1>
        <div className="row about-div align-items-center">
          <div className="col-lg-5 col-md-12 mb-4">
            <div className="about-img"></div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <p>I'm a frontend developer who enjoys turning simple ideas into functional and visually clean web pages. My focus is on building smooth user interfaces and responsive designs that work well on every device.</p>
              <p>I work with HTML, CSS and JavaScript to create user-friendly layouts and interactive components. Every project helps me improve my problem-solving skills and explore new techniques to grow as a developer.</p>
              <p>My goal is to build websites that are clear, fast and easy to use. I'm continuously learning, experimenting and improving so I can deliver better and more polished web experiences.</p>
              <button data-aos='fade-up' onClick={scrollToContact} className="btn btn-contact mt-3">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
