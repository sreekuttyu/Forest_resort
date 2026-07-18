import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Home page sections
import Hero     from './components/Hero';
import About    from './components/About';
import Features from './components/Features';
import Rooms    from './components/Rooms';
import Gallery  from './components/Gallery';
import CTA      from './components/CTA';
import Contact  from './components/Contact';

// Standalone pages
import RoomsPage      from './pages/RoomsPage';
import AmenitiesPage  from './pages/AmenitiesPage';
import GalleryPage    from './pages/GalleryPage';
import ContactPage    from './pages/ContactPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Rooms />
      <Gallery />
      <CTA />
      <Contact />
    </main>
  );
}

export default function App() {
  const [theme, setTheme] = useState('forest');

  return (
    <Router>
      <div data-theme={theme}>
        <Navbar theme={theme} onThemeChange={setTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
