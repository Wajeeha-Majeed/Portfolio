import React, { useEffect, useRef, useState } from 'react';

export default function SkillCard({ image, title, level }) {
  const [width, setWidth] = useState('0%');
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level); // animation start
        }
      },
      { threshold: 0.4 } // 40% visible hone pe trigger
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [level]);
  return (
    <div data-aos="zoom-in" className="skill-card" ref={skillRef}>
      <img src={image} alt={title} className="card-img-top" />

      <h3>{title}</h3>
      <p>{level}</p>

      {/* Progress Bar */}
      <div className="skill-progress">
        <div
          className="skill-progress-fill"
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
}
