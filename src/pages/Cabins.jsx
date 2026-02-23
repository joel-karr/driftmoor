import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ImagePlaceholder from '../components/ImagePlaceholder';
import CTA from '../components/CTA';

const cabins = [
  {
    name: 'The Prairie',
    meta: 'Sleeps 2 · 480 sq ft · King bed',
    image: 'The Prairie cabin',
    desc: 'An intimate retreat for two. Floor-to-ceiling glass frames unbroken views of native tallgrass. Features a private deck with fire pit, outdoor shower, and soaking tub.',
    amenities: ['Wood-burning stove', 'Rainfall shower', 'Radiant floor heating', 'Private fire pit', 'Morning coffee pantry'],
  },
  {
    name: 'The Grove',
    meta: 'Sleeps 4 · 720 sq ft · King + bunks',
    image: 'The Grove cabin',
    desc: 'Nestled beneath a canopy of century-old oaks, The Grove is our family-friendly cabin. A generous living area, screened porch, and lofted bunks give everyone room to breathe.',
    amenities: ['Screened sleeping porch', 'Full kitchen', 'Lofted bunk room', 'Board games & books', 'Outdoor dining table'],
  },
  {
    name: 'The Ridgeline',
    meta: 'Sleeps 6 · 1,100 sq ft · 2 Kings + bunks',
    image: 'The Ridgeline cabin',
    desc: 'Our largest cabin crowns a gentle rise with panoramic views in every direction. Two private bedrooms, a grand stone fireplace, and wraparound deck make this ideal for gatherings.',
    amenities: ['Stone fireplace', 'Wraparound deck', 'Full kitchen & dining', 'Two full bathrooms', 'Outdoor hot tub'],
  },
];

const standardAmenities = [
  { title: 'Premium Linens', desc: 'Organic cotton sheets, down duvets, and Turkish towels' },
  { title: 'Morning Pantry', desc: 'Local roasted coffee, teas, pastries delivered at dawn' },
  { title: 'Firewood', desc: 'Seasoned hardwood stacked and ready for your stove or fire pit' },
  { title: 'Stargazing Kit', desc: 'Binoculars, constellation guide, and a wool blanket for the deck' },
  { title: 'Welcome Provisions', desc: 'Local cheese, charcuterie, seasonal fruit, and a bottle of wine' },
  { title: 'Wi-Fi & Bluetooth', desc: 'High-speed internet and premium speakers — if you choose to connect' },
];

export default function Cabins() {
  return (
    <>
      <PageHero label="Accommodations" title="The Cabins" subtitle="Handcrafted shelters designed for deep rest and quiet wonder" />

      <section className="section">
        <div className="container">
          <div className="intro__grid">
            <Reveal>
              <span className="section__label">Our Philosophy</span>
              <h2 className="section__title">Built by Hand, Designed for Stillness</h2>
              <p>Each Driftmoor cabin was designed by regional architects who understand the land. Locally milled timber, floor-to-ceiling windows, and thoughtful siting ensure every cabin feels both grounded and open to the landscape. No detail is accidental — from the angle of morning light on your bed to the sound of wind through the screen porch.</p>
              <p>Modern comforts are woven seamlessly into the rustic framework: radiant floor heating, rainfall showers, premium bedding, and a fully stocked pantry for morning coffee at your own pace.</p>
            </Reveal>
            <Reveal className="intro__image">
              <ImagePlaceholder label="Cabin exterior at twilight" tall />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <span className="section__label section__label--center">Choose Your Cabin</span>
          <h2 className="section__title section__title--center">Three Distinct Retreats</h2>
          <div className="cabins__grid">
            {cabins.map((cabin) => (
              <Reveal key={cabin.name} className="cabin-card">
                <div className="cabin-card__image">
                  <ImagePlaceholder label={cabin.image} />
                </div>
                <div className="cabin-card__body">
                  <h3 className="cabin-card__name">{cabin.name}</h3>
                  <p className="cabin-card__meta">{cabin.meta}</p>
                  <p className="cabin-card__desc">{cabin.desc}</p>
                  <ul className="cabin-card__amenities">
                    {cabin.amenities.map((a) => <li key={a}>{a}</li>)}
                  </ul>
                  <Link to="/contact" className="btn btn--outline">Reserve</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section__label section__label--center">Every Cabin Includes</span>
          <h2 className="section__title section__title--center">Standard Amenities</h2>
          <Reveal className="amenities__grid">
            {standardAmenities.map((a) => (
              <div key={a.title} className="amenity">
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA
        title="Find Your Cabin"
        text="Each stay includes access to all Driftmoor amenities — dining, spa, cocktail bar, and 200 acres of trails."
        buttonText="Check Availability"
      />
    </>
  );
}
