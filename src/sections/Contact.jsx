import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { SITE } from '../data/site.js';

const EMAILJS = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const hasEmailJs = Boolean(EMAILJS.service && EMAILJS.template && EMAILJS.key);

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (!v.subject.trim()) e.subject = 'Please add a subject.';
  if (v.message.trim().length < 10) e.message = 'Please write at least 10 characters.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'ok' | 'bad', text }
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => {
    const value = e.target.value;
    setValues((current) => ({ ...current, [k]: value }));
    setErrors((current) => current[k] ? { ...current, [k]: '' } : current);
  };

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);
    const normalizedValues = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, value.trim()])
    );
    const errs = validate(normalizedValues);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (hasEmailJs) {
      setSending(true);
      try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: EMAILJS.service,
            template_id: EMAILJS.template,
            user_id: EMAILJS.key,
            template_params: { from_name: normalizedValues.name, reply_to: normalizedValues.email, subject: normalizedValues.subject, message: normalizedValues.message },
          }),
        });
        if (!res.ok) throw new Error(await res.text());
        setStatus({ type: 'ok', text: 'Thank you! Your message was sent.' });
        setValues({ name: '', email: '', subject: '', message: '' });
      } catch {
        setStatus({ type: 'bad', text: 'Sorry, the message could not be sent. Please try again or contact me through LinkedIn.' });
      } finally {
        setSending(false);
      }
      return;
    }

    if (SITE.email) {
      const body = `${normalizedValues.message}\n\nFrom: ${normalizedValues.name} (${normalizedValues.email})`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(normalizedValues.subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ type: 'ok', text: 'Opening your email app with the message ready. Press send there to deliver it.' });
      return;
    }

    setStatus({ type: 'bad', text: 'Message not sent. No contact email is configured yet. Add your email in src/data/site.js or set the EmailJS keys in .env.' });
  }

  const field = (id, label, props = {}) => (
    <label htmlFor={id}>
      {label}
      {props.as === 'textarea' ? (
        <textarea id={id} name={id} value={values[id]} onChange={set(id)} aria-invalid={Boolean(errors[id])} aria-describedby={`${id}-error`} required minLength={10} />
      ) : (
        <input id={id} name={id} value={values[id]} onChange={set(id)} aria-invalid={Boolean(errors[id])} aria-describedby={`${id}-error`} required {...props} />
      )}
      <span className="err" id={`${id}-error`}>{errors[id]}</span>
    </label>
  );

  return (
    <section id="contact" className="wrap">
      <div className="contact">
        <Reveal className="contact-heading">
          <h2>Let&apos;s Connect</h2>
          <p className="sub">Have an opportunity or a question? I&apos;d love to hear from you.</p>
        </Reveal>
        <Reveal as="form" className="glass contact-form" noValidate onSubmit={onSubmit}>
          {field('name', 'Full Name', { autoComplete: 'name' })}
          {field('email', 'Email Address', { type: 'email', autoComplete: 'email' })}
          {field('subject', 'Subject')}
          {field('message', 'Message', { as: 'textarea' })}
          {status && <div className={`status show ${status.type}`} role={status.type === 'bad' ? 'alert' : 'status'}>{status.text}</div>}
          <button className="btn p" type="submit" disabled={sending}><Mail size={18} />{sending ? 'Sending…' : 'Send Message'}</button>
          {!hasEmailJs && !SITE.email && <p className="form-note">The form is not connected yet. Messages cannot be sent until an email address or EmailJS service is configured.</p>}
        </Reveal>
        <div className="links" aria-label="Contact links">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer"><Github size={18} />GitHub</a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} />LinkedIn</a>
          {SITE.email && <a href={`mailto:${SITE.email}`}><Mail size={18} />Email</a>}
        </div>
      </div>
    </section>
  );
}
