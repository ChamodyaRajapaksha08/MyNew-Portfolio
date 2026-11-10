import skillIcons from '../data/skillIcons.js';

export default function TechIcon({ name }) {
  const svg = skillIcons[name];
  if (!svg) return <span className="bd-fallback" aria-hidden="true">{name.slice(0, 2)}</span>;
  return <span className="bd" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />;
}
