import SkillCard from './SkillCard';
import html from '../assets/html5.png';
import css3 from '../assets/css3.png';
import JavaScript from '../assets/js.png';
import Reacts from '../assets/react.png';
import Bootstrap from '../assets/bootstrap.png';
import php from '../assets/php.png';
import MySQL from '../assets/mysql_PNG22.png';

import React from 'react'

const skills = [
  { image: html, title: 'HTML5', level: '90%' },
  { image: css3, title: 'CSS3', level: '90%' },
  { image: JavaScript, title: 'JavaScript', level: '80%' },
  { image: Reacts, title: 'React', level: '75%' },
  { image: Bootstrap, title: 'Bootstrap', level: '80%' },
  { image: php, title: 'PHP', level: '75%' },
  { image: MySQL, title: 'MySQL', level: '75%' }

]

export default function Skillsection() {
  const skillStyle = {
    backgroundColor: '#162266',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    padding: '60px 10px 5px'
  }
  const skillStyle1 = {
    backgroundColor: '#162266',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    padding: '6px 10px',
    fontSize: '18px'

  }
  return (
    <>
      <div className="container-fluid skill" id='skills' style={{ backgroundColor: '#162266' }}>
        <div className="container text-center fw-bold" style={skillStyle}>
          <h1>My Skills</h1>
        </div>
        <div className="container text-center" style={skillStyle1}>
          <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </p>
        </div>
        <div className='container skills-container' >
          <div className="row">
          {skills.map((skill, idx) => (
        <div
            key={idx}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
          >
            <SkillCard {...skill} />
          </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

