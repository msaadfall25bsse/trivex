import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import CorePillarsSection from "@/components/home/CorePillarsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TeamPreviewSection from "@/components/home/TeamPreviewSection";
import CtaBannerSection from "@/components/home/CtaBannerSection";
import MistPageSections from "@/components/layout/MistPageSections";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#f4f7fb] text-slate-900 overflow-x-clip">
      {/* 1. Hero Section (GridMotion background behind sticky header and right canvas) */}
      <HeroSection />

      {/* 2. Light Theme Homepage Foreground Sections */}
      <div className="w-full bg-[#f4f7fb]">
        <MistPageSections>
          <IntroSection />
        </MistPageSections>

        {/* Sections with mobile ScrollStack sit outside MistPageSections so position:sticky pins smoothly */}
        <CorePillarsSection />
        <WhyChooseSection />
        <ProjectsSection />
        <ProcessSection />

        <MistPageSections>
          <TeamPreviewSection />
          <CtaBannerSection />
        </MistPageSections>
      </div>
    </div>
  );
}
