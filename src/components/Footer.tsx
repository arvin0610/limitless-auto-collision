import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Collision Repair",
  "Paintless Dent Repair",
  "Full Mechanical",
  "Auto Detailing",
  "Glass Replacement",
  "Insurance Assistance",
  "Motorcycle Repair",
  "24/7 Towing",
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt={BUSINESS.name}
                width={45}
                height={45}
              />
              <div>
                <span className="text-lg font-bold tracking-tight text-white">
                  LIMITLESS
                </span>
                <span className="block text-[10px] tracking-[0.3em] text-lime uppercase">
                  Auto Collision
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-3">
              I-CAR Gold Class certified collision repair in the San Fernando
              Valley. Expert work, lifetime warranty, fair pricing.
            </p>
            <p className="text-xs text-white/30 italic">
              {BUSINESS.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-lime transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted hover:text-lime transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <p className="text-muted">{BUSINESS.address}</p>
              <div>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-lime font-semibold hover:underline"
                >
                  {BUSINESS.phone}
                </a>
                <br />
                <span className="text-xs text-muted">
                  Towing:{" "}
                  <a
                    href={BUSINESS.towingHref}
                    className="hover:text-lime transition-colors"
                  >
                    {BUSINESS.towing}
                  </a>
                </span>
              </div>
              <a
                href={BUSINESS.emailHref}
                className="block text-muted hover:text-lime transition-colors"
              >
                {BUSINESS.email}
              </a>
              <p className="text-muted">
                {BUSINESS.hours.weekday}
                <br />
                {BUSINESS.hours.saturday}
              </p>
              <Link
                href="/contact"
                className="inline-block mt-2 px-5 py-2 bg-lime/10 border border-lime/30 text-lime text-xs font-bold uppercase tracking-wider rounded hover:bg-lime hover:text-black btn-glow transition-all duration-300"
              >
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-8">
          {[...BUSINESS.certifications, "Lifetime Warranty"].map((cert) => (
            <span
              key={cert}
              className="text-[11px] text-white/30 uppercase tracking-widest font-medium"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-muted">
            Serving {BUSINESS.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
