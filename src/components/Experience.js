import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3>Bachelor of Science in Computer Science</h3>
                <p className="experience-company"><a href="https://www.nku.edu/" target="_blank" rel="noopener noreferrer">Northern Kentucky University</a> | Highland Heights, Kentucky</p>
              </div>
              <span className="experience-date">Expected May 2026</span>
            </div>
            <ul className="experience-description">
              <li>CGPA: 3.77/4.00</li>
              <li>Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Testing and Maintainance , Machine Learning, Operating Systems,Theory of Computations,
                Artificial Intelligence, Windows Adminstration</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3>Teaching Assistant</h3>
                <p className="experience-company">College of Informatics | Highland Heights, Kentucky</p>
              </div>
              <span className="experience-date">Jan 2025 – May 2025</span>
            </div>
            <ul className="experience-description">
              <li>Conducted 3–4 hours of weekly virtual office hours, supporting 60+ students by guiding them through course concepts and assignments, and addressing individual challenges, leading to a 30% boost in student engagement.</li>
              <li>Graded weekly class activities, labs, and assignments for over 60 students, ensuring fair, consistent, and timely evaluation while providing constructive feedback that boosted student performance and assignment completion rates by 25%.</li>
              <li>Collaborated with the course instructor to prepare materials, monitor student progress, and coordinate class activities, while delivering guest lectures streamlining course operations and boosting efficiency by 35%.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-title-group">
                <h3>Research Assistant</h3>
                <p className="experience-company">NKU College of Informatics | Highland Heights, Kentucky</p>
              </div>
              <span className="experience-date">Oct 2024 – Present</span>
            </div>
            <ul className="experience-description">
              <li>Co-authored a peer-reviewed paper titled "Evaluating Output Novelty in Iterative Prompting in Educational Content Generation", accepted at ICETC 2025 — proposing a novelty metric that automated 90.52% of classification and reduced review time.</li>
              <li>Designed and analyzed experiments using five LLMs (ChatGPT 4o, Claude 3.7, Gemini 2.5 Flash, DeepSeek v3, and r1), benchmarking model efficiency and improving course outline generation accuracy by 35%.</li>
              <li>Implemented and analyzed lexical and semantic similarity methods Jaccard, CosinE, BERT embeddings, and Jaro-Winkler distance to evaluate novelty in LLM-generated course outlines, improving classification accuracy by 35%.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

