import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

// You'll need to sign up for EmailJS and get these values
// from your EmailJS dashboard: https://www.emailjs.com/
const SERVICE_ID = "YOUR_SERVICE_ID";  // Replace with your EmailJS service ID
const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
const USER_ID = "YOUR_USER_ID";       // Replace with your EmailJS user ID

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Your Name</label>
          </div>
          
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Your Email</label>
          </div>
          
          <div className="input-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Your Message</label>
          </div>
          
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <div className="status-message success">
              Your message has been sent! I'll get back to you soon.
            </div>
          )}
          
          {status === 'error' && (
            <div className="status-message error">
              Failed to send message. Please try again or contact me directly at dhunganabijay85@gmail.com
            </div>
          )}
        </form>
        
        <div className="contact-info">
          <p>You can also reach me at:</p>
        </div>
        
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