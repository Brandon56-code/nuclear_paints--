import Image from "next/image";

const paintShowcase = [
  {
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
    alt: "Interior wall being painted with white premium paint",
    label: "Interior Premium",
    accent: "from-yellow-400 to-orange-500",
  },
  {
    src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    alt: "Colourful paint swatches and chips spread out",
    label: "Color Range",
    accent: "from-pink-500 to-purple-600",
  },
  {
    src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    alt: "Exterior house being painted bright white",
    label: "Exterior Weather Guard",
    accent: "from-blue-400 to-cyan-500",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    alt: "Paint buckets and rollers on a construction site",
    label: "Bulk / Trade",
    accent: "from-green-400 to-emerald-600",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Premium gloss finish on a wall",
    label: "Premium Gloss Finish",
    accent: "from-orange-400 to-red-500",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    alt: "Painter applying smooth filler coat to a wall",
    label: "Wall Filler & Undercoat",
    accent: "from-slate-400 to-slate-600",
  },
];

const pricingCategories = [
  {
    title: "Fillers",
    icon: "🪣",
    color: "from-green-500 to-emerald-600",
    glowColor: "shadow-green-500/20",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80",
    imageAlt: "Wall filler application",
    items: [
      { name: "Wall Filler – Interior (25 kg)", price: "KSh 800", note: "Per bucket" },
      { name: "Wall Filler – Exterior (25 kg)", price: "KSh 1,400", note: "Per bucket" },
    ],
  },
  {
    title: "Premium Paints",
    icon: "🎨",
    color: "from-yellow-400 to-orange-500",
    glowColor: "shadow-yellow-400/20",
    featured: true,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80",
    imageAlt: "Premium interior paint being applied",
    items: [
      { name: "Premium Paint – 1 Litre", price: "KSh 800", note: "All finishes" },
      { name: "Premium Paint – 4 Litres", price: "On Request", note: "Price varies by colour" },
      { name: "Premium Paint – 20 Litres", price: "On Request", note: "Price varies by colour" },
    ],
  },
  {
    title: "Bulk / Trade",
    icon: "🏭",
    color: "from-blue-500 to-indigo-600",
    glowColor: "shadow-blue-500/20",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80",
    imageAlt: "Bulk paint buckets for trade orders",
    items: [
      { name: "Standard 4 Litre Packs", price: "Available", note: "Across all product lines" },
      { name: "90 Litre Bulk Orders", price: "On Request", note: "Trade & contractor pricing" },
      { name: "Custom Mix Orders", price: "On Request", note: "Minimum order applies" },
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

        {/* ── Paint Showcase Gallery ── */}
        <div className="mb-20">
          <p className="text-center text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6">
            Our Paint Range
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {paintShowcase.map((item) => (
              <div
                key={item.label}
                className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Colour accent bar */}
                <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${item.accent}`} />
                {/* Label */}
                <p className="absolute bottom-3 inset-x-2 text-white text-xs font-bold text-center leading-tight drop-shadow">
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

              {/* Product image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                {/* Gradient overlay that merges into the card header */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60`} />
                {/* Category header sits on top of the image */}
                <div className="absolute bottom-0 inset-x-0 p-4 flex items-end gap-3">
                  <span className="text-3xl drop-shadow-lg">{cat.icon}</span>
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
                    <span
                      className={`text-sm font-black whitespace-nowrap bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}
                    >
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
