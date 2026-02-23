import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Driftmoor</span>
          <p className="footer__tagline">Luxury campground &amp; retreat<br />Illinois countryside</p>
        </div>
        <div className="footer__links">
          <div className="footer__col">
            <h4>Experience</h4>
            <ul>
              <li><Link to="/cabins">Cabins</Link></li>
              <li><Link to="/dining">Restaurant</Link></li>
              <li><Link to="/spa">Spa</Link></li>
              <li><Link to="/cocktails">Cocktails</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Visit</h4>
            <ul>
              <li><Link to="/contact">Reservations</Link></li>
              <li><Link to="/contact#directions">Getting Here</Link></li>
              <li><Link to="/contact#faq">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Driftmoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
