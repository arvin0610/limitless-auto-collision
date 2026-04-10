"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import {
  ChevronDownIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "Collision repair, paintless dent repair, glass replacement, full mechanical service (engine, transmission, brakes, suspension, electrical), auto detailing, motorcycle repair, and 24/7 towing. We also provide free estimates and insurance assistance. Every repair is backed by our lifetime warranty.",
  },
  {
    question: "Do you work with my insurance company?",
    answer:
      "Yes — we work with all major carriers including State Farm, GEICO, Progressive, Allstate, USAA, and Farmers. We file your claim, communicate with adjusters, and arrange direct billing. In most cases, your only cost is your deductible.",
  },
  {
    question: "How long will my repair take?",
    answer:
      "Paintless dent repair and minor work: often same-day. Standard collision repairs: 3–5 business days. Major structural work: 1–3 weeks. We'll give you a specific timeline during your estimate and keep you updated throughout.",
  },
  {
    question: "How much will it cost?",
    answer:
      "Every repair is different, which is why we offer free, detailed estimates with itemized pricing. No hidden fees, no surprises. If you're going through insurance, we work directly with your carrier on pricing.",
  },
  {
    question: "What does your Lifetime Warranty cover?",
    answer:
      "All workmanship performed at our facility. If a defect related to our repair appears at any point while you own the vehicle, we fix it free. No deductibles, no fine print, no expiration.",
  },
  {
    question: "Do you use OEM parts?",
    answer:
      "Yes — factory-original OEM parts available for every repair. We also carry CAPA-certified aftermarket parts for budget-friendly options. We'll discuss the best fit for your vehicle and coverage during your estimate.",
  },
  {
    question: "Can you match my exact paint color?",
    answer:
      "Absolutely. We use PPG paint systems with computerized color matching to replicate your factory color precisely — including pearl, metallic, and tri-coat finishes. Adjacent panels are blended so the repair is invisible.",
  },
  {
    question: "Do you help with rental cars?",
    answer:
      "If your policy includes rental coverage, we coordinate the process and can arrange delivery directly to our shop so you have transportation the same day you drop off.",
  },
  {
    question: "What areas do you serve?",
    answer: `We're in the San Fernando Valley and serve all of LA County — North Hollywood, Van Nuys, Burbank, Glendale, Encino, Sherman Oaks, Woodland Hills, and beyond. Our 24/7 towing covers the entire area.`,
  },
  {
    question: "Do you repair motorcycles?",
    answer:
      "Yes — collision repair, engine work, electrical diagnostics, and custom bodywork and paint for sport bikes, cruisers, and customs of all makes.",
  },
  {
    question: "What certifications does your shop hold?",
    answer:
      "I-CAR Gold Class (only ~10% of shops nationwide qualify), ASE Certified technicians, and PPG Certified paint systems. These represent the highest industry standards for collision repair training and quality.",
  },
  {
    question: "How do I get a free estimate?",
    answer: `Three ways: walk in during business hours (${BUSINESS.hours.weekday}, ${BUSINESS.hours.saturday}), call us at ${BUSINESS.phone}, or submit the form on our Contact page. We'll have a detailed repair plan within 24 hours.`,
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 0.05}>
      <div
        className={`border rounded-xl transition-all duration-300 ${
          isOpen
            ? "border-lime/30 bg-card glow-green-sm"
            : "border-border bg-card/50 hover:border-lime/20 hover-glow-sm"
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <span
            className={`text-base font-semibold pr-4 transition-colors duration-300 ${
              isOpen ? "text-lime" : "text-white"
            }`}
          >
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDownIcon
              className={`w-5 h-5 transition-colors duration-300 ${
                isOpen ? "text-lime" : "text-muted"
              }`}
            />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <div className="w-12 h-0.5 bg-lime/30 mb-4" />
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,174,72,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Got Questions?"
            title="FAQ"
            description="Everything you need to know about our services, process, and pricing."
          />
        </div>
      </section>

      {/* ─── FAQ LIST ─── */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 bg-card/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Still Have <span className="gradient-text">Questions?</span>
            </h2>
            <p className="mt-6 text-lg text-muted max-w-md mx-auto">
              Call us or send a message — we typically respond within a few
              hours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-lime text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-lime-light btn-glow transition-all duration-300"
              >
                Contact Us
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm rounded hover:border-lime hover:text-lime hover-glow-sm transition-all duration-300"
              >
                <PhoneIcon className="w-4 h-4" />
                {BUSINESS.phone}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
