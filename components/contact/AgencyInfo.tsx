export default function AgencyInfo() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      {/* Direct Contact Card */}
      <div className="glass-card-pro rounded-3xl p-6 sm:p-7 glass-rim">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-9 h-9 rounded-xl glass-subcard flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-xl">hub</span>
          </div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Direct Communication
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {/* Location */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl glass-subcard flex items-center justify-center text-primary shrink-0 neumorphic-inset">
              <span className="material-symbols-outlined text-xl">apartment</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Global Headquarters
              </span>
              <span className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">
                International Business District
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                One World Trade Center, Suite 8500, New York, NY
              </span>
            </div>
          </div>

          {/* Direct Inquiries Email */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl glass-subcard flex items-center justify-center text-primary shrink-0 neumorphic-inset">
              <span className="material-symbols-outlined text-xl">mail</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Direct Inquiries
              </span>
              <a
                className="font-body-md text-body-md text-primary font-bold hover:underline mt-0.5"
                href="mailto:contact@trivexagency.com"
              >
                contact@trivexagency.com
              </a>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                Priority desk monitored 24/7
              </span>
            </div>
          </div>

          {/* Telephone */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl glass-subcard flex items-center justify-center text-primary shrink-0 neumorphic-inset">
              <span className="material-symbols-outlined text-xl">call</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Telephone
              </span>
              <a
                className="font-body-md text-body-md text-on-surface font-semibold hover:text-primary mt-0.5"
                href="tel:+15550192834"
              >
                +1 (555) 019-2834
              </a>
              <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                Toll-free enterprise gateway
              </span>
            </div>
          </div>

          {/* Operational Hours */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl glass-subcard flex items-center justify-center text-primary shrink-0 neumorphic-inset">
              <span className="material-symbols-outlined text-xl">schedule</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Operational Hours
              </span>
              <span className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">
                Mon – Fri: 09:00 – 18:00 UTC
              </span>
              <div className="inline-flex items-center gap-1.5 mt-1 text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm uppercase font-bold">
                  Active Operating Window
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Direct Channel Card */}
      <div className="glass-card-pro rounded-3xl p-6 sm:p-7 glass-rim relative overflow-hidden group">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold glass-subcard px-3 py-1 rounded-full">
              Fast-Track Route
            </span>
            <span className="material-symbols-outlined text-primary text-xl">forum</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Founder Direct Channel
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant font-medium">
            Prefer a direct conversation? Request an introductory session with one of our discipline leads.
          </p>
          <div className="pt-2 flex items-center justify-between gap-4">
            <div className="flex -space-x-2">
              <img
                className="w-9 h-9 rounded-full object-cover ring-2 ring-white/80"
                alt="Technical enterprise architect"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ3aTC6Fo7gV6BdG5MotzCefkXBQIAf1oSdHdVGvVFgE2MR3-TL0WWGkn4YXUXmZiurtZnnwp3gj34OlKqdJJnxOrT5DW5npgXcodGFifen0i9zwP7AKlzjVZSh5o_hG-kOZS7_mkfp5oI6st9UF8KMO4HxqH5pGLFNnvLSVAYMqvmNrfEFUrQwxIDFhfhxVRBtwQeZgsoFHACHY93RfxzEVdvWfFI-tVB9MOkAI1a"
              />
              <img
                className="w-9 h-9 rounded-full object-cover ring-2 ring-white/80"
                alt="Executive digital marketing strategist"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7vB6WPBIXrA4-l2H-exX_M6HINvS0NiZk-VksvQCLhhz_xyc472YGpjb-EhtGvehtS0FB-_Z6h6ZJVmZJoQ0qgdkoIHuADwD7QZW5mvkSeQukCV_tre-2elCDEPpV1OcLIkRogLN9GF0_DLRWk-xlgfNYHdMVw0xyttC-CwcNnvTbfwidnfnb0v29eKtsvR4yZeNX-E5IJx0As6YiEHdBahzY4BNy6f2gvU1FfRYX"
              />
              <img
                className="w-9 h-9 rounded-full object-cover ring-2 ring-white/80"
                alt="Executive design director"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcyL6ZTFCTaxPT8ISrC5t_xy8MCwgBuUzu9pLw6q_FllZagiNxaWualVvOMhZE1a8UeUdJwo5BiEACcr1e0Rqq49mpy938aBoK6VpbVlwP0yrgqMgLWcFXmsU5W0Sh5wMqbGaojvte64D0zGrkkddw-jRwHJbF0ll2kNIE_YW2lcOIQ43Skgv2Oo3wP36rAN9b1PdFNNjDSc4n05RF24pInnrXbT7XOXTt7cnMwgGn"
              />
            </div>
            <a
              className="font-label-lg text-label-lg text-primary hover:text-primary-container font-bold inline-flex items-center gap-1"
              href="#contact-form"
            >
              Request Sync <span className="material-symbols-outlined text-base">north_east</span>
            </a>
          </div>
        </div>
      </div>

      {/* Official Social Channels */}
      <div className="glass-card-pro rounded-3xl p-5 sm:p-6 glass-rim">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold tracking-wider">
            Social Channels
          </span>
          <div className="flex items-center gap-2">
            {[
              { label: 'LinkedIn', icon: 'work' },
              { label: 'X Twitter', icon: 'tag' },
              { label: 'GitHub', icon: 'code' },
              { label: 'Behance', icon: 'palette' },
            ].map((soc) => (
              <a
                key={soc.label}
                aria-label={soc.label}
                className="w-9 h-9 rounded-xl glass-subcard hover:bg-primary hover:text-on-primary text-on-surface flex items-center justify-center transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">{soc.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
