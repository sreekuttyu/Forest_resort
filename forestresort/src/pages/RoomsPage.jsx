import { Link } from 'react-router-dom';
import './RoomsPage.css';

const ROOMS = [
  {
    id: 'forest-cabin',
    name:        'Forest Cabin',
    category:    'Deep in the trees',
    description: 'Wake surrounded by towering trees. Floor-to-ceiling glass and a wood-burning fireplace at the heart of a hand-crafted cedar cabin.',
    image:       'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    specs: [
      { icon: '📐', label: '72 m²' },
      { icon: '👥', label: '2 guests' },
      { icon: '🛏️', label: '1 King' },
      { icon: '📡', label: 'High-speed Wi-Fi' },
    ],
    tags:  ['Stone fireplace', 'Private deck', 'Forest-facing glass', 'Reclaimed cedar interiors'],
    price: '$420 / night',
  },
  {
    id: 'cedar-ridge',
    name:        'Cedar Ridge',
    category:    'Highland hideaway',
    description: 'Perched on the ridge. Panoramic forest views, wood stove, and a private trail to the waterfall.',
    image:       'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
    specs: [
      { icon: '📐', label: '56 m²' },
      { icon: '👥', label: '2 guests' },
      { icon: '🛏️', label: '1 Queen' },
      { icon: '📡', label: 'Starlink' },
    ],
    tags:  ['Wood stove', 'Outdoor shower', 'Trail access', 'Meditation deck'],
    price: '$340 / night',
  },
  {
    id: 'valley-nest',
    name:        'Valley Nest',
    category:    'Intimate sanctuary',
    description: 'Nestled in the valley floor. A studio refuge wrapped in ferns and silence, with a soaking tub under the canopy.',
    image:       'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80',
    specs: [
      { icon: '📐', label: '38 m²' },
      { icon: '👥', label: '2 guests' },
      { icon: '🛏️', label: '1 Queen' },
      { icon: '🚿', label: 'Outdoor shower' },
    ],
    tags:  ['Soaking tub', 'Hammock', 'Spring water', 'Stone & timber'],
    price: '$240 / night',
  },
];

export default function RoomsPage() {
  return (
    <div className="rooms-page">
      {/* Header */}
      <section className="rooms-page__header">
        <div className="container">
          <p className="section-eyebrow">Our Sanctuary</p>
          <h1 className="rooms-page__title">Cabins & suites.</h1>
          <p className="rooms-page__subtitle">
            Thirty-four handcrafted stays, no two alike. Every cabin is built with
            reclaimed cedar, natural fibers, and views chosen for the light.
          </p>
        </div>
      </section>

      {/* Rooms grid */}
      <section className="rooms-page__list">
        <div className="container">
          {ROOMS.map((room, idx) => (
            <article key={room.id} className="room-detail">
              {/* Image on alternating sides */}
              <figure className={`room-detail__image room-detail__image--${idx % 2 === 0 ? 'left' : 'right'}`}>
                <img src={room.image} alt={room.name} loading="lazy" />
              </figure>

              {/* Content */}
              <div className="room-detail__content">
                <p className="room-detail__category">{room.category}</p>
                <h2 className="room-detail__name">{room.name}</h2>
                <p className="room-detail__desc">{room.description}</p>

                {/* Specs grid */}
                <div className="room-detail__specs">
                  {room.specs.map((s, i) => (
                    <div key={i} className="room-spec">
                      <span className="room-spec__icon">{s.icon}</span>
                      <span className="room-spec__label">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <ul className="room-detail__tags">
                  {room.tags.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="room-detail__footer">
                  <span className="room-detail__price">{room.price}</span>
                  <button className="btn btn--primary">Reserve</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
