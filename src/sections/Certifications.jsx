import { Award, Download, Eye } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { certifications } from '../data/certifications.js';

export default function Certifications() {
  return (
    <section id="certifications" className="wrap">
      <SectionHeading title="Certifications & Qualifications" subtitle="Professional learning, technical certifications and academic qualifications." />
      <div className="certs">
        {certifications.map((c, i) => {
          return (
            <Reveal key={c.id} className="glass card cert" delay={i * 0.06}>
              <div className="cert-topline">
                <span className="cert-mark" aria-hidden="true"><Award size={20} strokeWidth={2} /></span>
                <span className="cert-category">{c.category}</span>
              </div>
              <div className="cert-copy">
                <h3>{c.title}</h3>
                <p className="cert-provider">{c.provider}</p>
              </div>
              {(c.year || c.status) && <p className="cert-date">{[c.year, c.status].filter(Boolean).join(' · ')}</p>}
              {c.tags?.length > 0 && (
                <ul className="cert-tags" aria-label="Topics">
                  {c.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              )}
              {(c.verification || c.document) && (
                <div className="cert-actions">
                  <button
                    className="cert-action"
                    type="button"
                    disabled={!c.verification}
                    title={!c.verification ? 'Certificate preview not available' : undefined}
                    onClick={() => window.open(c.verification, '_blank', 'noopener,noreferrer')}
                  >
                    <Eye size={16} />Preview
                  </button>
                  {c.document ? (
                    <a className="cert-action" href={c.document} download><Download size={16} />Download</a>
                  ) : (
                    <button className="cert-action" type="button" disabled title="Certificate download not available"><Download size={16} />Download</button>
                  )}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
