import React, { useState, useEffect } from 'react';

import Skills from './components/Skills';

import Education from './components/Education';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import Projects from './components/Project'
import Contact from './components/ContactSection';
import NavBar from './components/NavBar';




const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar
      />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default App;
