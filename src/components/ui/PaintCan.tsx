interface PaintCanProps {
  color: string;       // main paint colour (any CSS colour)
  label?: string;      // text on the label band
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * A pure-CSS paint bucket / tin illustration.
 * Looks like a cylindrical metal can with a coloured paint fill and a label band.
 */
export default function PaintCan({ color, label, size = "md", className = "" }: PaintCanProps) {
  const dims = {
    sm: { w: 64,  h: 72,  handle: 28 },
    md: { w: 96,  h: 108, handle: 42 },
    lg: { w: 128, h: 144, handle: 56 },
  }[size];

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      style={{ width: dims.w, height: dims.h + 10 }}
      aria-hidden
    >
      {/* Handle (wire arc) */}
      <div
        style={{
          width: dims.handle,
          height: dims.handle * 0.55,
          borderRadius: `${dims.handle}px ${dims.handle}px 0 0`,
          border: "3px solid #94a3b8",
          borderBottom: "none",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />

      {/* Can body */}
      <div
        style={{
          width: dims.w,
          height: dims.h,
          position: "absolute",
          bottom: 0,
          borderRadius: `${dims.w * 0.12}px`,
          overflow: "hidden",
          boxShadow: "inset -6px 0 12px rgba(0,0,0,0.25), inset 6px 0 8px rgba(255,255,255,0.12), 0 4px 16px rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      >
        {/* Metal body top */}
        <div style={{
          height: "18%",
          background: "linear-gradient(180deg, #cbd5e1 0%, #94a3b8 100%)",
          borderBottom: "2px solid #64748b",
        }} />

        {/* Paint colour fill */}
        <div style={{
          height: "50%",
          background: `linear-gradient(135deg, ${color}dd 0%, ${color} 50%, ${color}99 100%)`,
          position: "relative",
        }}>
          {/* Paint sheen */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "30%",
            background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
          }} />
        </div>

        {/* Label band */}
        <div style={{
          height: "32%",
          background: "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 6px",
          borderTop: "1px solid #94a3b8",
          borderBottom: "1px solid #94a3b8",
        }}>
          {label && (
            <span style={{
              fontSize: dims.w * 0.1,
              fontWeight: 800,
              color: "#1e293b",
              textAlign: "center",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}>
              {label}
            </span>
          )}
        </div>

        {/* Metal base */}
        <div style={{
          flex: 1,
          background: "linear-gradient(180deg, #94a3b8 0%, #64748b 100%)",
          borderTop: "2px solid #475569",
        }} />
      </div>
    </div>
  );
}
