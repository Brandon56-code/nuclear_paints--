"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import PricingSection from "@/components/sections/PricingSection";
import AboutSection from "@/components/sections/AboutSection";
import DashboardFeaturesSection from "@/components/sections/DashboardFeaturesSection";
import ContactSection from "@/components/sections/ContactSection";
import AuthModal from "@/components/forms/AuthModal";

type AuthMode = "login" | "signup";

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("login");

  const openAuth = (mode: AuthMode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar onOpenAuth={openAuth} />
      <HeroSection onOpenAuth={openAuth} />
      <ProductsSection />
      <PricingSection />
      <DashboardFeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />

      <AuthModal
        isOpen={authOpen}
        initialMode={authMode}
        onClose={() => setAuthOpen(false)}
      />
    </main>
  );
}
