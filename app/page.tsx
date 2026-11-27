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
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-clip">
      {/* 1. Hero Section (GridMotion background behind sticky header and right canvas) */}
      <HeroSection />

      {/* 2. Solid Black Homepage Foreground Sections */}
      <div className="w-full bg-black">
        <MistPageSections>
          <IntroSection />
        </MistPageSections>

        {/* Core Pillars sits outside MistPageSections so position:sticky inside ScrollStack pins smoothly */}
        <CorePillarsSection />

        <MistPageSections>
          <WhyChooseSection />
          <ProjectsSection />
          <ProcessSection />
          <TeamPreviewSection />
          <CtaBannerSection />
        </MistPageSections>
      </div>
    </div>
  );
}
