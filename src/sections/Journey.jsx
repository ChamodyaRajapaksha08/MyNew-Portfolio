import { Award, GraduationCap, Target, UsersRound } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { journey } from '../data/journey.js';

const journeyIcons = {
  education: GraduationCap,
  team: UsersRound,
  certificate: Award,
  goal: Target,
};

export default function Journey() {
  return (
    <section id="journey" className="wrap">
      <SectionHeading title="My Journey" subtitle="Education, milestones and the goals shaping my path in technology." />
      <div className="journey-list">
        {journey.map((item, index) => {
          const Icon = journeyIcons[item.type];
          return (
            <Reveal as="article" className="glass journey-card" key={item.id} delay={index * 0.04}>
              <span className="journey-icon" aria-hidden="true"><Icon size={21} /></span>
              <div className="journey-content">
                <div className="journey-meta">
                  <span className="journey-org">{item.org}</span>
                  <span className="journey-year">{item.year}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
