import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { SITE } from '../data/site.js';

const ROLE = 'Full-Stack Developer';

export default function Hero() {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? ROLE : '');
  const [photoOk, setPhotoOk] = useState(true);

  useEffect(() => {
    if (reduce) { setTyped(ROLE); return; }
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setTyped(ROLE.slice(0, n));
      if (n >= ROLE.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, [reduce]);

  const enter = (d = 0) => (reduce ? {} : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d } });

  return (
    <section id="home" className="wrap hero">
      <motion.div {...enter()}>
        <span className="avail"><b />Information Technology Undergraduate</span>
        <p className="hello">Hello, I’m</p>
        <h1>Chamodya <span>Rajapaksha</span></h1>
        <p className="term"><em>&gt;</em><span>{typed}</span><u>_</u></p>
        <p className="lead">Information Technology undergraduate interested in full-stack development, building practical software and growing through hands-on projects.</p>
        <div className="row">
          <a className="btn p" href="#projects">View Projects <ArrowRight size={18} /></a>
          {SITE.cv ? (
            <a className="btn" href={SITE.cv} download><Download size={18} />Download CV</a>
          ) : (
            <button className="btn" type="button" disabled title="Add your CV PDF to public/resume to enable this download">
              <Download size={18} />CV not available
            </button>
          )}
        </div>
        <div className="soc2">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
        </div>
      </motion.div>

      <motion.div className="orb" {...enter(0.15)}>
        <div className="ring">
          {photoOk ? (
            <img className="pf" src={SITE.photo} alt="Portrait of Chamodya Rajapaksha" width="640" height="640" decoding="async" onError={() => setPhotoOk(false)} />
          ) : (
            <div className="cr" role="img" aria-label="CR initials placeholder for profile photo"><b>CR</b></div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
