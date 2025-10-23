import React from 'react';

const Research = () => {
  return (
    <div className="research-section">
      <h2 className="section-title">Research</h2>
      <div className="research-grid">
        <div className="research-card">
          <h4>Analysis of the Content of ChatGPT's Memory: Types of Information, Security Implications, and User Perception</h4>
          <p className="research-authors">Authors: Bijay Dhungana, et al.</p>
          <p className="research-venue">Conference: 2025 48th MIPRO ICT and Electronics Convention (MIPRO) | Croatia</p>
          <p className="research-description">
            This research analyzes the content stored in ChatGPT's memory, examining the types of information retained, 
            the security implications of such storage, and user perceptions regarding privacy and data handling in AI systems.
          </p>
          <div className="research-links">
            <a href="https://www.researchgate.net/publication/393946465_Analysis_of_the_Content_of_ChatGPT's_Memory_Types_of_Information_Security_Implications_and_User_Perception" className="research-btn" target="_blank" rel="noopener noreferrer">ResearchGate</a>
            <a href="/01_19979_cis-4.pdf" className="research-btn" target="_blank" rel="noopener noreferrer">View Paper</a>
          </div>
        </div>

        <div className="research-card working">
          <h4>Evaluating Output Novelty in Iterative Prompting in Educational Content Generation</h4>
          <p className="research-venue">Conference: 2025 17th International Conference on Education Technology and Computers (ICETC)</p>
          <p className="research-description">
            To appear in Proceedings of the 2025 17th International Conference on Education Technology and Computers (ICETC)
          </p>
          <div className="research-links">
            <a href="https://www.researchgate.net/profile/Bijay-Dhungana-3?ev=hdr_xprf" className="research-btn" target="_blank" rel="noopener noreferrer">ResearchGate</a>
            <span className="research-btn publishing-soon">Publishing Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;

