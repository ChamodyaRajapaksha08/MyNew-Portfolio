import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Journey from './sections/Journey.jsx';
import Certifications from './sections/Certifications.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <div className="bg" aria-hidden="true"><i /><i /></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
