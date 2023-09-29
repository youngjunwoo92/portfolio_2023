import { BrowserRouter } from 'react-router-dom';

import Hedaer from './componenets/Hedaer';
import Hero from './componenets/Hero';
import About from './componenets/About';
import Experience from './componenets/Experience';
import Projects from './componenets/Projects';
import Contact from './componenets/Contact';

function App() {
  return (
    <BrowserRouter>
      <Hedaer />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </BrowserRouter>
  );
}

export default App;
