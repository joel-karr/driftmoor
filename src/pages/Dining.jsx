import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CTA from '../components/CTA';

const menus = [
  {
    season: 'Spring',
    items: [
      { name: 'Ramp & Ricotta Toast', desc: 'Foraged ramps, house-made ricotta, sourdough, chili oil' },
      { name: 'Morel Mushroom Risotto', desc: 'Arborio rice, local morels, parmesan, spring peas' },
      { name: 'Lamb Shoulder', desc: 'Slow-roasted, mint gremolata, new potatoes, asparagus' },
      { name: 'Rhubarb Crumble', desc: 'Garden rhubarb, oat streusel, vanilla bean cream' },
    ],
  },
  {
    season: 'Summer',
    items: [
      { name: 'Heirloom Tomato Salad', desc: 'Garden tomatoes, burrata, basil, aged balsamic' },
      { name: 'Grilled Whole Trout', desc: 'Herb butter, charred lemon, summer squash' },
      { name: 'Dry-Aged Ribeye', desc: 'Local pasture-raised beef, chimichurri, grilled corn' },
      { name: 'Stone Fruit Galette', desc: 'Peaches, plums, almond frangipane, honey ice cream' },
    ],
  },
  {
    season: 'Autumn',
    items: [
      { name: 'Butternut Squash Soup', desc: 'Roasted squash, brown butter, sage, pepitas' },
      { name: 'Duck Breast', desc: 'Pan-seared, cherry gastrique, root vegetables' },
      { name: 'Wild Mushroom Pasta', desc: 'Hand-cut pappardelle, hen of the woods, truffle' },
      { name: 'Apple Tarte Tatin', desc: 'Local apples, caramel, crème fraîche' },
    ],
  },
  {
    season: 'Winter',
    items: [
      { name: 'Celery Root Bisque', desc: 'Roasted celery root, truffle oil, chive' },
      { name: 'Braised Short Rib', desc: 'Red wine braise, creamy polenta, gremolata' },
      { name: 'Venison Loin', desc: 'Pan-roasted, juniper, parsnip purée, kale' },
      { name: 'Chocolate Pot de Crème', desc: 'Dark chocolate, sea salt, whipped cream' },
    ],
  },
];

export default function Dining() {
  return (
    <>
      <PageHero label="Restaurant" title="The Table" subtitle="Farm-to-table dining rooted in the Illinois landscape" />

      <section className="section">
        <div className="container">
          <div className="intro__grid intro__grid--reverse">
            <Reveal className="intro__image">
              <img src="/images/chef-plating.png" alt="Chef plating seasonal dish" className="section-img section-img--tall" />
            </Reveal>
            <Reveal>
              <span className="section__label">Our Kitchen</span>
              <h2 className="section__title">Grown Here, Served Here</h2>
              <p>The Driftmoor kitchen is led by a philosophy as old as the land itself: cook what the season gives you. Our half-acre garden, greenhouse, and partnerships with neighboring farms ensure that every plate reflects this place, right now.</p>
              <p>Dinner is served family-style in our restored timber hall, a communal gathering designed to slow you down. Breakfast is a quieter affair — delivered to your cabin each morning or enjoyed at the main lodge.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <span className="section__label section__label--center">Sample Menus</span>
          <h2 className="section__title section__title--center">A Taste of the Seasons</h2>
          <p className="menu__intro">Our menu changes weekly based on what the garden and our partner farms provide. Below is a glimpse of recent offerings.</p>
          <div className="menu__grid">
            {menus.map((menu) => (
              <Reveal key={menu.season} className="menu-card">
                <h3 className="menu-card__season">{menu.season}</h3>
                <div className="menu-card__items">
                  {menu.items.map((item) => (
                    <div key={item.name} className="menu-item">
                      <span className="menu-item__name">{item.name}</span>
                      <span className="menu-item__desc">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro__grid">
            <Reveal>
              <span className="section__label">Breakfast</span>
              <h2 className="section__title">Morning at Driftmoor</h2>
              <p>Wake to a basket delivered quietly to your cabin door: fresh pastries from our kitchen, seasonal fruit, house-made granola, and a thermos of locally roasted coffee. Or join us at the main lodge for a full breakfast service — eggs from our own hens, thick-cut bacon, and sourdough pancakes with maple syrup.</p>
            </Reveal>
            <Reveal className="intro__image">
              <img src="/images/breakfast-basket.png" alt="Breakfast basket on cabin porch" className="section-img section-img--tall" />
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Join Us at The Table"
        text="Dinner is included with every cabin stay. Additional guests welcome by reservation."
        buttonText="Make a Reservation"
      />
    </>
  );
}
