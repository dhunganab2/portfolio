import React from 'react';

const projectsData = [
  { 
    title: 'Code Editor App', 
    desc: 'A modern code editor with syntax highlighting, auto-completion, and real-time collaboration. Built with React and Node.js, featuring a sleek dark mode interface.', 
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tech: ['React', 'Node.js', 'Socket.io', 'CodeMirror'] 
  },
  { 
    title: 'Tech Blog Platform', 
    desc: 'A minimalist blogging platform for developers with markdown support, code snippets, and a clean reading experience. Features user authentication and commenting system.', 
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    tech: ['TypeScript', 'React', 'MongoDB', 'Express'] 
  },
  { 
    title: 'Weather Dashboard', 
    desc: 'A sleek weather application that provides real-time weather data and forecasts. Features dark mode UI, interactive maps, and hourly predictions using advanced APIs.', 
    img: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1551&q=80',
    tech: ['JavaScript', 'React', 'Weather API', 'Chart.js'] 
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
              <h3>{project.title}</h3>
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