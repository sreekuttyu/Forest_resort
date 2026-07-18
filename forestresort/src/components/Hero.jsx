import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero — Verde Cove Forest Retreat">

      {/* Background video + overlay */}
      <div className="hero__bg" aria-hidden="true">
        <video autoPlay muted loop playsInline className="hero__video">
          <source src="/ai vedio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero__overlay" />
      </div>

      {/* Text content */}
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__eyebrow">
            © Cedar Highlands · Est. 1998
          </p>
          <h1 className="hero__heading">
            Deep in the<br />ancient forest.
          </h1>
          <p className="hero__body">
            Verde Cove is a barefoot-luxury retreat hidden inside protected
            rainforest — mist-covered mornings, birdsong, and the quiet
            company of thousand-year-old trees.
          </p>
          <div className="hero__ctas">
            <Link to="/contact" className="hero__btn-ghost">
              Reserve a Cabin →
            </Link>
            <a href="#about" className="hero__btn-outline">
              Explore Resort
            </a>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>

    </section>
  );
}
