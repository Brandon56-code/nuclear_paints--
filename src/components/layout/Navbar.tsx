"use client";

import { useState, useEffect } from "react";

export default function Navbar({
  onOpenAuth,
}: {
  onOpenAuth: (mode: "login" | "signup") => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Products", href: "#products" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-black/30 py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            {/* Paint palette icon */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
          </div>
          <div>
            <span className="text-white font-black text-lg leading-none">Nuclear</span>
            <span className="block text-yellow-400 font-bold text-xs tracking-widest uppercase leading-none">
              Paints Ltd
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-yellow-400 font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenAuth("login")}
            className="px-5 py-2 text-sm font-semibold text-slate-200 hover:text-yellow-400 transition-colors"
          >
            Sign In
          </button>
          <button
            onClick={() => onOpenAuth("signup")}
            className="px-5 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-yellow-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-3 mb-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-yellow-400 font-medium transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <button
              onClick={() => { onOpenAuth("login"); setMenuOpen(false); }}
              className="flex-1 py-2 text-sm font-semibold text-slate-200 border border-white/20 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-all"
            >
              Sign In
            </button>
            <button
              onClick={() => { onOpenAuth("signup"); setMenuOpen(false); }}
              className="flex-1 py-2 text-sm font-bold rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
