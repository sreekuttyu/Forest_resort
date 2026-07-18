import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'Rooms',     href: '/rooms' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Gallery',   href: '/gallery' },
  { label: 'Contact',   href: '/contact' },
];

export default function Navbar({ theme, onThemeChange }) {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Verde Cove Home">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C8 2 4 6 4 11c0 3.5 2 6.5 5 8l1 3h4l1-3c3-1.5 5-4.5 5-8 0-5-4-9-8-9z"
              fill="currentColor" opacity="0.9"/>
            <path d="M12 8v8M9 11l3-3 3 3" stroke="var(--primary-foreground)"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Verde Cove</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map(l => (
            <Link
              key={l.label}
              to={l.href}
              className={`navbar__link${location.pathname === l.href ? ' navbar__link--active' : ''}`}
            >{l.label}</Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <Link to="/contact" className="btn btn--primary navbar__cta">Book Stay</Link>

          {/* Mobile hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" className="navbar__mobile" aria-label="Mobile navigation">
          {NAV_LINKS.map(l => (
            <Link
              key={l.label}
              to={l.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >{l.label}</Link>
          ))}
          <Link to="/contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
            Book Stay
          </Link>
        </nav>
      )}
    </header>
  );
}
