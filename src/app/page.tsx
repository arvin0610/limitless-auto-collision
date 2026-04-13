"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import { BUSINESS } from "@/lib/constants";
import {
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
  TruckIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const highlights = [
  {
    icon: WrenchScrewdriverIcon,
    title: "Certified Technicians",
    desc: "I-CAR and ASE certified pros with 8+ years of collision repair experience.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Lifetime Warranty",
    desc: "Every repair guaranteed for as long as you own the vehicle. No fine print.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Transparent Pricing",
    desc: "Detailed, itemized estimates before work begins. No hidden fees.",
  },
  {
    icon: CheckBadgeIcon,
    title: "All Insurance Accepted",
    desc: "We handle claims, adjuster calls, and direct billing — you just drop off.",
  },
];

const featuredServices = [
  {
    name: "Collision Repair",
    image: "/images/services/glass-replacement.png",
    desc: "Frame-to-finish restoration to factory specs.",
  },
  {
    name: "Paintless Dent Repair",
    image: "/images/services/paintless-dent-repair.png",
    desc: "Dents out, original paint preserved, same day.",
  },
  {
    name: "Full Mechanical",
    image: "/images/services/full-service-mechanical.png",
    desc: "Engine, brakes, suspension — all under one roof.",
  },
  {
    name: "Auto Detailing",
    image: "/images/services/detailing.png",
    desc: "Interior and exterior brought back to showroom.",
  },
];

const testimonials = [
  {
    name: "Maria Gonzalez",
    service: "Collision Repair",
    text: "They handled my insurance claim, finished ahead of schedule, and my car came back looking brand new. Best shop in the Valley.",
  },
  {
    name: "David Reynolds",
    service: "Paint & Body",
    text: "Upfront pricing, no surprises, and the color match is flawless. You can't tell it was ever in an accident.",
  },
  {
    name: "Jessica Torres",
    service: "Repeat Customer",
    text: "Three vehicles over five years. Honest work, fair prices, and they actually stand behind their warranty.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="hero-overlay absolute inset-0" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lime text-xs sm:text-sm font-bold uppercase tracking-[0.4em] mb-6"
          >
            {BUSINESS.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]"
          >
            LIMITLESS
            <br />
            <span className="gradient-text">AUTO COLLISION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-xl font-body"
          >
            I-CAR Gold Class certified collision repair in the San Fernando
            Valley. Expert work, lifetime warranty, fair pricing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-lime text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-lime-light btn-glow transition-all duration-300"
            >
              Get Free Estimate
            </Link>
            <Link
              href={BUSINESS.phoneHref}
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm rounded hover:border-lime hover:text-lime hover-glow-sm transition-all duration-300"
            >
              Call {BUSINESS.phone}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            {BUSINESS.certifications.map((cert) => (
              <span
                key={cert}
                className="text-[11px] text-white/40 uppercase tracking-widest font-medium"
              >
                {cert}
              </span>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-lime" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── HIGHLIGHTS ─── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-lime/30 transition-all duration-500 card-shine hover-glow">
                  <item.icon className="w-10 h-10 text-lime mb-5 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-glow">
                <Image
                  src="/images/about/header-image.jpg"
                  alt="Limitless Auto Collision technicians at work"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-lime text-xs font-bold uppercase tracking-[0.3em]">
                Who We Are
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
                Your Collision{" "}
                <span className="gradient-text">Specialists</span>
              </h2>
              <p className="mt-6 text-muted leading-relaxed text-lg">
                Family-operated and I-CAR Gold Class certified, Limitless Auto
                Collision has been the Valley&apos;s go-to body shop for 8+
                years. We pair factory-level equipment with ongoing technician
                training — so every repair meets manufacturer specs.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "I-CAR Gold Class",
                  "ASE Certified Techs",
                  "OEM Parts Available",
                  "Lifetime Warranty",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckBadgeIcon className="w-5 h-5 text-lime flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-lime font-bold uppercase tracking-wider text-sm group"
              >
                Our Story
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FEATURED SERVICES ─── */}
      <section className="py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="From a parking-lot ding to a major collision — factory-quality results, transparent pricing, fast turnaround."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, i) => (
              <AnimatedSection key={service.name} delay={i * 0.1}>
                <Link href="/services" className="group block">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 img-glow">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-white/60">{service.desc}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-lime text-lime font-bold uppercase tracking-wider text-sm rounded hover:bg-lime hover:text-black btn-glow transition-all duration-300"
            >
              All 9 Services
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ─── */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Work"
            title="Recent Projects"
            description="Real repairs, real results. Browse our portfolio of collision work, restorations, and detail jobs."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n, i) => (
              <AnimatedSection key={n} delay={i * 0.08}>
                <Link
                  href="/gallery"
                  className="group relative aspect-square rounded-xl overflow-hidden block img-glow"
                >
                  <Image
                    src={`/images/gallery/${n}.jpg`}
                    alt={`Completed repair project ${n}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-bold uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-lime font-bold uppercase tracking-wider text-sm group"
            >
              Full Gallery — 17 Photos &amp; 4 Videos
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Reviews"
            title="What Our Customers Say"
            description={`Rated ${BUSINESS.stats.rating}/5 from ${BUSINESS.stats.reviews} reviews. Here's why drivers across LA trust us.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.12}>
                <div className="p-8 rounded-2xl bg-card border border-border hover:border-lime/30 transition-all duration-500 hover-glow h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <StarIcon
                        key={j}
                        className="w-4 h-4 text-lime fill-lime"
                      />
                    ))}
                  </div>
                  <p className="text-muted leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-white font-bold text-sm">
                        {t.name}
                      </span>
                      <span className="block text-xs text-lime/70">
                        {t.service}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted uppercase tracking-wider">
                      Google Review
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="The Limitless Advantage"
            title="Why Drivers Choose Us"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TruckIcon,
                title: "24/7 Towing",
                desc: "Can't drive it? We'll pick it up — day or night, anywhere in LA County.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Direct Insurance Billing",
                desc: "We file, follow up, and bill your carrier directly. You pay only your deductible.",
              },
              {
                icon: CurrencyDollarIcon,
                title: "No Hidden Fees",
                desc: "Written estimate before any work starts. The price we quote is the price you pay.",
              },
              {
                icon: WrenchScrewdriverIcon,
                title: "OEM & Quality Parts",
                desc: "Factory-original parts available, plus CAPA-certified options to fit your budget.",
              },
              {
                icon: ClockIcon,
                title: "Fast Turnaround",
                desc: "Same-day PDR. Most collision jobs done in 3–5 days with regular updates.",
              },
              {
                icon: CheckBadgeIcon,
                title: "Gold Class Facility",
                desc: "I-CAR, ASE, and PPG certified — a standard only 10% of shops nationwide meet.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group flex gap-5 p-6 rounded-xl hover:bg-card/50 transition-all duration-300 hover-glow-sm">
                  <div className="w-12 h-12 rounded-lg bg-lime/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime/20 transition-colors">
                    <item.icon className="w-6 h-6 text-lime" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection />

      {/* ─── CTA ─── */}
      <section className="relative py-32 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/cta-background-v4.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Ready to Get Your Car
              <br />
              <span className="gradient-text">Back to Perfect?</span>
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto">
              Free estimate — walk in, call, or fill out our form. Detailed
              repair plan within 24 hours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-lime text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-lime-light btn-glow transition-all duration-300"
              >
                Get Free Estimate
              </Link>
              <Link
                href={BUSINESS.phoneHref}
                className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm rounded hover:border-lime hover:text-lime hover-glow-sm transition-all duration-300"
              >
                Call {BUSINESS.phone}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
