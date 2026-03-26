/**
 * NuclearLogo – SVG logo for Nuclear Paints Ltd
 *
 * Composed of:
 *  • A paint-can silhouette with a lid and handle
 *  • A bold paint drip/splash erupting from the top
 *  • An "NP" monogram inside the can body
 *  • A gradient colour scheme matching the brand palette
 *
 * Props:
 *  size   – pixel size of the bounding box (default 48)
 *  className – extra Tailwind / CSS classes
 */
export default function NuclearLogo({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const id = "npl"; // short id prefix to avoid global SVG id collisions

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Nuclear Paints Ltd logo"
      role="img"
    >
      <defs>
        {/* Body gradient – deep blue → slate */}
        <linearGradient id={`${id}-body`} x1="12" y1="28" x2="52" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Lid gradient – yellow → orange */}
        <linearGradient id={`${id}-lid`} x1="10" y1="24" x2="54" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>

        {/* Splash gradient – yellow → red */}
        <linearGradient id={`${id}-splash`} x1="20" y1="0" x2="48" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>

        {/* Inner highlight */}
        <linearGradient id={`${id}-shine`} x1="14" y1="30" x2="26" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#f97316" floodOpacity="0.45" />
        </filter>

        {/* Glow filter for splash */}
        <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Paint splash erupting from lid ── */}
      <g filter={`url(#${id}-glow)`}>
        {/* Central tall drip */}
        <path
          d="M32 22 C31 17 29 12 32 4 C35 12 33 17 32 22Z"
          fill={`url(#${id}-splash)`}
        />
        {/* Left drip arc */}
        <path
          d="M32 20 C28 16 22 13 19 7 C24 10 28 15 32 20Z"
          fill={`url(#${id}-splash)`}
          opacity="0.9"
        />
        {/* Right drip arc */}
        <path
          d="M32 20 C36 16 42 13 45 7 C40 10 36 15 32 20Z"
          fill={`url(#${id}-splash)`}
          opacity="0.9"
        />
        {/* Far left splash droplet */}
        <path
          d="M27 15 C25 12 22 9 23 5 C26 7 27 11 27 15Z"
          fill="#fbbf24"
          opacity="0.75"
        />
        {/* Far right splash droplet */}
        <path
          d="M37 15 C39 12 42 9 41 5 C38 7 37 11 37 15Z"
          fill="#fbbf24"
          opacity="0.75"
        />
        {/* Central droplet at tip */}
        <ellipse cx="32" cy="3.5" rx="2" ry="2.5" fill="#fde68a" opacity="0.9" />
        {/* Tiny scattered droplets */}
        <circle cx="18" cy="10" r="1.2" fill="#f59e0b" opacity="0.8" />
        <circle cx="46" cy="10" r="1.2" fill="#f59e0b" opacity="0.8" />
        <circle cx="15" cy="16" r="0.8" fill="#fbbf24" opacity="0.6" />
        <circle cx="49" cy="16" r="0.8" fill="#fbbf24" opacity="0.6" />
      </g>

      {/* ── Can lid ── */}
      <g filter={`url(#${id}-shadow)`}>
        {/* Lid body – rounded rectangle */}
        <rect
          x="11" y="24" width="42" height="7"
          rx="3.5"
          fill={`url(#${id}-lid)`}
        />
        {/* Lid top highlight */}
        <rect
          x="11" y="24" width="42" height="3"
          rx="3.5"
          fill="#fde68a"
          opacity="0.4"
        />
        {/* Handle arc over lid */}
        <path
          d="M24 24 C24 19 40 19 40 24"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* ── Can body ── */}
      <rect
        x="13" y="31" width="38" height="28"
        rx="3"
        fill={`url(#${id}-body)`}
      />
      {/* Inner shine */}
      <rect
        x="13" y="31" width="38" height="28"
        rx="3"
        fill={`url(#${id}-shine)`}
      />

      {/* ── Label band ── */}
      <rect
        x="13" y="38" width="38" height="14"
        fill="#1e40af"
        opacity="0.55"
      />
      {/* Label top edge accent */}
      <line x1="13" y1="38" x2="51" y2="38" stroke="#3b82f6" strokeWidth="0.8" opacity="0.7" />
      <line x1="13" y1="52" x2="51" y2="52" stroke="#3b82f6" strokeWidth="0.8" opacity="0.7" />

      {/* ── NP Monogram ── */}
      <text
        x="32"
        y="49.5"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="11"
        letterSpacing="-0.5"
        fill="url(#npl-lid)"
      >
        NP
      </text>

      {/* ── Bottom rim ── */}
      <rect
        x="14" y="57" width="36" height="2"
        rx="1"
        fill="#f97316"
        opacity="0.6"
      />
    </svg>
  );
}
