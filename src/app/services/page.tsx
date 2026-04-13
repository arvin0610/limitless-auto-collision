"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import { SERVICES } from "@/lib/services";
import { BUSINESS } from "@/lib/constants";
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

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
            {SERVICES.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.06}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-lime/30 transition-all duration-500 hover-glow h-full flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-lime transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-5 flex-1 font-body">
                        {service.short}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-xs text-white/70 font-body"
                          >
                            <CheckBadgeIcon className="w-4 h-4 text-lime flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-2 text-lime text-xs font-bold uppercase tracking-wider mt-auto">
                        Learn More
                        <ArrowRightIcon className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
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
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="relative text-center">
                  <span className="font-display text-6xl font-extrabold text-lime/10">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-body">
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

      {/* ─── FAQ ─── */}
      <FAQSection background="black" />

      {/* ─── CTA ─── */}
      <section className="py-32 bg-card/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Need a <span className="gradient-text">Repair?</span>
            </h2>
            <p className="mt-6 text-lg text-muted max-w-md mx-auto font-body">
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
