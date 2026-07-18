import './About.css';

/* Using Unsplash source for placeholder images */
const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
    alt: 'Misty forest with towering redwood trees and a still pool',
  },
  {
    src: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&q=80',
    alt: 'String lights in the forest canopy at night',
  },
  {
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    alt: 'Sunlit green forest cabin deck surrounded by ferns',
  },
];

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        {/* Text row */}
        <div className="about__text-row">
          <div className="about__left">
            <p className="about__eyebrow">Our Sanctuary</p>
            <h2 id="about-heading" className="about__heading">
              Twenty-two hectares<br />of protected forest.
            </h2>
          </div>
          <div className="about__right">
            <p className="about__body">
              Only 34 cabins hide within the canopy, each hand-built from reclaimed cedar
              and local stone. Solar-powered, spring-fed, and rooted in the community that
              has called this valley home for centuries.
            </p>
            <p className="about__body about__body--spaced">
              Guests wake to birdsong, walk to breakfast on forest trails, and end the day
              somewhere between a hammock and the stars.
            </p>
          </div>
        </div>

        {/* Image grid */}
        <div className="about__gallery" aria-label="Gallery preview">
          {GALLERY_IMAGES.map((img, i) => (
            <figure key={i} className="about__gallery-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
