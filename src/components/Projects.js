import React from 'react';

const projectsData = [
  { 
    title: 'AI powered Expense Tracker',
    date: 'Jan 2025',
    desc: 'Personal finance web application with Firebase Authentication, OpenAI API integration for automatic expense categorization and budgeting recommendations. Features interactive data visualizations using Recharts/D3.js and responsive mobile-first design with CI/CD pipeline.', 
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    tech: ['Python', 'React', 'Firebase', 'OpenAI API', 'Recharts', 'D3.js'] 
  },
  { 
    title: 'Wanderer - Travel Companion Matching App',
    date: 'June 2025',
    desc: 'AI-driven travel companion platform with matching algorithms, automated trip planning using multi-agent AI system, and real-time messaging. Built with React/TypeScript frontend, Node.js/Express backend, Firebase infrastructure, and RESTful APIs for user profiles and map integration.', 
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    tech: ['React', 'TypeScript', 'Firebase', 'Node.js', 'Express', 'AI'] 
  },
];

const Projects = () => {
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
                <button className="project-btn">View Demo</button>
                <button className="project-btn">GitHub</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;