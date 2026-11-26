import GlassSlabSection from "@/components/layout/GlassSlabSection";

const founders = [
  {
    badge: "Head of Technology",
    name: "Julian Vance",
    role: "Co-Founder & Head of Software Engineering",
    alt: "Julian Vance, Co-Founder & Head of Software Engineering",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_TASKiXMdN7aIEre-kzLVkK-DAI6SlVHGbhcAgXivE4xvONe57BAYQt3ljGQvQfe0LWjKJogiIiP7wXBDq0UKnXGTl3mkj-zQrokgnpYf1c6wDguUJh8TozmjZaBiUnn8fxXsBQkVjMJPN7NA-LXNIp4RTO1FkVdCOCaHGV9fokddHGk-OQfRANfIcBPkYmCfQmCxSnZ2_q3ArNfxQf8lxSQD9wI1OQ50n1c_75p7",
    chips: ["Cloud Architecture", "Full-Stack Systems", "Digital Product Engineering"],
    bio: "Leading TRIVEX technical architecture, engineering standards, and international software delivery with over 14 years of high-concurrency cloud scaling experience.",
    principalLabel: "Tech Principal",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", type: "text", content: "in" },
      { label: "GitHub", href: "https://github.com", type: "icon", content: "code" },
      { label: "Email", href: "mailto:connect@trivex-global.com", type: "icon", content: "mail" },
    ],
  },
  {
    badge: "Head of Growth",
    name: "Marcus Chen",
    role: "Co-Founder & Head of Digital Marketing",
    alt: "Marcus Chen, Co-Founder & Head of Digital Marketing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTA0XKGMrj5ZBJEYkNm8T8p9OGGJ8GYc62nkiJFgZO2lZ5E7aj2UAAkKJViUaBaxEaoJqrT7w5IuPAuKYukSbD_3yPPzQDiOQ0Vlm9n-j1YdW61z5_K4Hq-yzmmgcWk0bYYhLF9kbCkxKB1jnZ6PjOIfRU-fVleZnH3ZMsSOn1fxUrAcOiRaxsdNhql2zgEyDsPNIr0cQaIcqkdFx0bOn-lHX1PjrZoHvIbrkqWqoJ",
    chips: ["Search Intelligence", "Paid Acquisition", "GEO & Attribution"],
    bio: "Directing multi-channel growth frameworks, algorithmic SEO, conversion funnels, and data attribution with over $90M in cumulative performance ad spend management.",
    principalLabel: "Growth Principal",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", type: "text", content: "in" },
      { label: "Twitter / X", href: "https://x.com", type: "text", content: "𝕏" },
      { label: "Email", href: "mailto:connect@trivex-global.com", type: "icon", content: "mail" },
    ],
  },
  {
    badge: "Head of Creative",
    name: "Elena Rostova",
    role: "Co-Founder & Head of Brand & UI/UX Design",
    alt: "Elena Rostova, Co-Founder & Head of Brand & UI/UX Design",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACnGc7R1saHRSOQ6BjmZn6tfAd_aAzby6zZ0svXk4PC43Z_-BoAHHHAS8A4ZnYglJuvf1-QEs0XiWQIu4O6foQ5D2kbKwFvsv_3Y_r2KOTu_SGhzv3j_Qt73xyGXG-l84Mh3rtz2ac8Ul_GkyVlfIH3B9Eydo_0JWlZUV3lUn8J9gYE1ZkgK-bsvxwn_RbzEwUucCeE3gXVMBdwPawlZUrAV92CHdAFcy5d2Vje9UT",
    chips: ["Design Systems", "Brand Identity", "Human-Centered Interfaces"],
    bio: "International design award recipient defining visual identity standards, user experience hierarchy, tokenized design systems, and high-impact creative execution.",
    principalLabel: "Creative Principal",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", type: "text", content: "in" },
      { label: "Portfolio", href: "https://dribbble.com", type: "icon", content: "palette" },
      { label: "Email", href: "mailto:connect@trivex-global.com", type: "icon", content: "mail" },
    ],
  },
];

export default function ThreeFoundersCards() {
  return (
    <GlassSlabSection>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-1">
            Founding Partners
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            The Executive Pillar
          </h2>
        </div>
        <div className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2 font-medium">
          <span className="material-symbols-outlined text-primary text-lg">sync_alt</span>
          <span>Zero account managers. Direct founder execution.</span>
        </div>
      </div>

      {/* 3 Founders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {founders.map((founder) => (
          <div
            key={founder.name}
            className="group flex flex-col glass-surface-card rounded-3xl overflow-hidden glass-rim"
          >
            <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={founder.alt}
                src={founder.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-xl rounded-full font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold shadow-sm border border-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {founder.badge}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed block mb-0.5 font-bold">
                  Founding Partner
                </span>
                <h3 className="font-headline-sm text-headline-sm font-bold tracking-tight text-white">
                  {founder.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
              <div>
                <div className="mb-4">
                  <span className="font-label-md text-label-md font-bold text-primary block">
                    {founder.role}
                  </span>
                </div>
                {/* Focus Area Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {founder.chips.map((chip) => (
                    <span
                      key={chip}
                      className="px-2.5 py-1 glass-subcard text-on-surface rounded-lg font-label-sm text-label-sm font-semibold"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed font-medium">
                  {founder.bio}
                </p>
              </div>

              {/* Social Links & Credentials Strip */}
              <div className="pt-4 border-t border-white/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {founder.socials.map((soc) => {
                    const isExternal = soc.href.startsWith("http");
                    return (
                      <a
                        key={soc.label}
                        aria-label={soc.label}
                        className="w-9 h-9 flex items-center justify-center rounded-xl glass-subcard text-on-surface hover:text-primary hover:bg-white/40 transition-colors"
                        href={soc.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                      >
                        {soc.type === "icon" ? (
                          <span className="material-symbols-outlined text-lg">{soc.content}</span>
                        ) : (
                          <span className="font-label-md text-label-md font-bold">{soc.content}</span>
                        )}
                      </a>
                    );
                  })}
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                  {founder.principalLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassSlabSection>
  );
}
