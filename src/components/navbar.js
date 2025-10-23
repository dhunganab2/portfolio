import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-menu">
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
      </button>
      
      <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('about')}>About</button></li>
        <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        <li><button onClick={() => scrollToSection('research')}>Research</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        <li><a href="/BijayUpdatedCv5.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">CV</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;