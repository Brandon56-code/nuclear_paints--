const pricingCategories = [
  {
    title: "Fillers",
    icon: "🪣",
    color: "from-green-500 to-emerald-600",
    glowColor: "shadow-green-500/20",
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
      <div className="absolute inset-0 opacity-30 pointer-events-none"
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

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingCategories.map((cat) => (
            <div
              key={cat.title}
              className={`relative rounded-2xl overflow-hidden ${cat.featured ? "ring-2 ring-yellow-400/60 scale-105 shadow-2xl " + cat.glowColor : "glass"}`}
            >
              {cat.featured && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500" />
              )}

              {/* Header */}
              <div className={`bg-gradient-to-br ${cat.color} p-6`}>
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h3 className="text-white font-black text-xl">{cat.title}</h3>
                {cat.featured && (
                  <span className="inline-block mt-2 text-xs font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Items */}
              <div className="bg-slate-900/80 p-6 space-y-4">
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
