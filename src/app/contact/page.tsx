"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const contactInfo = [
  {
    icon: MapPinIcon,
    title: "Visit Us",
    primary: BUSINESS.address,
  },
  {
    icon: ClockIcon,
    title: "Hours",
    primary: BUSINESS.hours.weekday,
    secondary: `${BUSINESS.hours.saturday} · ${BUSINESS.hours.sunday}`,
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    primary: BUSINESS.phone,
    href: BUSINESS.phoneHref,
    secondary: `Towing: ${BUSINESS.towing}`,
  },
  {
    icon: EnvelopeIcon,
    title: "Email",
    primary: BUSINESS.email,
    href: BUSINESS.emailHref,
    secondary: "We respond within 24 hours",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,174,72,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Get In Touch"
            title="Contact & Booking"
            description="Walk in, call, or fill out the form for a free estimate. We'll have a repair plan within 24 hours."
          />
        </div>
      </section>

      {/* ─── CONTACT CARDS ─── */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-lime/30 transition-all duration-500 text-center card-shine hover-glow h-full">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-lime/10 flex items-center justify-center group-hover:bg-lime/20 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-lime" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block text-sm text-lime font-semibold hover:underline"
                    >
                      {item.primary}
                    </a>
                  ) : (
                    <p className="text-sm text-white/90">{item.primary}</p>
                  )}
                  {item.secondary && (
                    <p className="text-xs text-muted mt-1">{item.secondary}</p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM + SIDEBAR ─── */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="bg-card rounded-2xl border border-border p-8 md:p-10 hover-glow-sm">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Request a Free Estimate
                  </h3>
                  <p className="text-sm text-muted mb-8">
                    Describe the damage and we&apos;ll send a detailed repair
                    plan with itemized pricing.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-lime/10 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-lime"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Request Received
                      </h4>
                      <p className="text-muted">
                        We&apos;ll review your request and contact you within 24
                        hours with your estimate.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-lime text-sm font-bold uppercase tracking-wider hover:underline"
                      >
                        Submit Another
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:border-lime transition-colors"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:border-lime transition-colors"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:border-lime transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:border-lime transition-colors"
                            placeholder="(818) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Vehicle *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:border-lime transition-colors"
                            placeholder="2022 Toyota Camry"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white mb-2">
                            Service Needed
                          </label>
                          <select className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white focus:outline-none focus:border-lime transition-colors">
                            <option value="">Select a service</option>
                            <option>Collision Repair</option>
                            <option>Paintless Dent Repair</option>
                            <option>Glass Replacement</option>
                            <option>Full Mechanical</option>
                            <option>Auto Detailing</option>
                            <option>Motorcycle Repair</option>
                            <option>24/7 Towing</option>
                            <option>Insurance Claim</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Insurance Provider
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:border-lime transition-colors"
                          placeholder="e.g. State Farm, GEICO, Progressive"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Describe the Damage *
                        </label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-muted focus:outline-none focus:border-lime transition-colors resize-none"
                          placeholder="What happened and what needs repair..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-lime text-black font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-lime-light btn-glow transition-all duration-300"
                      >
                        Submit Estimate Request
                      </button>
                      <p className="text-xs text-muted text-center">
                        Free &amp; no-obligation. We respond within 24 hours.
                      </p>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection direction="right">
                <div className="bg-card rounded-2xl border border-border p-8 hover-glow-sm">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Why Limitless
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Free estimates — no obligation",
                      "Lifetime warranty on all repairs",
                      "All major insurance accepted",
                      "Direct billing — we handle claims",
                      "I-CAR Gold Class & ASE Certified",
                      "OEM & quality aftermarket parts",
                      "24/7 emergency towing",
                      "Rental car coordination",
                      "Computerized color matching",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckBadgeIcon className="w-4 h-4 text-lime flex-shrink-0" />
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <div className="bg-lime rounded-2xl p-8 text-black hover-glow-intense">
                  <h3 className="text-lg font-bold mb-2">
                    Emergency Towing — 24/7
                  </h3>
                  <p className="text-sm text-black/70 mb-3">
                    Can&apos;t drive it? We&apos;ll dispatch a flatbed to your
                    location.
                  </p>
                  <a
                    href={BUSINESS.towingHref}
                    className="block text-2xl font-bold hover:underline"
                  >
                    {BUSINESS.towing}
                  </a>
                  <p className="text-xs text-black/60 mt-1">
                    Anywhere in LA County
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="bg-card rounded-2xl border border-border p-8 hover-glow-sm">
                  <h3 className="text-lg font-bold text-white mb-3">
                    Service Area
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    San Fernando Valley, North Hollywood, Van Nuys, Burbank,
                    Glendale, Encino, Sherman Oaks, Woodland Hills, Panorama
                    City, and all of Greater Los Angeles.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
