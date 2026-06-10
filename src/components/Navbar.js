import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#about', label: 'about', num: '01' },
  { href: '#skills', label: 'skills', num: '02' },
  { href: '#projects', label: 'projects', num: '03' },
  { href: '#experience', label: 'experience', num: '04' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__brand-mark">K</span>
          <span>
            <span className="navbar__brand-name">eunjung</span>
            <span className="navbar__brand-dot">.dev</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="navbar__link">
              <span>{l.num}.</span> {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />
          <a href="#contact" className="navbar__cta">Contact</a>
        </div>
      </div>
    </header>
  );
}