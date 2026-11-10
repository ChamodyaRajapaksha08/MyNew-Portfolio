import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import TechIcon from '../components/TechIcon.jsx';
import { skillGroups, marqueeSkills } from '../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="wrap">
      <SectionHeading title="Technologies I work with" subtitle="The tools I use to design, build and ship full-stack applications." />
      <div className="bento skill-grid">
        {skillGroups.map((g) => (
          <Reveal key={g.title} className="glass sk skill-card">
            <h3>{g.title}</h3>
            <p className="d">{g.desc}</p>
            <ul className="sl">
              {g.items.map((item) => <li key={item}><TechIcon name={item} />{item}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
      <div className="mq" aria-label="Technology logo marquee">
        <div className="tr">
          {[0, 1].map((copy) => (
            <div className="mq-group" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
              {marqueeSkills.map((skill) => (
                <span className="it" key={`${copy}-${skill}`}><TechIcon name={skill} />{skill}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
