import React from 'react';
import Navbar from './components/navbar';
import Homepage from './components/Homepage';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import './styles.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Homepage />
        <Experience />
        <Projects />
        <Research />
      </main>
      <footer className="site-footer">
        Copyright © 2026 Bijay Dhungana. All rights reserved.
      </footer>
    </div>
  );
}

export default App;