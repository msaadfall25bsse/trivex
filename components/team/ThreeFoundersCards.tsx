import GlassSlabSection from "@/components/layout/GlassSlabSection";
import ScrollStack, { ScrollStackItem } from "@/components/home/ScrollStack";
import SplitText from "@/components/home/SplitText";

interface Founder {
  badge: string;
  name: string;
  role: string;
  alt: string;
  image: string;
  chips: string[];
  bio: string;
  principalLabel: string;
  socials: Array<{ label: string; href: string; type: string; content: string }>;
}

const founders: Founder[] = [
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
    badge: "Head of Video Editing",
    name: "Elena Rostova",
    role: "Co-Founder & Head of Video Editing & Post-Production",
    alt: "Elena Rostova, Co-Founder & Head of Video Editing & Post-Production",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACnGc7R1saHRSOQ6BjmZn6tfAd_aAzby6zZ0svXk4PC43Z_-BoAHHHAS8A4ZnYglJuvf1-QEs0XiWQIu4O6foQ5D2kbKwFvsv_3Y_r2KOTu_SGhzv3j_Qt73xyGXG-l84Mh3rtz2ac8Ul_GkyVlfIH3B9Eydo_0JWlZUV3lUn8J9gYE1ZkgK-bsvxwn_RbzEwUucCeE3gXVMBdwPawlZUrAV92CHdAFcy5d2Vje9UT",
    chips: ["Video Editing", "Motion Graphics", "Color Grading"],
    bio: "Award-winning post-production director crafting cinematic brand films, motion graphics, DaVinci Resolve color grades, and high-retention video campaigns.",
    principalLabel: "Video Principal",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", type: "text", content: "in" },
      { label: "Showreel", href: "https://vimeo.com", type: "icon", content: "movie_edit" },
      { label: "Email", href: "mailto:connect@trivex-global.com", type: "icon", content: "mail" },
    ],
  },
];

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="group flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={founder.alt}
          loading="lazy"
          decoding="async"
          src={founder.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full font-label-sm text-label-sm uppercase tracking-wider text-[#0058bc] font-bold shadow-sm border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0058bc]"></span>
            {founder.badge}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-cyan-300 block mb-0.5 font-bold">
            Founding Partner
          </span>
          <h3 className="font-headline-sm text-headline-sm font-bold tracking-tight text-white">
            {founder.name}
          </h3>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5 bg-white">
        <div>
          <div className="mb-4">
            <span className="font-label-md text-label-md font-bold text-[#0058bc] block">
              {founder.role}
            </span>
          </div>
          {/* Focus Area Chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {founder.chips.map((chip) => (
              <span
                key={chip}
                className="px-2.5 py-1 bg-[#f4f7fb] border border-slate-200 text-slate-800 rounded-lg font-label-sm text-label-sm font-semibold"
              >
                {chip}
              </span>
            ))}
          </div>
          <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed font-medium">
            {founder.bio}
          </p>
        </div>

        {/* Social Links & Credentials Strip */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {founder.socials.map((soc) => {
              const isExternal = soc.href.startsWith("http");
              return (
                <a
                  key={soc.label}
                  aria-label={soc.label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#f4f7fb] border border-slate-200 text-slate-700 hover:text-[#0058bc] hover:bg-slate-200/60 transition-colors"
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
          <span className="font-label-sm text-label-sm text-slate-500 uppercase tracking-wider font-bold">
            {founder.principalLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ThreeFoundersCards() {
  return (
    <GlassSlabSection>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-[#0058bc] font-bold block mb-1">
            Founding Partners
          </span>
          <h2 className="font-headline-lg text-headline-lg text-slate-900">
            <SplitText text="The Executive Pillar" effect="flip" replayOnScroll />
          </h2>
        </div>
        <div className="font-label-md text-label-md text-slate-600 flex items-center gap-2 font-medium">
          <span className="material-symbols-outlined text-[#0058bc] text-lg">sync_alt</span>
          <span>Zero account managers. Direct founder execution.</span>
        </div>
      </div>

      {/* Mobile: ScrollStack */}
      <div className="md:hidden">
        <ScrollStack
          useWindowScroll
          smoothScroll={false}
          stackPosition={104}
          itemDistance={72}
          itemStackDistance={22}
          itemScale={0.04}
          baseScale={0.88}
          dimAmount={0.12}
          holdDistance={100}
        >
          {founders.map((founder) => (
            <ScrollStackItem key={founder.name} itemClassName="!p-0 !bg-transparent">
              <FounderCard founder={founder} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {founders.map((founder) => (
          <FounderCard key={founder.name} founder={founder} />
        ))}
      </div>
    </GlassSlabSection>
  );
}
