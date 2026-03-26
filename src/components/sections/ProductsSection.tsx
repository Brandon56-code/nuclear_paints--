import Image from "next/image";

const products = [
  {
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
    imageAlt: "Painting interior walls with premium white paint",
    title: "Interior Decorative Paints",
    desc: "Elegant, washable finishes for living rooms, bedrooms, and hallways. Rich pigments for vibrant, long-lasting colour.",
    tag: "Most Popular",
    tagColor: "bg-blue-500",
    accent: "group-hover:shadow-blue-500/20",
  },
  {
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    imageAlt: "Exterior house being painted bright white",
    title: "Exterior Weather-Resistant",
    desc: "Formulated to withstand Nairobi's rain, UV rays, and humidity. Protects and beautifies your exterior walls for years.",
    tag: "Best Seller",
    tagColor: "bg-orange-500",
    accent: "group-hover:shadow-orange-500/20",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    imageAlt: "Smooth premium gloss finish on a wall",
    title: "Premium Finishes",
    desc: "Gloss, satin, and matte options for sophisticated, professional-grade results on any surface.",
    tag: "Premium",
    tagColor: "bg-yellow-500",
    accent: "group-hover:shadow-yellow-500/20",
  },
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    imageAlt: "Painter applying wall filler to a smooth surface",
    title: "Fillers & Undercoats",
    desc: "Wall filler (interior & exterior) and primer undercoats that ensure paint adhesion and a flawless smooth surface.",
    tag: "Essential",
    tagColor: "bg-green-500",
    accent: "group-hover:shadow-green-500/20",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    imageAlt: "Industrial paint buckets stacked on a work site",
    title: "Industrial Coatings",
    desc: "Heavy-duty protective coatings for warehouses, factories, and industrial equipment. Chemical and abrasion resistant.",
    tag: "Industrial",
    tagColor: "bg-red-500",
    accent: "group-hover:shadow-red-500/20",
  },
  {
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    imageAlt: "Colourful paint swatches spread out for custom mixing",
    title: "Custom Color Mixing",
    desc: "Bring your vision to life! We mix any shade to your specification — perfect for designers and architects.",
    tag: "Bespoke",
    tagColor: "bg-purple-500",
    accent: "group-hover:shadow-purple-500/20",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-yellow-400/20">
            Our Range
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Products &amp;{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From interior elegance to industrial strength — we have the right paint solution for every surface and every space.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className={`group relative glass rounded-2xl overflow-hidden hover:border-yellow-400/40 hover:shadow-xl ${p.accent} transition-all duration-400 cursor-pointer flex flex-col`}
            >
              {/* Tag */}
              <span
                className={`absolute top-3 right-3 z-10 ${p.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow`}
              >
                {p.tag}
              </span>

              {/* Product image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{p.desc}</p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 text-yellow-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
