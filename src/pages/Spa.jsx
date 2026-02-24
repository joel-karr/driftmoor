import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CTA from '../components/CTA';

const treatments = [
  { title: 'Prairie Massage', duration: '60 / 90 min', desc: 'A deeply relaxing full-body massage using warm herbal oils infused with lavender and chamomile from our garden. Designed to release tension and restore calm.' },
  { title: 'Hot Stone Therapy', duration: '75 min', desc: "Smooth basalt stones heated and placed along the body's meridians, combined with deep tissue work. Particularly restorative after a day on the trails." },
  { title: 'Wildflower Body Scrub', duration: '45 min', desc: 'A full-body exfoliation using a blend of raw honey, sea salt, and dried wildflower petals. Followed by a warm rinse and botanical moisturizer.' },
  { title: 'Forest Bathing Facial', duration: '60 min', desc: 'A rejuvenating facial using oak bark extract, green clay, and botanical serums. Performed in our open-air pavilion for a true connection with nature.' },
  { title: 'Fireside Foot Ritual', duration: '30 min', desc: 'A warming foot soak with mineral salts and essential oils, followed by reflexology massage. Enjoyed beside the spa lodge fireplace.' },
  { title: 'Couples Twilight Experience', duration: '120 min', desc: 'Begin with a private soak in the rock hot tub, followed by side-by-side massages in the pavilion, and conclude with herbal tea by the fire.' },
];

const activities = [
  'Morning meadow yoga (seasonal)',
  'Forest labyrinth walking path',
  'Cold plunge pool',
  'Cedar barrel sauna',
  'Hammock grove',
  'Guided nature meditation',
];

export default function Spa() {
  return (
    <>
      <PageHero label="Wellness" title="The Spa" subtitle="Outdoor wellness rituals among ancient oaks and open sky" />

      <section className="section">
        <div className="container">
          <div className="intro__grid intro__grid--reverse">
            <Reveal className="intro__image">
              <img src="/images/spa-hot-tub.png" alt="Natural rock hot tub surrounded by boulders and ferns" className="section-img section-img--tall" />
            </Reveal>
            <Reveal>
              <span className="section__label">The Heart of the Spa</span>
              <h2 className="section__title">The Natural Rock Hot Tub</h2>
              <p>The centerpiece of the Driftmoor spa is our outdoor natural rock hot tub — a hand-built soaking pool set among mossy boulders, native ferns, and the canopy of hundred-year oaks. Fed by geothermally heated mineral water, it's a place to dissolve into the landscape.</p>
              <p>Open from dawn until late evening, the hot tub is available to all cabin guests. At night, with no light pollution for miles, you'll soak beneath a sky dense with stars.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <span className="section__label section__label--center">Treatments</span>
          <h2 className="section__title section__title--center">Spa Services</h2>
          <p className="menu__intro">All treatments use botanicals harvested from our gardens and locally sourced ingredients. Sessions take place in open-air treatment pavilions or in the warmth of our timber spa lodge.</p>
          <div className="spa__grid">
            {treatments.map((t) => (
              <Reveal key={t.title} className="spa-card">
                <h3 className="spa-card__title">{t.title}</h3>
                <p className="spa-card__duration">{t.duration}</p>
                <p className="spa-card__desc">{t.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section__label section__label--center">The Spa Grounds</span>
          <h2 className="section__title section__title--center">Spaces for Stillness</h2>
          <div className="gallery__grid">
            <Reveal className="gallery__item gallery__item--wide">
              <img src="/images/treatment-pavilion.png" alt="Open-air treatment pavilion at sunrise" className="section-img" />
            </Reveal>
            <Reveal className="gallery__item">
              <img src="/images/spa-lodge-interior.png" alt="Timber spa lodge interior" className="section-img" />
            </Reveal>
            <Reveal className="gallery__item">
              <img src="/images/relaxation-deck.png" alt="Relaxation deck with hammocks" className="section-img" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="intro__grid">
            <Reveal>
              <span className="section__label">Wellness Activities</span>
              <h2 className="section__title">Beyond the Spa</h2>
              <p>The Driftmoor wellness experience extends beyond treatments. Join our guided morning yoga sessions on the meadow deck, take a meditative walk on our forest labyrinth trail, or simply find a hammock among the trees and let the afternoon drift.</p>
              <ul className="simple-list">
                {activities.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </Reveal>
            <Reveal className="intro__image">
              <img src="/images/morning-yoga.png" alt="Morning yoga on the meadow deck" className="section-img section-img--tall" />
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Book a Treatment"
        text="Spa access is complimentary for all cabin guests. Treatments can be reserved at the time of booking or upon arrival."
        dark={false}
      />
    </>
  );
}
