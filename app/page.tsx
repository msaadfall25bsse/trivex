import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import CorePillarsSection from "@/components/home/CorePillarsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TeamPreviewSection from "@/components/home/TeamPreviewSection";
import CtaBannerSection from "@/components/home/CtaBannerSection";
import HomeGlowBackground from "@/components/home/HomeGlowBackground";
import TargetCursor from "@/components/home/TargetCursor";
import GradualBlur from "@/components/home/GradualBlur";
import MistPageSections from "@/components/layout/MistPageSections";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-clip">
      {/* Interactive Target Cursor (Homepage Only) */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        cursorColor="#ffffff"
        cursorColorOnTarget="#38bdf8"
        blendMode="normal"
        showLabel
        clickEffect
      />

      {/* 1. Fullpage Interactive GlowCursor Background (Deep solid black with #0058bc fluid cursor) */}
      <HomeGlowBackground />

      {/* 2. Hero Section (Transparent backdrop so GlowCursor and ElectricLogo shine through seamlessly) */}
      <div className="relative z-10 w-full">
        <HeroSection />
      </div>

      {/* 3. Foreground Homepage Content Sections */}
      <MistPageSections>
        <IntroSection />
        <CorePillarsSection />
        <WhyChooseSection />
        <ProjectsSection />
        <ProcessSection />
        <TeamPreviewSection />
        <CtaBannerSection />
      </MistPageSections>

      {/* 4. Viewport Bottom Gradual Blur Overlay (Homepage Only) */}
      <GradualBlur
        position="bottom"
        target="page"
        height="4rem"
        strength={1}
        layers={8}
        curve="linear"
        exponential
        tint="rgba(18, 15, 23, 0.3)"
        autoHide
      />
    </div>
  );
}
