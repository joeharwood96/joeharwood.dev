export default function FeatureList({
  label = "Features",
  items,
  className,
}: {
  label?: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-sm text-neutral-500">{label}</p>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className="font-mono text-xs uppercase tracking-[0.06em] text-neutral-900"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
