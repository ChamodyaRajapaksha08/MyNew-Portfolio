import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" className="wrap">
      <SectionHeading title="Featured Projects" subtitle="Things I’ve been building and learning with." />
      <div className="project-grid">
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </section>
  );
}
