import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ImagePlaceholder from '../components/ImagePlaceholder';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__tagline fade-in">90 minutes from Chicago</p>
          <h1 className="hero__title fade-in">Driftmoor</h1>
          <p className="hero__subtitle fade-in">A luxury campground &amp; retreat in the Illinois countryside</p>
          <Link to="/contact" className="btn btn--primary fade-in">Book Your Stay</Link>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </header>

      <section className="intro section">
        <div className="container">
          <div className="intro__grid">
            <Reveal>
              <span className="section__label">The Experience</span>
              <h2 className="section__title">Where Wilderness Meets Refinement</h2>
              <p>Driftmoor is not your ordinary campground. Set on 200 acres of rolling Illinois prairie and ancient oak groves, we've created a retreat where the beauty of the outdoors is matched by the comfort within. Every detail has been considered — from the hand-hewn timber of our cabins to the locally sourced ingredients on your plate.</p>
              <p>Leave the city behind. Arrive to birdsong, crackling fires, and a cocktail made just for you.</p>
            </Reveal>
            <Reveal className="intro__image">
              <ImagePlaceholder label="Prairie at golden hour" tall />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="features section section--dark">
        <div className="container">
          <span className="section__label section__label--center">What Awaits</span>
          <h2 className="section__title section__title--center">Four Pillars of Driftmoor</h2>
          <div className="features__grid">
            <Link to="/cabins" className="feature-card reveal-inline">
              <Reveal>
                <div className="feature-card__icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 56V28L32 8l24 20v28H8z" />
                    <path d="M24 56V40h16v16" />
                    <path d="M20 28h8v8h-8z" />
                  </svg>
                </div>
                <h3 className="feature-card__title">Cabins</h3>
                <p className="feature-card__text">Architect-designed cabins with premium linens, wood-burning stoves, and private decks overlooking the prairie.</p>
              </Reveal>
            </Link>
            <Link to="/dining" className="feature-card reveal-inline">
              <Reveal>
                <div className="feature-card__icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="32" cy="36" r="20" />
                    <path d="M20 36c0-6.6 5.4-12 12-12s12 5.4 12 12" />
                    <path d="M32 8v8M32 4v2" />
                  </svg>
                </div>
                <h3 className="feature-card__title">Restaurant</h3>
                <p className="feature-card__text">Farm-to-table dining featuring seasonal menus crafted from ingredients grown on-site and sourced from local farms.</p>
              </Reveal>
            </Link>
            <Link to="/spa" className="feature-card reveal-inline">
              <Reveal>
                <div className="feature-card__icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 44c0 8.8 9 16 20 16s20-7.2 20-16" />
                    <path d="M8 44h48" />
                    <path d="M24 44c-2-6-6-10-6-16a14 14 0 0128 0c0 6-4 10-6 16" />
                    <path d="M32 4v4M22 8l2 3M42 8l-2 3" />
                  </svg>
                </div>
                <h3 className="feature-card__title">Spa</h3>
                <p className="feature-card__text">Outdoor natural rock hot tub, body treatments, and wellness rituals surrounded by towering oaks and open sky.</p>
              </Reveal>
            </Link>
            <Link to="/cocktails" className="feature-card reveal-inline">
              <Reveal>
                <div className="feature-card__icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8h32L32 36 16 8z" />
                    <path d="M32 36v20" />
                    <path d="M22 56h20" />
                    <circle cx="38" cy="20" r="2" />
                  </svg>
                </div>
                <h3 className="feature-card__title">Cocktails</h3>
                <p className="feature-card__text">A curated bar program with craft cocktails, local spirits, and fireside drinks under the stars.</p>
              </Reveal>
            </Link>
          </div>
        </div>
      </section>

      <section className="gallery section">
        <div className="container">
          <span className="section__label section__label--center">Scenes from Driftmoor</span>
          <h2 className="section__title section__title--center">A Place Apart</h2>
          <div className="gallery__grid">
            <Reveal className="gallery__item gallery__item--wide">
              <ImagePlaceholder label="Morning mist over the meadow" />
            </Reveal>
            <Reveal className="gallery__item">
              <ImagePlaceholder label="Cabin interior at dusk" />
            </Reveal>
            <Reveal className="gallery__item">
              <ImagePlaceholder label="Natural rock hot tub" />
            </Reveal>
            <Reveal className="gallery__item">
              <ImagePlaceholder label="Fireside cocktails" />
            </Reveal>
            <Reveal className="gallery__item gallery__item--wide">
              <ImagePlaceholder label="Farm-to-table dinner service" />
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Escape to Driftmoor"
        text="Just 90 minutes from downtown Chicago, a world away from everything else."
        buttonText="Reserve Your Cabin"
      />
    </>
  );
}
