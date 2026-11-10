import { GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Education() {
  return (
    <section id="education" className="wrap">
      <SectionHeading title="Education" subtitle="My academic background." />
      <Reveal className="glass edu">
        <div className="ico" style={{ width: 56, height: 56, margin: 0 }}><GraduationCap size={26} /></div>
        <div>
          <h3>National Diploma in Technology (NDT)</h3>
          <p className="edu-qualification">Information Technology</p>
          <p>Institute of Technology, University of Moratuwa, Sri Lanka</p>
          <span className="edu-status">Undergraduate</span>
        </div>
      </Reveal>
    </section>
  );
}
