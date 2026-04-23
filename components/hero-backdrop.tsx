export default function HeroBackdrop({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 hero-gradient ${className}`}
    />
  );
}
