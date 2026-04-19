import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.classList.remove('section-focus-animate');
    // Restart animation reliably on repeated clicks.
    void section.offsetWidth;
    section.classList.add('section-focus-animate');

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      section.classList.remove('section-focus-animate');
    }, 700);

    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-menu">
      <div className="nav-shell">
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>

        <button className="nav-brand" onClick={() => scrollToSection('about')}>
          Bijay Dhungana
        </button>

        <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('research')}>Research</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;