import { Link } from 'react-router-dom';

export default function CTA({ title, text, buttonText = 'Reserve Your Stay', dark = true }) {
  return (
    <section className={`cta section${dark ? ' section--dark' : ''}`}>
      <div className="container cta__inner">
        <h2 className="section__title section__title--center">{title}</h2>
        <p className="cta__text">{text}</p>
        <Link to="/contact" className="btn btn--primary">{buttonText}</Link>
      </div>
    </section>
  );
}
