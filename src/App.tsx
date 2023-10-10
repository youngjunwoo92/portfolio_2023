import { lazy, useState, useEffect } from 'react';

const StarsCanvas = lazy(() => import('./componenets/canvas/Stars'));
const Experience = lazy(() => import('./componenets/Experience'));
const Projects = lazy(() => import('./componenets/Projects'));
const Contact = lazy(() => import('./componenets/Contact'));
const Header = lazy(() => import('./componenets/Header'));
const About = lazy(() => import('./componenets/About'));
const Hero = lazy(() => import('./componenets/Hero'));

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
