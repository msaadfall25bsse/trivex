"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Service Details", href: "/service-details" },
  { name: "Our Team", href: "/our-team" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="relative w-full z-50 bg-black border-b border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
        {/* Left Side: Brand Logo (white treatment on black header) */}
        <div className="flex items-center">
          <Link
            className="flex items-center group py-1"
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              alt="TRIVEX — THREE MINDS. ONE VISION."
              className="h-9 sm:h-10 md:h-11 w-auto object-contain brightness-0 invert transition-transform duration-200 group-hover:scale-[1.02]"
              src="/trivex-logo.png"
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation (hidden on mobile, visible on lg+) */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-space-xs transition-colors ${
                  active
                    ? "text-white font-bold border-b-2 border-cyan-400"
                    : "font-label-lg text-label-lg text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Desktop CTA Button (lg+) & Mobile Hamburger Button (<lg) */}
        <div className="flex items-center">
          {/* Desktop "Get in Touch" Button */}
          <Link
            className="hidden lg:inline-flex items-center justify-center font-label-lg text-label-lg tactile-button bg-primary hover:bg-primary-container text-white px-5 py-2.5 rounded-lg shadow-sm tracking-wide active:scale-[0.98]"
            href="/contact-us"
          >
            Get in Touch
          </Link>

          {/* Mobile Hamburger Button: Right side on mobile (< lg) */}
          <button
            aria-label="Toggle Mobile Navigation Menu"
            className="lg:hidden w-10 h-10 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 text-white transition-all flex items-center justify-center active:scale-95"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (< lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/15 px-margin-mobile py-5 flex flex-col gap-2 shadow-2xl animate-fade-in">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 px-4 rounded-xl text-base font-medium transition-all ${
                  active
                    ? "bg-white/15 text-white font-bold shadow-sm"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 mt-1 border-t border-white/15">
            <Link
              className="w-full inline-flex items-center justify-center gap-2 font-label-lg text-label-lg tactile-button bg-primary hover:bg-primary-container text-white px-5 py-3 rounded-xl shadow-md text-center font-bold"
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get in Touch</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
