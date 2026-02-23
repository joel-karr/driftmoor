import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo" onClick={closeMenu}>Limberlost</Link>
        <button
          className={`nav__toggle${menuOpen ? ' active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav__links${menuOpen ? ' open' : ''}`}>
          <li><NavLink to="/cabins" onClick={closeMenu}>Cabins</NavLink></li>
          <li><NavLink to="/dining" onClick={closeMenu}>Dining</NavLink></li>
          <li><NavLink to="/spa" onClick={closeMenu}>Spa</NavLink></li>
          <li><NavLink to="/cocktails" onClick={closeMenu}>Cocktails</NavLink></li>
          <li><NavLink to="/contact" className="nav__cta" onClick={closeMenu}>Reserve</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
