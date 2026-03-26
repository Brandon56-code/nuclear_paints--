export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4 border border-yellow-400/20">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Contact{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Visit us at our factory, call, or email — we&apos;re always ready to help you find the perfect colour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left – contact info */}
          <div className="space-y-6">
            {[
              {
                icon: "📍",
                title: "Location",
                lines: ["Ruai, Nairobi County", "Eastern Bypass, Near Afro Sayari"],
                href: "https://maps.google.com/?q=Ruai+Nairobi+Eastern+Bypass",
                linkLabel: "View on Maps",
              },
              {
                icon: "📱",
                title: "Phone",
                lines: ["+254 722 115 957", "+254 750 809 700"],
                href: "tel:+254722115957",
                linkLabel: "Call Now",
              },
              {
                icon: "📧",
                title: "Email",
                lines: ["nucpaints.ltd@gmail.com"],
                href: "mailto:nucpaints.ltd@gmail.com",
                linkLabel: "Send Email",
              },
              {
                icon: "📮",
                title: "Postal Address",
                lines: ["P.O. Box 32001-0000", "Kenya"],
              },
            ].map((c) => (
              <div key={c.title} className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-yellow-400/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">{c.title}</p>
                  {c.lines.map((l) => (
                    <p key={l} className="text-white font-medium">{l}</p>
                  ))}
                  {c.href && c.linkLabel && (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-yellow-400 text-sm font-semibold mt-2 hover:text-orange-400 transition-colors"
                    >
                      {c.linkLabel}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right – quick contact form */}
          <div className="glass rounded-2xl p-8 border border-white/10">
            <h3 className="text-white font-black text-xl mb-6">Send Us a Message</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Kamau"
                    className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 7xx xxx xxx"
                    className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project or ask for a quote..."
                  className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
