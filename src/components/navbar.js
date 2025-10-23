import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav-menu">
      <ul>
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