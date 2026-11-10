import { Code2, GraduationCap, Layout } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function About() {
  return (
    <section id="about" className="wrap">
      <SectionHeading title="About Me" subtitle="A little about who I am and what I’m working towards." />
      <div className="bento">
        <Reveal className="glass card s4">
          <p className="big">
            I’m an Information Technology undergraduate at the University of Moratuwa, Institute of Technology, with an interest in Full-Stack
            Software Development. I enjoy developing practical software solutions, exploring modern technologies, and continuously improving my
            programming skills through hands-on projects.
          </p>
        </Reveal>
        <Reveal className="glass card s2"><div className="ico"><Code2 size={22} /></div><h3>Focus</h3><p>Full-Stack Software Development</p></Reveal>
        <Reveal className="glass card s3"><div className="ico"><GraduationCap size={22} /></div><h3>Studying</h3><p>Information Technology, University of Moratuwa</p></Reveal>
        <Reveal className="glass card s3"><div className="ico"><Layout size={22} /></div><h3>Approach</h3><p>Learning by building practical, hands-on projects</p></Reveal>
      </div>
    </section>
  );
}
