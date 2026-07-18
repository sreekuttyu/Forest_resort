import './Gallery.css';

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', alt: 'Aerial view of forest canopy at dawn', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=600&q=80', alt: 'Cabin porch with morning mist rolling in' },
  { src: 'https://images.unsplash.com/photo-1540202404-a2f29564d27c?w=600&q=80', alt: 'Rustic interior with warm candlelight' },
  { src: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=600&q=80', alt: 'Forest trail covered in fallen leaves' },
  { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80', alt: 'Campfire under a star-filled sky', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&q=80', alt: 'Outdoor dining table set among the trees' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="gallery__header">
          <p className="section-eyebrow">Gallery</p>
          <h2 id="gallery-heading" className="section-heading">
            Life at Verde Cove.
          </h2>
        </div>
        <div className="gallery__grid">
          {IMAGES.map((img, i) => (
            <figure
              key={i}
              className={`gallery__item${img.span === 'wide' ? ' gallery__item--wide' : ''}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
