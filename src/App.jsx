import IntroPreloader from './components/layout/IntroPreloader.jsx';
import CustomCursor from './components/layout/CustomCursor.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Skills from './components/sections/Skills.jsx';
import Projects from './components/sections/Projects.jsx';
import Contact from './components/sections/Contact.jsx';
import useMenu from './hooks/useMenu.js';
import usePreloader from './hooks/usePreloader.js';
import useScrollReveal from './hooks/useScrollReveal.js';

export default function App() {
  const menu = useMenu();
  const introDone = usePreloader();
  useScrollReveal();

  return (
    <>
      <IntroPreloader isDone={introDone} />
      <CustomCursor />
      <Navbar {...menu} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
