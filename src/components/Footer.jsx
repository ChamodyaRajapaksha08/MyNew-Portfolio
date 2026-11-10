import { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { SITE } from '../data/site.js';

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer>
        <div className="wrap">
          <div className="footer-main">
            <a className="footer-name" href="#home">{SITE.name}</a>
            <p>Information Technology undergraduate · Full-Stack Developer</p>
          </div>
          <div className="row soc footer-social">
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </footer>
      <button className={`top ${show ? 'show' : ''}`} type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUp size={20} />
      </button>
    </>
  );
}
