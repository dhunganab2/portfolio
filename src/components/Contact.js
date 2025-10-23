import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="social-icons">
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
    </section>
  );
};

export default Contact;