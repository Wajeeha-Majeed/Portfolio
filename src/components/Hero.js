import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";


export default function Hero() {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "React Developer", "UI Designer"],
    loop: true,
    delaySpeed: 1000,
  });

  const heroStyle = {
    backgroundColor: '#d0e6fd'
  }

  return (

    <section id="hero" className="hero-section"  style={heroStyle}>
      <div className="container hero-div my-5 py-5">
        <div className="row hero-div my-3 p-2 pb-5 pe-lg-0 pt-lg-5 rounded-3 border shadow-lg align-items-center gy-5">
          <div
            data-aos="fade-right"
            className="col-lg-6 text-center text-lg-start"
            style={{ color: "#162266" }}
          >
            <h6 className="fw-normal">— I'm Wajeeha —</h6>

            <h2 className="fw-semibold">I am a</h2>

            <h1 className="hero-title fw-bold">
              {text}
              <Cursor cursorStyle="|" />
            </h1>

            <p className="hero-desc">
              Frontend developer passionate about creating seamless web
              experiences. Skilled in React, JavaScript, HTML, CSS, and modern
              UI frameworks.
            </p>

            <div className="d-flex flex-column flex-sm-row align-items-center align-items-lg-start gap-3 mt-4">
              <button className="btn custom-btn btn-lg px-4 fw-bold">
                Hire
              </button>

              <div className="social-links">
                <a href="#hero">
                  <i className="ri-facebook-circle-fill"></i>
                </a>
                <a href="#hero">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#hero">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="#hero">
                  <i className="ri-github-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <motion.div
              whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ perspective: 1000 }}
            >
              <img
                src="./hero-img.jpg"
                alt="Hero"
                className="img-fluid hero-img"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
