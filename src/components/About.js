import React from 'react';
// Import the profile image
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
              Besides this, I am a huge fan of Hip-hop. Currently my favorite artists are Kanye West, Travis Scott, and Playboi Carti. I also
              love exploring new places and trying new cuisine.
            </p>
            <div className="skills-container">
              <h4>Technical Skills</h4>
              <div className="skills-list">
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;