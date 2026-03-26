const reasons = [
  { icon: "✅", title: "High Quality", desc: "Every batch is quality-controlled for consistent, durable colour and coverage." },
  { icon: "💰", title: "Competitive Pricing", desc: "Flexible pricing for homeowners, contractors, and industrial buyers." },
  { icon: "🌈", title: "Wide Colour Range", desc: "Thousands of shades and finishes — custom mixing available on request." },
  { icon: "🤝", title: "Reliable Service", desc: "A dedicated team ready to guide you from selection to application." },
  { icon: "📱", title: "Easy Online Platform", desc: "Order, track, and manage your purchases from any device." },
  { icon: "🏭", title: "Local Manufacturer", desc: "Made in Nairobi — supporting local industry and ensuring fresh stock." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative paint splash */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 text-sm font-semibold tracking-widest uppercase mb-6 border border-red-400/20">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Beyond Paint — We Create{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Vibrant Experiences
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Nuclear Paints Ltd is a trusted paint manufacturing and supply company located in{" "}
              <strong className="text-slate-200">Ruai, Nairobi County</strong>, along the Eastern Bypass near Afro Sayari.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Under the leadership of Director{" "}
              <strong className="text-yellow-400">Ndirangu Wangondu</strong>, we are committed to innovation,
              quality, and customer satisfaction — bringing colour and life to every surface we touch.
            </p>

            {/* Director card */}
            <div className="glass rounded-2xl p-5 flex items-center gap-4 border border-yellow-400/20">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl font-black text-slate-900 flex-shrink-0">
                N
              </div>
              <div>
                <p className="text-white font-bold">Ndirangu Wangondu</p>
                <p className="text-slate-400 text-sm">Director, Nuclear Paints Ltd</p>
                <p className="text-yellow-400 text-xs mt-1">
                  &ldquo;We go beyond paint — we bring your vision to life.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right – reasons grid */}
          <div>
            <h3 className="text-white font-black text-xl mb-8">
              Why Choose{" "}
              <span className="text-yellow-400">Nuclear Paints?</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="glass rounded-xl p-4 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform inline-block">
                    {r.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{r.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
