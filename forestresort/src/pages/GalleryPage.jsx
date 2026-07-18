import '../components/Gallery.css';

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80', alt: 'Aerial forest canopy' },
  { src: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=900&q=80', alt: 'Cabin in mist' },
  { src: 'https://images.unsplash.com/photo-1540202404-a2f29564d27c?w=900&q=80', alt: 'Cosy interior' },
  { src: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=900&q=80', alt: 'Forest path' },
  { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=80', alt: 'Starry night' },
  { src: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=900&q=80', alt: 'Outdoor dining' },
  { src: 'https://images.unsplash.com/photo-1486301515466-f3ad4e4d6e1a?w=900&q=80', alt: 'Morning light' },
  { src: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=900&q=80', alt: 'Forest detail' },
];

export default function GalleryPage() {
  return (
    <div className="page-wrapper">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Gallery</h1>
          <p className="page-subtitle">
            A visual journey through Verde Cove.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="gallery__grid gallery-full">
            {IMAGES.map((img, i) => (
              <figure key={i} className="gallery__item">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
