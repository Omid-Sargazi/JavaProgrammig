import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleNavClick = (section) => {
    let content = '';
    switch (section) {
      case 'About':
        content = <About />;
        break;
      case 'Projects':
        content = <Projects />;
        break;
      case 'Skills':
        content = <Skills />;
        break;
      case 'Contact':
        content = <Contact />;
        break;
      default:
        content = <About />;
    }

    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <Header onNavClick={handleNavClick} />
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
