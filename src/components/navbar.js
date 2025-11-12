import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Set your CV password here
  const CV_PASSWORD = 'bijay2025'; // Change this to your desired password

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCVClick = (e) => {
    e.preventDefault();
    
    // Check if already authenticated in this session
    if (sessionStorage.getItem('cvAccess') === 'granted') {
      window.open('/BijayUpdatedCv5.pdf', '_blank');
    } else {
      setShowPasswordModal(true);
      setPassword('');
      setErrorMessage('');
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    if (password === CV_PASSWORD) {
      sessionStorage.setItem('cvAccess', 'granted');
      setShowPasswordModal(false);
      setPassword('');
      setErrorMessage('');
      window.open('/BijayUpdatedCv5.pdf', '_blank');
    } else {
      setErrorMessage('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const closePasswordModal = () => {
    setShowPasswordModal(false);
    setPassword('');
    setErrorMessage('');
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
        <li><button onClick={handleCVClick} className="cv-link">CV</button></li>
      </ul>

      {showPasswordModal && (
        <div className="password-modal" onClick={closePasswordModal}>
          <div className="password-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closePasswordModal}>&times;</button>
            <h3>🔒 CV Access</h3>
            <p>Please enter the password to view the CV</p>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="password-input"
                autoFocus
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit" className="password-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;