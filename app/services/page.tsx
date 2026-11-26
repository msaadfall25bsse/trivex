import ServicesHero from "@/components/services/ServicesHero";
import Pillar1Software from "@/components/services/Pillar1Software";
import Pillar2Marketing from "@/components/services/Pillar2Marketing";
import Pillar3Design from "@/components/services/Pillar3Design";
import SynergyMatrix from "@/components/services/SynergyMatrix";
import EngagementModels from "@/components/services/EngagementModels";
import ServicesCta from "@/components/services/ServicesCta";
import FixedBackground from "@/components/layout/FixedBackground";
import MistPageSections from "@/components/layout/MistPageSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — TRIVEX Core Capabilities",
  description:
    "Comprehensive solutions across Software Development, Digital Marketing, and Graphic Designing.",
};

export default function ServicesPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip">
      <FixedBackground />
      <MistPageSections>
        <ServicesHero />
        <Pillar1Software />
        <Pillar2Marketing />
        <Pillar3Design />
        <SynergyMatrix />
        <EngagementModels />
        <ServicesCta />
      </MistPageSections>
    </div>
  );
}
