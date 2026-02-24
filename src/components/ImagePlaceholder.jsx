export default function ImagePlaceholder({ label, tall, src }) {
  return (
    <div className={`image-placeholder${tall ? ' image-placeholder--tall' : ''}${src ? ' image-placeholder--has-image' : ''}`}>
      {src ? (
        <img src={src} alt={label} loading="lazy" />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}
