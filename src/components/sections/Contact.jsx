import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { socials } from '../../data/navigation.js';
import { emailConfig } from '../../data/profile.js';
import SectionLabel from '../ui/SectionLabel.jsx';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    emailjs.init({ publicKey: emailConfig.publicKey });
  }, []);

  const buttonText = {
    idle: 'Send message',
    missing: 'Fill in all fields',
    sending: 'Sending...',
    sent: 'Sent ✓',
    error: 'Something went wrong',
  }[status];

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
  };

  const resetStatusSoon = () => {
    window.setTimeout(() => setStatus('idle'), 3000);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('missing');
      window.setTimeout(() => setStatus('idle'), 2000);
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        message: form.message.trim(),
      });
      setForm(initialForm);
      setStatus('sent');
      resetStatusSoon();
    } catch {
      setStatus('error');
      resetStatusSoon();
    }
  };

  return (
    <section id="contact">
      <SectionLabel>04 — Contact</SectionLabel>
      <div className="contact-inner">
        <div className="contact-left reveal">
          <h2>Let's build something together.</h2>
          <p>
            I'm currently open to internships, AI/data projects, and select freelance collaborations. If you have something
            interesting in mind, I'd love to hear about it.
          </p>
          <div className="contact-links">
            {socials.map(social => (
              <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-link"
                key={social.href}
              >
                <span>{social.display}</span>
                <span className="contact-link-label">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button className="form-submit" type="submit" disabled={status === 'sending'}>
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
