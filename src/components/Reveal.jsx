import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ as = 'div', className = '', delay = 0, children, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
