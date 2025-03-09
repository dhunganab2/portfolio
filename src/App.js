import React from 'react';
import Navbar from './components/navbar';
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Homepage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;