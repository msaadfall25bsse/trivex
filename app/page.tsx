import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import CorePillarsSection from "@/components/home/CorePillarsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TeamPreviewSection from "@/components/home/TeamPreviewSection";
import CtaBannerSection from "@/components/home/CtaBannerSection";
import FixedBackground from "@/components/layout/FixedBackground";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip">
      <FixedBackground />

      {/* ========================================================================= */}
      {/* 2. FOREGROUND HOMEPAGE CONTENT (Scrolls smoothly above fixed background) */}
      {/* ========================================================================= */}
      <div className="relative z-10 flex flex-col w-full">
        <HeroSection />
        <IntroSection />
        <CorePillarsSection />
        <WhyChooseSection />
        <ProjectsSection />
        <ProcessSection />
        <TeamPreviewSection />
        <CtaBannerSection />
      </div>
    </div>
  );
}
