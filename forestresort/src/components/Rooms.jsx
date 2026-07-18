import { Link } from 'react-router-dom';
import './Rooms.css';

const ROOMS = [
  {
    name:    'Forest Canopy Suite',
    type:    'Suite · 55 m²',
    price:   'From $420 / night',
    img:     'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    alt:     'Warm wooden interior of a forest suite with large windows',
    tags:    ['King bed', 'Private deck', 'Soaking tub'],
  },
  {
    name:    'Cedar Ridge Cabin',
    type:    'Cabin · 38 m²',
    price:   'From $290 / night',
    img:     'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80',
    alt:     'Rustic cedar cabin nestled among ancient trees',
    tags:    ['Queen bed', 'Fire pit', 'Outdoor shower'],
  },
  {
    name:    'Valley Hideaway',
    type:    'Studio · 28 m²',
    price:   'From $195 / night',
    img:     'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&q=80',
    alt:     'Cosy studio with natural stone and timber finishes',
    tags:    ['Double bed', 'Hammock', 'Spring water'],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="rooms" aria-labelledby="rooms-heading">
      <div className="container">
        <div className="rooms__header">
          <p className="section-eyebrow">Our Cabins</p>
          <h2 id="rooms-heading" className="section-heading">
            Rooms built for<br />the slow life.
          </h2>
        </div>

        <div className="rooms__grid">
          {ROOMS.map((room, i) => (
            <article key={i} className="room-card">
              <figure className="room-card__img-wrap">
                <img src={room.img} alt={room.alt} loading="lazy" />
              </figure>
              <div className="room-card__body">
                <div className="room-card__meta">
                  <span className="room-card__type">{room.type}</span>
                  <span className="room-card__price">{room.price}</span>
                </div>
                <h3 className="room-card__name">{room.name}</h3>
                <ul className="room-card__tags" aria-label="Room features">
                  {room.tags.map(t => <li key={t}>{t}</li>)}
                </ul>
                <Link to="/rooms" className="btn btn--primary room-card__cta">
                  Reserve →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="rooms__footer">
          <Link to="/rooms" className="btn btn--primary">
            View all rooms →
          </Link>
        </div>
      </div>
    </section>
  );
}
