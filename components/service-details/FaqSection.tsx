"use client";

import { useState } from "react";
import GlassSlabSection from "@/components/layout/GlassSlabSection";

const faqs = [
  {
    question: "What are standard delivery timelines for fullstack software builds?",
    answer:
      "A standard enterprise web portal or custom SaaS MVP typically completes within 8 to 14 weeks. We operate in two-week agile sprints: Phase 1 (Architecture & Design) covers Weeks 1–3, Phase 2 (Core Development & Integrations) covers Weeks 4–10, followed by rigorous QA testing, penetration scans, and production cutover in Weeks 11–12.",
  },
  {
    question: "How do you evaluate and select the technology stack for our project?",
    answer:
      "We avoid dogmatic stack allegiance. Stack selection is derived strictly from your business requirements: concurrency demands, in-house team competencies, maintenance overhead, and latency goals. For high-volume transactional web applications, we favor Next.js with TypeScript and Go or Node.js microservices. For modular commerce, Headless Shopify Plus paired with Hydrogen or Next.js Commerce is our gold standard.",
  },
  {
    question: "What does the marketing attribution and reporting cycle look like?",
    answer:
      "Clients receive live access to a custom Looker Studio dashboard connected to BigQuery, providing real-time ROAS, CPL, search visibility indexes, and organic rank movement. In addition to daily dashboard availability, we conduct bi-weekly sprint reviews with your marketing stakeholders to unpack cohort trends, discuss CRO test variants, and reallocate capital to the highest-yielding ad channels.",
  },
  {
    question: "How are revisions and creative direction handled during design sprints?",
    answer:
      "Our design deliverables are never static surprises. We provide dynamic Figma prototypes with designated feedback boards. Each phase includes up to three structured revision cycles with clear criteria based on user experience benchmarks rather than subjective conjecture. Upon final sign-off, our designers run a formal developer handoff review to ensure 100% parity in code implementation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <GlassSlabSection containerClassName="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest block mb-2">
          Operational Queries
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Frequently Asked Questions
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-xl mx-auto font-medium">
          Clear answers on delivery timelines, engineering selections, reporting intervals, and design iteration protocols.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="glass-surface-card rounded-2xl overflow-hidden glass-rim"
            >
              <button
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4"
                type="button"
                onClick={() => toggle(index)}
              >
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-primary text-2xl transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 text-body-md text-on-surface-variant font-medium border-t border-white/40 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </GlassSlabSection>
  );
}
