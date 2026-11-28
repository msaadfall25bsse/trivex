import DetailMasthead from "@/components/service-details/DetailMasthead";
import SoftwareDetail from "@/components/service-details/SoftwareDetail";
import MarketingDetail from "@/components/service-details/MarketingDetail";
import DesignDetail from "@/components/service-details/DesignDetail";
import FaqSection from "@/components/service-details/FaqSection";
import DetailCta from "@/components/service-details/DetailCta";
import FixedBackground from "@/components/layout/FixedBackground";
import MistPageSections from "@/components/layout/MistPageSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Details — TRIVEX Technical Specifications",
  description:
    "Technical specifications and service breakdowns across Software Development, Digital Marketing, and Video Editing.",
};

export default function ServiceDetailsPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip">
      <FixedBackground />
      <MistPageSections>
        <DetailMasthead />
        <SoftwareDetail />
        <MarketingDetail />
        <DesignDetail />
        <FaqSection />
        <DetailCta />
      </MistPageSections>
    </div>
  );
}
