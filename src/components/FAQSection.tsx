"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export type FAQ = { question: string; answer: string };

const DEFAULT_FAQS: FAQ[] = [
  {
    question: "Do you work with my insurance company?",
    answer:
      "Yes — we work with all major carriers including State Farm, GEICO, Progressive, Allstate, USAA, and Farmers. We file your claim, communicate with adjusters, and arrange direct billing. In most cases, your only cost is your deductible.",
  },
  {
    question: "How long will my repair take?",
    answer:
      "Paintless dent repair: often same-day. Standard collision repairs: 3–5 business days. Major structural work: 1–3 weeks. We give you a specific timeline at your free estimate and keep you updated throughout.",
  },
  {
    question: "How much will it cost?",
    answer:
      "Every repair is different, which is why we offer free, itemized estimates. No hidden fees, no surprises. If you're going through insurance, we work directly with your carrier on pricing.",
  },
  {
    question: "What does your Lifetime Warranty cover?",
    answer:
      "All workmanship at our facility. If a defect related to our repair appears at any point while you own the vehicle, we fix it free. No deductibles, no fine print, no expiration.",
  },
  {
    question: "Do you use OEM parts?",
    answer:
      "Yes — factory-original OEM parts available. We also carry CAPA-certified aftermarket parts for budget-friendly options. We'll discuss the best fit for your vehicle and coverage during your estimate.",
  },
];

interface FAQSectionProps {
  faqs?: FAQ[];
  label?: string;
  title?: string;
  description?: string;
  background?: "black" | "card";
}

export default function FAQSection({
  faqs = DEFAULT_FAQS,
  label = "Got Questions?",
  title = "Frequently Asked",
  description = "Quick answers to the questions we hear most.",
  background = "card",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className={`py-32 ${background === "card" ? "bg-card/30" : "bg-black"}`}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading label={label} title={title} description={description} />

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={faq.question} delay={i * 0.04}>
                <div
                  className={`border rounded-xl transition-all duration-500 ${
                    isOpen
                      ? "border-lime/30 bg-card glow-green-sm"
                      : "border-border bg-card/50 hover:border-lime/20 hover-glow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span
                      className={`font-display text-base font-semibold pr-4 transition-colors duration-300 ${
                        isOpen ? "text-lime" : "text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                        transition={{
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="w-12 h-0.5 bg-lime/30 mb-4" />
                          <p className="text-muted leading-relaxed font-body">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
