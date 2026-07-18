import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#home" className="footer__logo" aria-label="Verde Cove home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8 2 4 6 4 11c0 3.5 2 6.5 5 8l1 3h4l1-3c3-1.5 5-4.5 5-8 0-5-4-9-8-9z"
                fill="currentColor" opacity="0.9"/>
              <path d="M12 8v8M9 11l3-3 3 3"
                stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Verde Cove
          </a>
          <p className="footer__tagline">
            A secluded forest retreat deep in ancient cedar highlands.<br />
            Rooted in sustainability, wrapped in silence.
          </p>
        </div>

        {/* Explore */}
        <nav className="footer__nav" aria-label="Explore links">
          <p className="footer__nav-title">Explore</p>
          <ul>
            <li><a href="#rooms">Cabins &amp; Suites</a></li>
            <li><a href="#amenities">Amenities</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Reach us */}
        <div className="footer__contact">
          <p className="footer__nav-title">Reach Us</p>
          <address>
            Cedar Valley Reserve,<br />Highland Region
          </address>
          <a href="tel:+15550182244">+1 (555) 018-2244</a>
          <a href="mailto:hello@verdecove.com">hello@verdecove.com</a>

          {/* Social icons */}
          <div className="footer__social" aria-label="Social media links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:hello@verdecove.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <span>© {year} Verde Cove. All rights reserved.</span>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
