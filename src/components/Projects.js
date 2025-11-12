import React, { useState } from 'react';
import wanderImage from '../assets/Webapp.png';
import demoImage1 from '../assets/a.png';
import demoImage2 from '../assets/images/b.png';
import expenseTrackerImage from '../assets/1.png';
import expenseDemo1 from '../assets/2.png';
import expenseDemo2 from '../assets/3.png';

const projectsData = [
  { 
    title: 'AI powered Expense Tracker',
    date: 'Jan 2025',
    desc: 'Personal finance web application with Firebase Authentication, OpenAI API integration for automatic expense categorization and budgeting recommendations. Features interactive data visualizations using Recharts/D3.js and responsive mobile-first design with CI/CD pipeline.', 
    img: expenseTrackerImage,
    tech: ['Python', 'React', 'Firebase', 'OpenAI API', 'Recharts', 'D3.js'],
    demoImages: [expenseDemo1, expenseDemo2],
    githubUrl: ''
  },
  { 
    title: 'Wanderer - Travel Companion Matching App',
    date: 'June 2025',
    desc: 'AI-driven travel companion platform with matching algorithms, automated trip planning using multi-agent AI system, and real-time messaging. Built with React/TypeScript frontend, Node.js/Express backend, Firebase infrastructure, and RESTful APIs for user profiles and map integration.', 
    img: wanderImage,
    tech: ['React', 'TypeScript', 'Firebase', 'Node.js', 'Express', 'AI'],
    demoImages: [demoImage1, demoImage2],
    githubUrl: 'https://github.com/dhunganab2/Wanderer'
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openDemo = (project) => {
    if (project.demoImages && project.demoImages.length > 0) {
      setSelectedProject(project);
      setCurrentImageIndex(0);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.demoImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <p>{project.desc}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <button 
                  className="project-btn" 
                  onClick={() => openDemo(project)}
                  disabled={!project.demoImages || project.demoImages.length === 0}
                >
                  View Demo
                </button>
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl} 
                    className="project-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : (
                  <button className="project-btn" disabled>GitHub</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedProject && (
        <div className="demo-modal" onClick={closeModal}>
          <div className="demo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h3>{selectedProject.title} - Demo</h3>
            <div className="demo-gallery">
              <img 
                src={selectedProject.demoImages[currentImageIndex]} 
                alt={`Demo ${currentImageIndex + 1}`}
                className="demo-image"
              />
              <div className="gallery-controls">
                <button 
                  onClick={prevImage} 
                  disabled={currentImageIndex === 0}
                  className="gallery-btn"
                >
                  ← Previous
                </button>
                <span className="image-counter">
                  {currentImageIndex + 1} / {selectedProject.demoImages.length}
                </span>
                <button 
                  onClick={nextImage} 
                  disabled={currentImageIndex === selectedProject.demoImages.length - 1}
                  className="gallery-btn"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;