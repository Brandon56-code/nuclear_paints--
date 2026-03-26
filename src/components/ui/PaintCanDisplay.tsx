import PaintCan from "./PaintCan";

interface PaintCanDisplayProps {
  cans: { color: string; label?: string }[];
  bgFrom?: string;
  bgTo?: string;
  className?: string;
}

/**
 * A decorative group of paint cans shown on a gradient background.
 * Used as product image cards.
 */
export default function PaintCanDisplay({
  cans,
  bgFrom = "#0f172a",
  bgTo = "#1e293b",
  className = "",
}: PaintCanDisplayProps) {
  return (
    <div
      className={`w-full h-full flex items-end justify-center pb-4 gap-3 ${className}`}
      style={{
        background: `linear-gradient(160deg, ${bgFrom} 0%, ${bgTo} 100%)`,
        minHeight: 160,
      }}
    >
      {cans.map((can, i) => (
        <PaintCan
          key={i}
          color={can.color}
          label={can.label}
          size={cans.length === 1 ? "lg" : cans.length <= 3 ? "md" : "sm"}
          className={i % 2 === 1 ? "mb-4" : ""}
        />
      ))}
    </div>
  );
}
