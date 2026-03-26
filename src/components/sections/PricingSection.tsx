import PaintCan from "@/components/ui/PaintCan";
import PaintCanDisplay from "@/components/ui/PaintCanDisplay";

const paintShowcase = [
  { color: "#3b82f6", label: "Sky Blue",   accent: "from-blue-400 to-blue-600",       bg: "#1e3a5f" },
  { color: "#22c55e", label: "Lime Green", accent: "from-green-400 to-emerald-600",    bg: "#052e16" },
  { color: "#f59e0b", label: "Amber",      accent: "from-yellow-400 to-orange-500",    bg: "#422006" },
  { color: "#ef4444", label: "Crimson",    accent: "from-red-400 to-red-600",          bg: "#1a0000" },
  { color: "#8b5cf6", label: "Violet",     accent: "from-purple-400 to-purple-600",    bg: "#1e1b4b" },
  { color: "#f8fafc", label: "Pure White", accent: "from-slate-300 to-slate-500",      bg: "#1e293b" },
  { color: "#ec4899", label: "Rose",       accent: "from-pink-400 to-pink-600",        bg: "#2d0a1a" },
  { color: "#06b6d4", label: "Cyan",       accent: "from-cyan-400 to-cyan-600",        bg: "#083344" },
];

const pricingCategories = [
  {
    title: "Fillers",
    icon: "🪣",
    color: "from-green-500 to-emerald-600",
    glowColor: "shadow-green-500/20",
    cans: [
      { color: "#e2e8f0", label: "Filler" },
      { color: "#f8fafc", label: "Primer" },
    ],
    bgFrom: "#052e16", bgTo: "#022c19",
    items: [
      { name: "Wall Filler – Interior (25 kg)", price: "KSh 800",   note: "Per bucket" },
      { name: "Wall Filler – Exterior (25 kg)", price: "KSh 1,400", note: "Per bucket" },
    ],
  },
  {
    title: "Premium Paints",
    icon: "🎨",
    color: "from-yellow-400 to-orange-500",
    glowColor: "shadow-yellow-400/20",
    featured: true,
    cans: [
      { color: "#3b82f6", label: "Blue"  },
      { color: "#eab308", label: "Gold"  },
      { color: "#ef4444", label: "Red"   },
    ],
    bgFrom: "#431407", bgTo: "#1c0500",
    items: [
      { name: "Premium Paint – 1 Litre",   price: "KSh 800",    note: "All finishes" },
      { name: "Premium Paint – 4 Litres",  price: "On Request", note: "Price varies by colour" },
      { name: "Premium Paint – 20 Litres", price: "On Request", note: "Price varies by colour" },
    ],
  },
  {
    title: "Bulk / Trade",
    icon: "🏭",
    color: "from-blue-500 to-indigo-600",
    glowColor: "shadow-blue-500/20",
    cans: [
      { color: "#1d4ed8", label: "Trade"  },
      { color: "#475569", label: "Grey"   },
      { color: "#1e293b", label: "Black"  },
      { color: "#dc2626", label: "Red"    },
    ],
    bgFrom: "#0f172a", bgTo: "#020617",
    items: [
      { name: "Standard 4 Litre Packs",  price: "Available",  note: "Across all product lines" },
      { name: "90 Litre Bulk Orders",    price: "On Request", note: "Trade & contractor pricing" },
      { name: "Custom Mix Orders",       price: "On Request", note: "Minimum order applies" },
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(234,179,8,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-orange-400/20">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Price{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              List
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Competitive pricing across all product ranges. Contact us for bulk and trade discounts.
          </p>
        </div>

        {/* ── Paint Can Showcase ── */}
        <div className="mb-20">
          <p className="text-center text-slate-500 text-xs font-semibold uppercase tracking-widest mb-8">
            Our Colour Range
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 justify-items-center">
            {paintShowcase.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div
                  className="rounded-2xl p-3 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{ background: `linear-gradient(160deg, ${item.bg}cc, ${item.bg})` }}
                >
                  <PaintCan color={item.color} label={item.label} size="sm" />
                </div>
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${item.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
                <p className="text-slate-500 text-xs font-semibold text-center group-hover:text-slate-300 transition-colors">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pricing cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingCategories.map((cat) => (
            <div
              key={cat.title}
              className={`relative rounded-2xl overflow-hidden ${
                cat.featured
                  ? "ring-2 ring-yellow-400/60 scale-105 shadow-2xl " + cat.glowColor
                  : "glass"
              }`}
            >
              {cat.featured && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 z-10" />
              )}

              {/* Paint cans display */}
              <div className="h-44 w-full overflow-hidden">
                <PaintCanDisplay
                  cans={cat.cans}
                  bgFrom={cat.bgFrom}
                  bgTo={cat.bgTo}
                  className="h-full"
                />
                {/* Category title overlay */}
                <div className="relative -mt-12 px-4 pb-2 flex items-end gap-3 z-10">
                  <span className="text-2xl drop-shadow-lg">{cat.icon}</span>
                  <div>
                    <h3 className="text-white font-black text-xl drop-shadow">{cat.title}</h3>
                    {cat.featured && (
                      <span className="inline-block text-xs font-bold bg-white/20 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                        Most Popular
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Coloured accent stripe */}
              <div className={`h-1 bg-gradient-to-r ${cat.color}`} />

              {/* Items */}
              <div className="bg-slate-900/90 p-6 space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-slate-200 font-medium text-sm">{item.name}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{item.note}</p>
                    </div>
                    <span className={`text-sm font-black whitespace-nowrap bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                      {item.price}
                    </span>
                  </div>
                ))}

                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-gradient-to-r ${cat.color} text-white hover:opacity-90 hover:scale-[1.02]`}
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-slate-500 text-sm mt-8">
          * Prices may vary depending on colour type, finish, and market conditions. All prices are exclusive of delivery charges.
        </p>
      </div>
    </section>
  );
}
