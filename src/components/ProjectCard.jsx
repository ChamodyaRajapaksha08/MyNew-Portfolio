import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Reveal from './Reveal.jsx';

function getGithubRepositoryUrl(value) {
  if (typeof value !== 'string') return null;

  try {
    const markdownLink = value.trim().match(/^\[[^\]]+\]\((https:\/\/github\.com\/[^)\s]+)\)$/i);
    const url = new URL(markdownLink ? markdownLink[1] : value.trim());
    const hasGithubPath = /^\/[^/]+(?:\/[^/]+)?\/?$/.test(url.pathname);
    return url.protocol === 'https:' && url.hostname.toLowerCase() === 'github.com' && hasGithubPath ? url.href : null;
  } catch {
    return null;
  }
}

export default function ProjectCard({ project, index }) {
  const { category, title, description, role, technologies, contributions, githubUrl, demo } = project;
  const repositoryUrl = getGithubRepositoryUrl(githubUrl);

  return (
    <Reveal as="article" className="glass card proj project-card" delay={index * 0.05}>
      <div className="project-card-meta">
        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-category">{category}</span>
      </div>
      <div className="project-card-copy">
        <h3>{title}</h3>
        <p>{description}</p>
        {role && <p className="project-role"><strong>Role:</strong> {role}</p>}
        {contributions?.length > 0 && (
          <div className="project-contributions">
            <h4>Key Contributions</h4>
            <ul>
              {contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
            </ul>
          </div>
        )}
      </div>
      {technologies.length > 0 ? (
        <div className="chips project-technologies" aria-label="Technologies">
          {technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      ) : (
        <p className="project-stack-unavailable">Technology details not available.</p>
      )}
      <div className="project-card-footer">
        {repositoryUrl ? (
          <a className="project-source" href={repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code on GitHub`}>
            <span><Github size={18} />Source Code</span>
            <ArrowRight size={18} />
          </a>
        ) : (
          <span className="repository-unavailable"><Github size={17} />Repository not available</span>
        )}
        {demo && <a className="project-demo" href={demo} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink size={15} /></a>}
      </div>
    </Reveal>
  );
}
