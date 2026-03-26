const features = [
  { icon: "🛒", title: "Place & Manage Orders", desc: "Browse the catalogue and place orders online with just a few clicks." },
  { icon: "📦", title: "Real-Time Delivery Tracking", desc: "Know exactly when your paint arrives — live order status updates." },
  { icon: "💳", title: "Secure M-Pesa Payments", desc: "Pay conveniently via M-Pesa, card, or bank transfer — fully encrypted." },
  { icon: "🎨", title: "Save Favourite Colours", desc: "Build your personal palette and revisit your favourite shades anytime." },
  { icon: "📄", title: "Invoices & Purchase History", desc: "Download invoices and review all past orders in one place." },
  { icon: "📩", title: "Instant Quote Requests", desc: "Get competitive pricing for large orders directly from our team." },
];

export default function DashboardFeaturesSection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Feature list */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-6 border border-blue-400/20">
              Customer Dashboard
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Your Paints.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your Control.
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Create a free account to unlock a powerful dashboard — order, track, pay, and manage everything in one place.
            </p>
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{f.title}</h4>
                    <p className="text-slate-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup "dashboard" card */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-6 border border-white/10 shadow-2xl">
              {/* Fake nav bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 mx-3 h-6 bg-white/10 rounded-full" />
              </div>

              {/* Welcome bar */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/20 rounded-xl p-4 mb-4">
                <p className="text-yellow-400 font-bold text-sm">Welcome back! 👋</p>
                <p className="text-slate-400 text-xs mt-0.5">Your last order is out for delivery</p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Orders", value: "12", color: "text-blue-400" },
                  { label: "Saved Colors", value: "8", color: "text-yellow-400" },
                  { label: "Invoices", value: "9", color: "text-green-400" },
                ].map((s) => (
                  <div key={s.label} className="glass rounded-xl p-3 text-center">
                    <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent order */}
              <div className="space-y-2">
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Recent Orders</p>
                {[
                  { name: "Premium Interior – 20L", status: "Delivered", color: "text-green-400" },
                  { name: "Exterior Weather-Resistant – 4L", status: "In Transit", color: "text-yellow-400" },
                  { name: "Wall Filler Interior – 25kg", status: "Processing", color: "text-blue-400" },
                ].map((o) => (
                  <div key={o.name} className="flex items-center justify-between glass rounded-lg px-3 py-2">
                    <span className="text-slate-300 text-xs">{o.name}</span>
                    <span className={`text-xs font-bold ${o.color}`}>{o.status}</span>
                  </div>
                ))}
              </div>

              {/* M-Pesa badge */}
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                M-Pesa, Card &amp; Bank payments accepted
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
