import './CTA.css';

export default function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container cta-section__inner">
        <p className="cta-section__eyebrow">Reserve Your Stay</p>
        <h2 id="cta-heading" className="cta-section__heading">
          Your patch of forest is waiting.
        </h2>
        <p className="cta-section__body">
          Book direct for a complimentary forest dinner, spa credit, and shuttle from
          the valley gate.
        </p>
        <div className="cta-section__btns">
          <a href="#contact" className="btn btn--primary cta-section__btn">
            View cabins →
          </a>
          <a href="#contact" className="btn btn--outline cta-section__btn">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
