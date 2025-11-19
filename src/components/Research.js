import React from 'react';

const Research = () => {
  return (
    <div className="research-section">
      <h2 className="section-title">Research</h2>
      <div className="research-grid">
        <div className="research-card">
          <h4>Analysis of the Content of ChatGPT's Memory: Types of Information, Security Implications, and User Perception</h4>
    
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

        <div className="research-card">
          <h4>Evaluating Output Novelty in Iterative Prompting in Educational Content Generation</h4>
          <p className="research-venue">Conference: 2025 17th International Conference on Education Technology and Computers (ICETC)</p>
          <p className="research-description">
            This research evaluates the novelty of outputs generated through iterative prompting techniques in educational content creation, examining how successive prompt refinements affect the originality and diversity of AI-generated educational materials.
          </p>
          <div className="research-links">
            <a href="https://www.researchgate.net/publication/396923717_Evaluating_Output_Novelty_in_Iterative_Prompting_in_Educational_Content_Generation" className="research-btn" target="_blank" rel="noopener noreferrer">ResearchGate</a>
            <a href="/ICETC_2025_Paper.pdf" className="research-btn" target="_blank" rel="noopener noreferrer">View Paper</a>
          </div>
        </div>

        <div className="research-card">
          <h4>Benchmarking LLMs for Content Expansion: Measuring Novelty in Iterative Course Outline Generation</h4>
          <p className="research-venue">Conference: 2025 Information Systems and Computing Academic Professionals (ISCAP)</p>
          <p className="research-description">
            This research benchmarks various Large Language Models (LLMs) for educational content expansion, specifically measuring novelty and effectiveness in iterative course outline generation. The study evaluates how different LLMs perform in generating diverse and novel educational content through successive iterations.
          </p>
          <div className="research-links">
            <a href="https://www.researchgate.net/publication/397504945_Benchmarking_LLMs_for_Content_Expansion_Measuring_Novelty_in_Iterative_Course_Outline_Generation" className="research-btn" target="_blank" rel="noopener noreferrer">ResearchGate</a>
            <a href="/ISCAP.pdf" className="research-btn" target="_blank" rel="noopener noreferrer">View Paper</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;

