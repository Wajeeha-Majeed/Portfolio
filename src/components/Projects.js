import React from 'react';


export default function Projects() {
    return (
        <div>
            <section className="projects-section" id="projects" style={{ opacity: '1', transition: 'opacity 0.6s', transform: '0.6s' }}>
                <div className="container-sm">
                    <h1 className="project-title text-center">My Projects</h1>
                    <p className="text-center mb-5 mx-auto projects-description">These projects were created for practice and learning purposes to demonstrate my frontend skills and are not real client projects.</p>
                    <div data-aos="zoom-in-up" className="row pt-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="project-box">
                                <div className="project-name">Responsive Landing Page</div>
                                <div className="project-overlay">View Project</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-box project-box-2">
                                <div className="project-name">Digital Clock</div>
                                <div className="project-overlay">View Project</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-box project-box-3">
                                <div className="project-name">To-Do List App</div>
                                <div className="project-overlay">View Project</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project-box project-box-4">
                                <div className="project-name">Calculator App</div>
                                <div className="project-overlay">View Project</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
