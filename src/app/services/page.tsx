"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Collision Repair",
    image: "/images/services/glass-replacement.png",
    description:
      "Structural and cosmetic restoration to factory specs — frame straightening, panel replacement, and computerized color matching.",
    highlights: ["Frame & unibody repair", "Panel alignment", "Color matching"],
  },
  {
    name: "Auto Detailing",
    image: "/images/services/detailing.png",
    description:
      "Multi-stage interior and exterior restoration: clay bar, paint correction, ceramic coating, and deep conditioning.",
    highlights: ["Paint correction", "Ceramic coating", "Interior deep clean"],
  },
  {
    name: "Free Estimates",
    image: "/images/services/free-estimates.png",
    description:
      "Walk in or call for a thorough damage inspection with digital documentation and a detailed, itemized repair plan.",
    highlights: ["Itemized breakdown", "Digital photos", "Insurance-ready"],
  },
  {
    name: "Full Service Mechanical",
    image: "/images/services/full-service-mechanical.png",
    description:
      "Bumper-to-bumper mechanical work: engine, transmission, brakes, suspension, A/C, and electrical diagnostics.",
    highlights: ["Engine & transmission", "Brake & suspension", "Electrical"],
  },
  {
    name: "Insurance Assistance",
    image: "/images/services/insurance-assistance.png",
    description:
      "We file your claim, talk to adjusters, provide photo documentation, and arrange direct billing with all major carriers.",
    highlights: ["All carriers accepted", "Direct billing", "Claims handled"],
  },
  {
    name: "Lifetime Warranty",
    image: "/images/services/lifetime-warranty.png",
    description:
      "Every repair guaranteed for as long as you own the vehicle. Workmanship defects fixed free — no deductibles, no expiration.",
    highlights: ["All workmanship", "No expiration", "No deductibles"],
  },
  {
    name: "Motorcycle Repair",
    image: "/images/services/motorcycle-repair.png",
    description:
      "Collision repair, engine rebuilds, electrical work, and custom bodywork and paint for all makes of motorcycle.",
    highlights: ["Collision & body", "Engine & electrical", "Custom paint"],
  },
  {
    name: "Paintless Dent Repair",
    image: "/images/services/paintless-dent-repair.png",
    description:
      "Precision tools restore dented panels from behind — no sanding, fillers, or repainting. Preserves factory finish and resale value.",
    highlights: ["Original paint kept", "Resale value preserved", "Same-day available"],
  },
  {
    name: "24/7 Towing",
    image: "/images/services/towing.png",
    description:
      "Flatbed transport to our facility anytime — day or night, anywhere in LA County. Free tow with qualifying repairs.",
    highlights: ["Around the clock", "Flatbed for safety", "Free with repairs"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,174,72,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="What We Offer"
            title="Our Services"
            description="Nine specialized services under one roof. Every job backed by transparent pricing and our lifetime warranty."
          />
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-lime/30 transition-all duration-500 hover-glow h-full flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-xs text-white/70"
                        >
                          <CheckBadgeIcon className="w-4 h-4 text-lime flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="4 Simple Steps"
            description="From first call to final inspection — we keep it straightforward."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "Thorough damage inspection with digital documentation and photos.",
              },
              {
                step: "02",
                title: "Estimate & Insurance",
                desc: "Itemized pricing and insurance filing — we handle the paperwork.",
              },
              {
                step: "03",
                title: "Repair",
                desc: "Certified technicians, factory-spec equipment, regular progress updates.",
              },
              {
                step: "04",
                title: "Quality Check",
                desc: "Multi-point inspection on fit, finish, paint, and safety before handoff.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="relative text-center">
                  <span className="text-6xl font-bold text-lime/10">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8">
                      <ArrowRightIcon className="w-6 h-6 text-lime/30" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Need a <span className="gradient-text">Repair?</span>
            </h2>
            <p className="mt-6 text-lg text-muted max-w-md mx-auto">
              Free estimate — no obligation, no pressure. Walk in, call, or use
              our online form.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-lime text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-lime-light btn-glow transition-all duration-300"
              >
                Get Free Estimate
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
