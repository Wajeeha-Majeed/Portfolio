import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fakeprojects from './components/Fakeprojects'
import About from './components/About';
import Skills from './components/Skillsection';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
  <>
  <Navbar/>
  <Hero/>
  <Fakeprojects/>
  <About/>
  <Skills/>
  <Services/>
    <Projects/>
  <Contact />
  <Footer/>
</>

  );
}

export default App;
