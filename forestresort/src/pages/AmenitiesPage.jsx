import '../components/Gallery.css';

const AMENITIES = [
  {
    title: 'Forest Trails',
    desc: 'Hand-maintained paths through 22 hectares of protected rainforest. Guided walks available.',
  },
  {
    title: 'Spring-Fed Pool',
    desc: 'Natural temperature swimming pool surrounded by native plantings and stone.',
  },
  {
    title: 'Wellness Pavilion',
    desc: 'Yoga, meditation, and massage spaces overlooking the valley.',
  },
  {
    title: 'Library & Lounge',
    desc: 'Curated collection of nature writing, local history, and field guides.',
  },
  {
    title: 'Communal Kitchen',
    desc: 'For guests who want to cook. Local produce available on request.',
  },
  {
    title: 'Bonfire Circle',
    desc: 'Gather around the stone fire pit for evening stories and stargazing.',
  },
];

export default function AmenitiesPage() {
  return (
    <div className="page-wrapper">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Amenities & Experiences</h1>
          <p className="page-subtitle">
            Everything you need for a restorative retreat in the forest.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="amenities-grid">
            {AMENITIES.map((a, i) => (
              <article key={i} className="amenity-card">
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
