import { useState, useEffect } from 'react';

import StarsCanvas from './componenets/canvas/Stars';
import Experience from './componenets/Experience';
import Projects from './componenets/Projects';
import Contact from './componenets/Contact';
import Header from './componenets/Header';
import About from './componenets/About';
import Hero from './componenets/Hero';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>('home');

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entires) => {
      entires.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('id'));
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <div className='relative'>
          <Contact />
          <StarsCanvas />
        </div>
      </main>
    </>
  );
}

export default App;
