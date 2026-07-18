import { useState } from 'react';
import '../components/Contact.css';

export default function ContactPage() {
  const [form, setForm]   = useState({ name: '', email: '', checkin: '', checkout: '', guests: '2', message: '' });
  const [sent, setSent]   = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page-wrapper">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Ready to book your forest retreat? We're here to help.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="contact__inner">
            {/* Info */}
            <div className="contact__info">
              <p className="contact__desc">
                Fill in your details and our team will craft a stay tailored to you.
              </p>
              <ul className="contact__details">
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  Cedar Valley Reserve, Highland Region
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  +1 (555) 018-2244
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  hello@verdecove.com
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="contact__form-wrap">
              {sent ? (
                <div className="contact__success" role="status">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>We've received your request!</h3>
                  <p>Our team will be in touch within 24 hours to confirm your reservation.</p>
                </div>
              ) : (
                <form className="contact__form" onSubmit={submit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full name</label>
                      <input id="name" name="name" type="text" placeholder="Jane Smith"
                        value={form.name} onChange={handle} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input id="email" name="email" type="email" placeholder="jane@example.com"
                        value={form.email} onChange={handle} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="checkin">Check-in</label>
                      <input id="checkin" name="checkin" type="date"
                        value={form.checkin} onChange={handle} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout">Check-out</label>
                      <input id="checkout" name="checkout" type="date"
                        value={form.checkout} onChange={handle} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Number of guests</label>
                    <select id="guests" name="guests" value={form.guests} onChange={handle}>
                      {[1,2,3,4,5,6].map(n => (
                        <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Special requests (optional)</label>
                    <textarea id="message" name="message" rows={4}
                      placeholder="Dietary requirements, celebrations, accessibility needs…"
                      value={form.message} onChange={handle} />
                  </div>
                  <button type="submit" className="btn btn--primary form-submit">
                    Send enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
