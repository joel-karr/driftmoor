import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ImagePlaceholder from '../components/ImagePlaceholder';
import CTA from '../components/CTA';

const cocktails = [
  { name: 'The Driftmoor', ingredients: 'Illinois bourbon, raw honey, lemon, thyme smoke', desc: 'Our namesake cocktail. A smoky, herbaceous old fashioned variation finished with a cloche of smoldering thyme from the garden.' },
  { name: 'Prairie Fire', ingredients: 'Mezcal, prickly pear, lime, smoked chili salt', desc: 'Bright, smoky, and warm. A nod to the controlled burns that keep our prairie thriving.' },
  { name: 'Wildflower Spritz', ingredients: 'Elderflower liqueur, prosecco, lavender bitters, soda', desc: 'Light and floral, ideal for a late afternoon on the terrace as the sun dips below the treeline.' },
  { name: 'Oak & Ember', ingredients: 'Rye whiskey, walnut liqueur, maple, aromatic bitters', desc: 'Rich and warming. Stirred, not shaken, and served with a single large ice cube cut from a block.' },
  { name: 'The Cold Plunge', ingredients: 'Gin, cucumber, mint, lime, tonic', desc: 'Crisp and bracing as a dip in the morning creek. Our twist on the classic G&T, with garden mint and house-pressed cucumber.' },
  { name: 'Fireside Toddy', ingredients: 'Apple brandy, honey, cinnamon, hot water, lemon', desc: 'A cold-weather essential. Served warm in a ceramic mug, best enjoyed close to the hearth.' },
];

const events = [
  { title: 'Whiskey Tasting', text: 'Guided flights of Illinois-distilled whiskeys with tasting notes and pairings. Fridays, by reservation.' },
  { title: 'Bonfire & Bourbon', text: "A communal bonfire on the meadow with bourbon cocktails, s'mores, and stories. Saturdays, weather permitting." },
  { title: "Stargazer's Nightcap", text: 'A late-evening drink service at the observation deck. Hot toddies, blankets, and constellations. Nightly.' },
];

const otherDrinks = [
  'Curated natural wine list',
  'Illinois craft beer on tap',
  'Local cider & mead',
  'Non-alcoholic cocktail menu',
  'House-made sodas & shrubs',
  'Hot chocolate & specialty coffee',
];

export default function Cocktails() {
  return (
    <>
      <PageHero label="The Bar" title="The Hearth" subtitle="Craft cocktails, local spirits, and fireside conversation" />

      <section className="section">
        <div className="container">
          <div className="intro__grid">
            <Reveal>
              <span className="section__label">Our Bar</span>
              <h2 className="section__title">Drinks Worth Lingering Over</h2>
              <p>The Hearth is Driftmoor's cocktail bar — a low-lit gathering place built around a massive stone fireplace. Our bar program draws on the same philosophy as our kitchen: seasonal, local, and crafted with intention.</p>
              <p>Illinois-distilled spirits form the backbone of our menu, enhanced with house-made syrups, garden-grown herbs, and foraged botanicals. Whether you settle into a leather chair by the fire or take your drink to the outdoor terrace, The Hearth is where evenings at Driftmoor begin and end.</p>
            </Reveal>
            <Reveal className="intro__image">
              <ImagePlaceholder label="Bartender crafting a cocktail at The Hearth" tall src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <span className="section__label section__label--center">The Menu</span>
          <h2 className="section__title section__title--center">Signature Cocktails</h2>
          <p className="menu__intro">Our cocktail menu rotates with the seasons. These signatures capture the spirit of Driftmoor.</p>
          <div className="cocktail__grid">
            {cocktails.map((c) => (
              <Reveal key={c.name} className="cocktail-card">
                <h3 className="cocktail-card__name">{c.name}</h3>
                <p className="cocktail-card__ingredients">{c.ingredients}</p>
                <p className="cocktail-card__desc">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro__grid intro__grid--reverse">
            <Reveal className="intro__image">
              <ImagePlaceholder label="Outdoor terrace with string lights at dusk" tall src="https://images.unsplash.com/photo-1414604582943-2fd6305ad8b6?auto=format&fit=crop&w=1200&q=80" />
            </Reveal>
            <Reveal>
              <span className="section__label">Also Pouring</span>
              <h2 className="section__title">Beyond Cocktails</h2>
              <p>The Hearth also offers a curated wine list focused on small-production, sustainably farmed wines from the Midwest and beyond. Our beer selection highlights Illinois craft breweries, with rotating taps and seasonal selections.</p>
              <ul className="simple-list">
                {otherDrinks.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <span className="section__label section__label--center">Gatherings</span>
          <h2 className="section__title section__title--center">Special Evenings</h2>
          <div className="features__grid">
            {events.map((e) => (
              <Reveal key={e.title} className="feature-card">
                <h3 className="feature-card__title">{e.title}</h3>
                <p className="feature-card__text">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Pull Up a Chair"
        text="The Hearth is open nightly to all cabin guests. No reservation needed — just follow the firelight."
        buttonText="Book Your Stay"
        dark={false}
      />
    </>
  );
}
