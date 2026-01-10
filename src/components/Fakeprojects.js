import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

export default function Fakeprojects() {
    const { scrollYProgress } = useScroll();
    const rotateX = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

    const fakeProjectsStyle = {
        height: 'auto',
        fontSize: '20px',
        padding: '50px 10px',
        backgroundColor: '#162266'
    }
    return (
        <motion.div
            style={{ rotateX, perspective: 1000 }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
            }}
            className='border border-dark text-light'>
            <section className="fake-projects container-fluid" style={fakeProjectsStyle}>
                <div className="container">
                    <div className="row justify-content-center text-center g-4">
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="fake-proj-item"><i className="ri-bard-fill"></i> LumaFlow</div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="fake-proj-item"><i className="ri-flower-fill"></i> PetalWave</div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="fake-proj-item"><i className="ri-artboard-line"></i> EchoCanvas</div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="fake-proj-item"><i className="ri-stack-fill"></i> InviteCraft</div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="fake-proj-item"><i className="ri-magic-fill"></i> AuraStudio</div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}
