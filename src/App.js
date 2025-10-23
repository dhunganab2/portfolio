import React from 'react';
import Navbar from './components/navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ThemeToggle />
      <section id="home">
        <Homepage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="research">
        <Research />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;