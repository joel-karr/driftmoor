export default function ImagePlaceholder({ label, tall }) {
  return (
    <div className={`image-placeholder${tall ? ' image-placeholder--tall' : ''}`}>
      <span>{label}</span>
    </div>
  );
}
