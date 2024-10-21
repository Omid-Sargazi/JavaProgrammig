import React from 'react';

const Projects = () => {
  const projectList = [
    { name: 'Project One', description: 'A cool project using React.', demo: '#', github: '#' },
    { name: 'Project Two', description: 'A responsive website using HTML and CSS.', demo: '#', github: '#' },
    // Add more projects here
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.demo}>Live Demo</a> | <a href={project.github}>GitHub</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
