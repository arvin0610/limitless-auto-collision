"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import FAQSection from "@/components/FAQSection";
import { SERVICES, getService } from "@/lib/services";
import { BUSINESS } from "@/lib/constants";
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  PhoneIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = getService(slug);

  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,174,72,0.12),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs text-muted hover:text-lime uppercase tracking-[0.2em] mb-8 transition-colors"
            >
              <ArrowLeftIcon className="w-3 h-3" />
              All Services
            </Link>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-lime text-xs font-bold uppercase tracking-[0.3em]">
                {service.tagline}
              </span>
              <h1 className="font-display mt-4 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[0.95]">
                {service.name}
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed font-body max-w-xl">
                {service.description}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-lime text-black font-bold uppercase tracking-wider text-sm rounded hover:bg-lime-light btn-glow transition-all duration-300"
                >
                  Get Free Estimate
                </Link>
                <Link
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm rounded hover:border-lime hover:text-lime hover-glow-sm transition-all duration-300"
                >
                  <PhoneIcon className="w-4 h-4" />
                  {BUSINESS.phone}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-glow">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-lime text-xs font-bold uppercase tracking-[0.3em]">
              What&apos;s Included
            </span>
            <h2 className="font-display mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Service Highlights
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {service.features.map((feature, i) => (
              <AnimatedSection key={feature} delay={i * 0.05}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-lime/30 transition-all duration-500 hover-glow-sm">
                  <div className="w-9 h-9 rounded-lg bg-lime/10 flex items-center justify-center flex-shrink-0">
                    <CheckBadgeIcon className="w-5 h-5 text-lime" />
                  </div>
                  <span className="text-sm text-white/90 font-body pt-1.5">
                    {feature}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-lime text-xs font-bold uppercase tracking-[0.3em]">
                Our Process
              </span>
              <h2 className="font-display mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                How It Works
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="relative">
                  <span className="font-display text-6xl font-extrabold text-lime/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-body">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OTHER SERVICES ─── */}
      <section className="py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-lime text-xs font-bold uppercase tracking-[0.3em]">
                  Explore More
                </span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Other Services
                </h2>
              </div>
              <Link
                href="/services"
                className="hidden sm:inline-flex items-center gap-2 text-lime text-sm font-bold uppercase tracking-wider group"
              >
                View All
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.1}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-glow">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-lg font-bold text-white mb-1">
                        {s.name}
                      </h3>
                      <p className="text-sm text-white/60 font-body">
                        {s.short}
                      </p>
                    </div>
                  </div>
                </Link>
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
              Ready for Your{" "}
              <span className="gradient-text">{service.name}?</span>
            </h2>
            <p className="mt-6 text-lg text-muted max-w-md mx-auto font-body">
              Free estimate, no obligation. We&apos;ll have a detailed plan
              within 24 hours.
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
