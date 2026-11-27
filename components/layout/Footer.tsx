import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#05080f]/95 backdrop-blur-2xl border-t border-white/15 text-white pt-16 pb-10 relative z-10 overflow-hidden">
      {/* Top #0058bc Ambient Accent Line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0058bc]/70 to-transparent"
      />
      {/* Subtle Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#0058bc]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Col 1: Brand, Certification & Socials */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link className="inline-flex items-center gap-2.5 group w-fit" href="/">
              <img
                alt="TRIVEX"
                className="w-auto object-contain h-9 md:h-11 brightness-0 invert transition-transform duration-200 group-hover:scale-[1.03]"
                src="/trivex-logo.png"
              />
              <span className="font-extrabold tracking-widest text-xl md:text-2xl text-white font-headline-md">
                TRIVE<span className="text-[#0058bc]">X</span>
              </span>
            </Link>

            <p className="font-body-sm text-body-sm text-white/75 max-w-sm leading-relaxed">
              International digital architecture and technology agency. Delivering enterprise scale, surgical precision, and bespoke digital agility for global market leaders.
            </p>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 w-fit">
              <span className="material-symbols-outlined text-[#0058bc] text-lg">verified</span>
              <span className="font-label-sm text-label-sm font-bold tracking-wider uppercase text-white/90">
                ISO 27001 Certified Architecture
              </span>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-[#0058bc]/70 hover:bg-[#0058bc]/20 transition-all duration-200"
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
              <a
                aria-label="X / Twitter"
                className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-[#0058bc]/70 hover:bg-[#0058bc]/20 transition-all duration-200"
                href="https://x.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-[#0058bc]/70 hover:bg-[#0058bc]/20 transition-all duration-200"
                href="https://github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"></path>
                </svg>
              </a>
              <a
                aria-label="Dribbble"
                className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-[#0058bc]/70 hover:bg-[#0058bc]/20 transition-all duration-200"
                href="https://dribbble.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.605 4.688a8.243 8.243 0 0 1 1.609 4.962 16.08 16.08 0 0 0-4.67-.704 16.32 16.32 0 0 0-1.564.08 13.9 13.9 0 0 0 4.625-4.338zM12 3.754a8.21 8.21 0 0 1 5.372 1.996 12.35 12.35 0 0 1-4.227 3.96 23.36 23.36 0 0 0-3.666-4.675A8.257 8.257 0 0 1 12 3.754zm-3.852 1.97a22.25 22.25 0 0 1 3.513 4.47 16.92 16.92 0 0 1-7.85 2.115 7.828 7.828 0 0 1-.05-.859 8.245 8.245 0 0 1 4.387-5.726zM3.754 12a8.31 8.31 0 0 1 .15-1.57 18.66 18.66 0 0 0 8.44-2.28 17.53 17.53 0 0 1 1.48 4.34 16.5 16.5 0 0 1-8.28 6.09A8.23 8.23 0 0 1 3.754 12zm8.246 8.246a8.21 8.21 0 0 1-4.88-1.606 14.86 14.86 0 0 0 7.88-5.69 19.34 19.34 0 0 1 1.6 6.136 8.22 8.22 0 0 1-4.6 1.16zm6.18-2.58a18.25 18.25 0 0 0-1.46-5.46 14.39 14.39 0 0 1 3.93.54 8.22 8.22 0 0 1-2.47 4.92z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold mb-2">
              Navigation
            </span>
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about-us" },
              { name: "Services", href: "/services" },
              { name: "Service Details", href: "/service-details" },
              { name: "Our Team", href: "/our-team" },
              { name: "Contact Us", href: "/contact-us" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-body-sm text-body-sm text-white/75 hover:text-white hover:translate-x-1 transition-all py-1 w-fit"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Col 3: Core Pillars */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold mb-2">
              Core Capabilities
            </span>
            {[
              { name: "Software Development", href: "/services", icon: "terminal" },
              { name: "Digital Marketing & SEO", href: "/services", icon: "trending_up" },
              { name: "Brand & UI/UX Systems", href: "/services", icon: "palette" },
              { name: "Technical Architecture", href: "/service-details", icon: "architecture" },
              { name: "Enterprise Consulting", href: "/contact-us", icon: "hub" },
            ].map((cap) => (
              <Link
                key={cap.name}
                href={cap.href}
                className="inline-flex items-center gap-2 font-body-sm text-body-sm text-white/75 hover:text-white hover:translate-x-1 transition-all py-1 w-fit group"
              >
                <span className="material-symbols-outlined text-sm text-[#0058bc] group-hover:text-cyan-400 transition-colors">
                  {cap.icon}
                </span>
                <span>{cap.name}</span>
              </Link>
            ))}
          </div>

          {/* Col 4: Global Presence */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold mb-1">
              Global Presence
            </span>
            <div className="flex items-start gap-2.5 py-0.5">
              <span className="material-symbols-outlined text-cyan-400 text-base mt-0.5 shrink-0">location_on</span>
              <span className="font-body-sm text-body-sm text-white/80 leading-relaxed">
                One World Trade Center, Suite 8500, New York, NY
              </span>
            </div>
            <a
              href="mailto:connect@trivex-global.com"
              className="flex items-center gap-2.5 py-0.5 text-white/80 hover:text-cyan-300 transition-colors w-fit"
            >
              <span className="material-symbols-outlined text-cyan-400 text-base shrink-0">mail</span>
              <span className="font-body-sm text-body-sm">connect@trivex-global.com</span>
            </a>
            <a
              href="tel:+18008748390"
              className="flex items-center gap-2.5 py-0.5 text-white/80 hover:text-cyan-300 transition-colors w-fit"
            >
              <span className="material-symbols-outlined text-cyan-400 text-base shrink-0">call</span>
              <span className="font-body-sm text-body-sm">+1 (800) 874-8390</span>
            </a>

            <div className="mt-2 pt-3 border-t border-white/10 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] border border-white/15 rounded-full text-cyan-300 font-label-sm text-label-sm uppercase font-bold w-fit">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Global Operations Active
              </div>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0058bc] hover:bg-[#0058bc]/90 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0058bc]/25 transition-all w-fit"
              >
                <span>Schedule Discovery</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/15">
          <p className="font-body-sm text-body-sm text-white/65">
            © 2025 TRIVE<span className="text-[#0058bc] font-bold">X</span> Architecture Group. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/65">
            <Link className="font-label-sm text-label-sm uppercase tracking-wider hover:text-white transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="font-label-sm text-label-sm uppercase tracking-wider hover:text-white transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="font-label-sm text-label-sm uppercase tracking-wider hover:text-white transition-colors" href="#">
              Security Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
