import Reveal from './Reveal.jsx';

export default function SectionHeading({ title, subtitle }) {
  return (
    <>
      <Reveal as="h2">{title}</Reveal>
      {subtitle && <Reveal as="p" className="sub">{subtitle}</Reveal>}
    </>
  );
}
