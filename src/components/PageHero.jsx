export default function PageHero({ label, title, subtitle, className = '', image }) {
  return (
    <header
      className={`page-hero ${className}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="page-hero__overlay" />
      <div className="page-hero__content">
        <span className="section__label">{label}</span>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__subtitle">{subtitle}</p>
      </div>
    </header>
  );
}
