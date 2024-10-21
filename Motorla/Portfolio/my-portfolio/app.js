import React from 'react';
import './App.css';

function App() {
  const projects = [
    { name: 'Project One', description: 'Description of project one', demo: '#', github: '#' },
    { name: 'Project Two', description: 'Description of project two', demo: '#', github: '#' },
    // Add more projects as needed
  ];

  return (
    <div className="App">
      <header>
        <h1>Your Name</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I am a front-end developer with experience in HTML, CSS, and ReactJS.</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Responsive Design</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.demo}>Live Demo</a> | <a href={project.github}>GitHub</a>
          </div>
        ))}
      </section>

      <footer>
        <ul>
          <li><a href="https://github.com/your-profile">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/your-profile/">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
