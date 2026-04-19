import React from 'react';

import profileImage from '../assets/images/Profile.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src={profileImage}
              alt="Bijay Dhungana"
              className="profile-image" 
            />
            <div className="about-contact-icons">
              <a href="https://www.linkedin.com/in/bijaydhungana07/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/dhunganab2" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
              </a>
              <a href="mailto:dhunganabijay85@gmail.com" className="social-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/552/552486.png" alt="Email" />
              </a>
            </div>
          </div>
          <div className="about-text">
            <h3 className="about-subtitle">Full Stack Developer</h3>
            <p>
            Hi, I'm Bijay Dhungana! Originally from Nepal, I now live in the Greater Cincinnati area. I'm currently pursuing a bachelor's degree in Computer Science 
            with a minor in Computer Information Technology and Mathematics at Northern Kentucky University. I'm passionate about building smooth, user-friendly websites
             and apps. I love solving problems through technology. I'm particularly interested in computational methods and how they enhance the 
             efficiency and intelligence of computer systems.
            </p>
            <p>
              Besides this, I am a huge fan of Hip-hop. Currently my favorite artists are The Weeknd
              ,Travis Scott, and Playboi Carti. I also
              love exploring new places and trying new cuisine.
            </p>
            <div className="skills-container">
              <h4>Technical Skills</h4>
              
              <div className="skills-category">
                <h5 className="skills-category-title">Languages and Databases:</h5>
                <div className="skills-list">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">C++</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MySQL</span>
                </div>
              </div>

              <div className="skills-category">
                <h5 className="skills-category-title">Frameworks Libraries:</h5>
                <div className="skills-list">
                  <span className="skill-tag">Spring Boot</span>
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">Flask</span>
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Pandas</span>
                  <span className="skill-tag">NumPy</span>
                </div>
              </div>

              <div className="skills-category">
                <h5 className="skills-category-title">Cloud Deployment:</h5>
                <div className="skills-list">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Azure</span>
                  <span className="skill-tag">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
