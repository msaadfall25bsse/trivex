import AboutHero from "@/components/about/AboutHero";
import AboutOrigin from "@/components/about/AboutOrigin";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import AboutValues from "@/components/about/AboutValues";
import AboutDifferentiators from "@/components/about/AboutDifferentiators";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutCta from "@/components/about/AboutCta";
import FixedBackground from "@/components/layout/FixedBackground";
import MistPageSections from "@/components/layout/MistPageSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — TRIVEX Architecture Group",
  description:
    "Born from a conviction that technology, growth, and design should function as a unified engine rather than fragmented silos.",
};

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip">
      <FixedBackground />

      <MistPageSections>
        <AboutHero />
        <AboutOrigin />
        <AboutMissionVision />
        <AboutValues />
        <AboutDifferentiators />
        <AboutPhilosophy />
        <AboutCta />
      </MistPageSections>
    </div>
  );
}
