import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['About', 'Skills', 'Projects', 'Journey', 'Certifications', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header>
      <nav aria-label="Main">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>Chamodya</a>
        <ul id="main-navigation" className={open ? 'open' : ''}>
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={active === l.toLowerCase() ? 'on' : ''}
                aria-current={active === l.toLowerCase() ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a className="cta" href="#contact">Let’s Talk</a>
        <button className="burger" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
    </header>
  );
}
