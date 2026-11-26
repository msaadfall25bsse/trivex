import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white/25 backdrop-blur-2xl border-t border-white/60 text-on-surface py-space-xl relative z-10 glass-rim">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg mb-space-xl">
          {/* Col 1: Brand & Socials */}
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <div className="flex items-center mb-space-xs">
              <Link className="inline-block" href="/">
                <img
                  alt="TRIVEX — THREE MINDS. ONE VISION."
                  className="w-auto object-contain h-12 md:h-14"
                  src="/trivex-logo.png"
                />
              </Link>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              International digital architecture and technology agency. Delivering enterprise scale, surgical precision, and bespoke digital agility for global market leaders.
            </p>
            <div className="flex items-center gap-space-sm mt-space-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-xl">verified</span>
              <span className="font-label-md text-label-md font-semibold tracking-wide uppercase text-on-surface">
                ISO 27001 Certified Architecture
              </span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl glass-subcard flex items-center justify-center text-on-surface hover:text-primary hover:bg-white/40 transition-all duration-200"
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
                className="w-9 h-9 rounded-xl glass-subcard flex items-center justify-center text-on-surface hover:text-primary hover:bg-white/40 transition-all duration-200"
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
                className="w-9 h-9 rounded-xl glass-subcard flex items-center justify-center text-on-surface hover:text-primary hover:bg-white/40 transition-all duration-200"
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
                className="w-9 h-9 rounded-xl glass-subcard flex items-center justify-center text-on-surface hover:text-primary hover:bg-white/40 transition-all duration-200"
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

          {/* Col 2: Navigation Links */}
          <div className="grid grid-cols-2 gap-space-md col-span-1 md:col-span-2 lg:col-span-5 lg:grid-cols-5">
            <div className="flex flex-col gap-space-xs lg:col-span-3">
              <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface font-bold mb-space-xs">
                Navigation
              </span>
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1" href="/">
                Home
              </Link>
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1" href="/about-us">
                About Us
              </Link>
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1" href="/services">
                Services
              </Link>
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1" href="/service-details">
                Service Details
              </Link>
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1" href="/our-team">
                Our Team
              </Link>
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors py-1" href="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Col 3: Global Presence */}
          <div className="lg:col-span-3 flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface font-bold mb-space-xs">
              Global Presence
            </span>
            <div className="flex items-start gap-space-xs py-1">
              <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                One World Trade Center, Suite 8500, New York, NY
              </span>
            </div>
            <div className="flex items-start gap-space-xs py-1">
              <span className="material-symbols-outlined text-primary text-base mt-0.5">mail</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                connect@trivex-global.com
              </span>
            </div>
            <div className="flex items-start gap-space-xs py-1">
              <span className="material-symbols-outlined text-primary text-base mt-0.5">call</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                +1 (800) 874-8390
              </span>
            </div>
            <div className="mt-space-xs pt-space-xs">
              <span className="inline-flex items-center gap-space-xs px-3 py-1.5 glass-subcard rounded-full text-primary font-label-sm text-label-sm uppercase font-bold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Global Operations Active
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-surface-container">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 TRIVEX Architecture Group. All rights reserved.
          </p>
          <div className="flex items-center gap-space-lg text-on-surface-variant">
            <Link className="font-label-sm text-label-sm uppercase tracking-wider hover:text-on-surface transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="font-label-sm text-label-sm uppercase tracking-wider hover:text-on-surface transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="font-label-sm text-label-sm uppercase tracking-wider hover:text-on-surface transition-colors" href="#">
              Security Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
