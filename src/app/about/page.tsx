"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  TrophyIcon,
  CheckCircleIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { value: BUSINESS.stats.years, label: "Years in Business" },
  { value: BUSINESS.stats.vehicles, label: "Vehicles Repaired" },
  { value: BUSINESS.stats.rating, label: `Stars — ${BUSINESS.stats.reviews} Reviews` },
  { value: "24/7", label: "Towing Service" },
];

const values = [
  {
    icon: ShieldCheckIcon,
    title: "No Shortcuts",
    desc: "Every repair meets manufacturer specs. Factory-level equipment, OEM parts when available, no cutting corners.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Always Improving",
    desc: "Ongoing training in the latest repair techniques and continuous investment in diagnostic and paint technology.",
  },
  {
    icon: UserGroupIcon,
    title: "Straight Talk",
    desc: "You'll know what's happening, what it costs, and when it's ready. No runaround, no surprises.",
  },
  {
    icon: TrophyIcon,
    title: "Earned Trust",
    desc: `${BUSINESS.stats.vehicles} vehicles and a ${BUSINESS.stats.rating}-star rating. Drivers choose us again because we deliver.`,
  },
];

const certifications = [
  {
    name: "I-CAR Gold Class",
    desc: "The highest inter-industry training standard. Only ~10% of shops nationwide qualify.",
  },
  {
    name: "ASE Certified",
    desc: "National Institute for Automotive Service Excellence — the benchmark for technician competence.",
  },
  {
    name: "PPG Certified",
    desc: "Factory-trained in PPG paint systems for precise color matching on any finish.",
  },
  {
    name: "All Insurance Accepted",
    desc: "Preferred facility for major carriers. Direct billing — you pay only your deductible.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,174,72,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Story"
            title="About Us"
            description="Family-operated. I-CAR Gold Class certified. Trusted across the San Fernando Valley for 8+ years."
          />
        </div>
      </section>

      {/* ─── MAIN ABOUT ─── */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-glow">
                  <Image
                    src="/images/about/header-image.jpg"
                    alt="Inside the Limitless Auto Collision facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lime/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-lime/5 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-lime text-xs font-bold uppercase tracking-[0.3em]">
                Our Mission
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                To Keep Your Car
                <br />
                <span className="gradient-text">on the Road</span>
              </h2>
              <p className="mt-6 text-muted leading-relaxed text-lg">
                We started as a small family shop with one belief: every driver
                deserves honest, high-quality collision repair at a fair price.
                Eight years later, we&apos;re an I-CAR Gold Class facility
                trusted by thousands across Los Angeles.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                We invest in factory-level equipment and ongoing technician
                training so every repair — from a door ding to a full structural
                rebuild — meets manufacturer specifications. And we back every
                job with a lifetime warranty.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "I-CAR Gold Class Certified",
                  "ASE & PPG Certified Technicians",
                  "Transparent, itemized pricing",
                  "Lifetime warranty on all repairs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircleIcon className="w-5 h-5 text-lime flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                    className="block text-5xl md:text-6xl font-bold gradient-text"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="block mt-2 text-sm text-muted uppercase tracking-wider font-medium">
                    {stat.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Credentials"
            title="Our Certifications"
            description="Industry-leading standards so you can trust the quality of every repair."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.name} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-lime/30 transition-all duration-500 hover-glow h-full">
                  <CheckBadgeIcon className="w-8 h-8 text-lime mb-4" />
                  <h3 className="text-base font-bold text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIDEO ─── */}
      <section className="py-32 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="See Our Shop"
            title="Inside the Facility"
            description="A look at the equipment, the team, and the process behind every repair."
          />
          <AnimatedSection>
            <div className="relative aspect-video rounded-2xl overflow-hidden glow-green hover-glow-intense">
              <video
                controls
                poster="/images/about/1.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/videos/about.mp4" type="video/mp4" />
              </video>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="What Drives Us"
            title="Our Values"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-lime/30 transition-all duration-500 text-center card-shine hover-glow">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-lime" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
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

      {/* ─── FACILITY ─── */}
      <section className="py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Facility"
            title="Where the Work Gets Done"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: "1.jpg", caption: "Main repair bay — frame machines and spray booth" },
              { img: "2.jpg", caption: "Detail area and final inspection zone" },
            ].map((item, i) => (
              <AnimatedSection key={item.img} delay={i * 0.15}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-glow">
                  <Image
                    src={`/images/about/${item.img}`}
                    alt={item.caption}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-sm text-white/80">{item.caption}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lime/10 via-transparent to-lime/5" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Experience the
              <br />
              <span className="gradient-text">Limitless Difference</span>
            </h2>
            <p className="mt-6 text-lg text-muted max-w-md mx-auto">
              Free estimate, lifetime warranty, zero hassle. Bring your vehicle
              to the team that does it right.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 px-10 py-4 bg-lime text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-lime-light btn-glow transition-all duration-300"
            >
              Contact Us
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
