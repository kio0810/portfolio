import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const sectionLinks = [
  { hash: '#about', label: 'about', num: '01' },
  { hash: '#skills', label: 'skills', num: '02' },
  { hash: '#projects', label: 'projects', num: '03' },
  { hash: '#experience', label: 'experience', num: '04' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToHash = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSectionClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToHash(hash), 80);
    } else {
      scrollToHash(hash);
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={handleBrandClick}>
          <span className="navbar__brand-mark">K</span>
          <span>
            <span className="navbar__brand-name">eunjung</span>
            <span className="navbar__brand-dot">.dev</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="primary">
          {sectionLinks.map((l) => (
            <a
              key={l.hash}
              href={l.hash}
              className="navbar__link"
              onClick={(e) => handleSectionClick(e, l.hash)}
            >
              <span>{l.num}.</span> {l.label}
            </a>
          ))}
          <Link to="/fun" className="navbar__link">
            <span>05.</span> fun
          </Link>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <a
            href="#contact"
            className="navbar__cta"
            onClick={(e) => handleSectionClick(e, '#contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
