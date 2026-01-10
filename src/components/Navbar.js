import React from 'react';
import { motion } from 'framer-motion'

export default function Navbar() {
    const NavStyle = {
        padding: '7px 1.5vw',
        fontSize: '18px',
        backgroundColor: '#f1e4d1',
        color: '#162266'

    };
    const collapseStyle = {
        padding: '10px 2vw',

    }

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="navbar navbar-expand-lg navbar-dark sticky-top" style={NavStyle}>
            <div className="container-fluid">
                <a className="navbar-brand" style={NavStyle} href="/"><h3><span style={{ fontSize: '35px' }}>W</span>ajeeha <span style={{ fontSize: '35px' }}>M</span>ajeed</h3></a>
                <button className="navbar-toggler border-0" style={{ backgroundColor: '#162266' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-2" style={collapseStyle} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" style={NavStyle} aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={NavStyle} aria-current="page" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={NavStyle} aria-current="page" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={NavStyle} aria-current="page" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" style={NavStyle} aria-current="page" href="#contacts">Contact</a>
                        </li>
                    </ul>
                    <button className="btn custom-btn mx-5" type="submit">Resume <i className="ri-download-cloud-2-line mx-1 my-2"></i></button>
                </div>
            </div>
        </motion.nav>
    )
}
