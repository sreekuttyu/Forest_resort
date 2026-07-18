import './Features.css';

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C8.5 2 5 5.5 5 10c0 2.5 1.2 4.8 3 6.2V20h8v-3.8c1.8-1.4 3-3.7 3-6.2C19 5.5 15.5 2 12 2z"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M9 17v1a3 3 0 006 0v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 6v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Rooted in nature',
    body:  '70% of our land is left untouched. Wildlife corridors, native replanting, and zero single-use plastics on property.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 17l9-14 9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 17v-4a4 4 0 018 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Highland-quiet',
    body:  'No motors, no crowds, no traffic. Access is by hand-cart from the forest gate — silence is our loudest amenity.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l2.4 6.5H21l-5.7 4.1 2.2 6.6L12 15l-5.5 4.2 2.2-6.6L3 8.5h6.6z"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Quiet luxury',
    body:  'Linen, cedar, spring water, and time. Every cabin is off-grid and hand-finished by local craftspeople.',
  },
];

export default function Features() {
  return (
    <section id="amenities" className="features" aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">Why Verde Cove</h2>
      <div className="container">
        <div className="features__grid">
          {FEATURES.map((f, i) => (
            <article key={i} className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p  className="feature-card__body">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
