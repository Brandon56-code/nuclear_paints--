export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" aria-hidden>
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.2-1.01-.52-1.38-.31-.36-.49-.83-.49-1.32 0-1.1.9-2 2-2h2.36c3.09 0 5.65-2.56 5.65-5.65C22.99 6.04 17.98 2 12 2z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                  <circle cx="6.5" cy="11.5" r="1.5" fill="#0f172a" />
                  <circle cx="9.5" cy="7.5" r="1.5" fill="#0f172a" />
                  <circle cx="14.5" cy="7.5" r="1.5" fill="#0f172a" />
                  <circle cx="17.5" cy="11.5" r="1.5" fill="#0f172a" />
                </svg>
              </div>
              <div>
                <span className="text-white font-black text-lg leading-none">Nuclear Paints Ltd</span>
                <span className="block text-slate-400 text-xs mt-0.5">Color That Defines Spaces</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Trusted paint manufacturing &amp; supply company in Ruai, Nairobi. Bringing colour and life to every surface.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="tel:+254722115957"
                className="text-yellow-400 hover:text-orange-400 transition-colors text-sm font-medium"
              >
                +254 722 115 957
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="mailto:nucpaints.ltd@gmail.com"
                className="text-yellow-400 hover:text-orange-400 transition-colors text-sm font-medium"
              >
                nucpaints.ltd@gmail.com
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Products</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              {[
                "Interior Paints",
                "Exterior Paints",
                "Premium Finishes",
                "Fillers & Undercoats",
                "Industrial Coatings",
                "Custom Mixing",
              ].map((p) => (
                <li key={p}>
                  <a href="#products" className="hover:text-yellow-400 transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              {[
                { label: "About Us", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-yellow-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-slate-600 text-xs">P.O. Box 32001-0000, Kenya</p>
              <p className="text-slate-600 text-xs mt-1">Eastern Bypass, Ruai, Nairobi</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            &copy; {currentYear} Nuclear Paints Ltd. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Director: Ndirangu Wangondu · Ruai, Nairobi County
          </p>
        </div>
      </div>
    </footer>
  );
}
