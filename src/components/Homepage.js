import React from 'react';

const Homepage = () => {
  return (
    <header id="home" className="homepage">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Hello, I'm</span> 
            <br />
            <span className="name">Bijay Dhungana</span>
          </h1>
          <h3 className="hero-subtitle">Full Stack Developer</h3>
          <p className="hero-description">
            Passionate about building smooth, user-friendly websites and apps.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Reach Out</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Homepage;