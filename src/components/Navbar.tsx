"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { SERVICES } from "@/lib/services";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-lime/20 shadow-lg shadow-lime/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Limitless Auto Collision"
              width={80}
              height={80}
              priority
              style={{ width: "auto", height: "48px" }}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.hasDropdown
                  ? isServicesActive
                  : pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesHover(true)}
                    onMouseLeave={() => setServicesHover(false)}
                  >
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium tracking-wide uppercase group inline-flex items-center gap-1.5"
                    >
                      <span
                        className={`transition-colors duration-300 ${
                          isActive
                            ? "text-lime"
                            : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                      <ChevronDownIcon
                        className={`w-3 h-3 transition-all duration-300 ${
                          servicesHover ? "rotate-180" : ""
                        } ${isActive ? "text-lime" : "text-white/50"}`}
                      />
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-4 right-7 h-0.5 bg-lime rounded-full"
                          transition={{ duration: 0.5, ease }}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {servicesHover && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.3, ease }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[420px]"
                        >
                          <div className="bg-black/95 backdrop-blur-xl border border-lime/20 rounded-xl shadow-2xl shadow-lime/10 p-3">
                            <div className="grid grid-cols-2 gap-1">
                              {SERVICES.map((s) => (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  className="px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-lime hover:bg-lime/5 transition-all duration-200"
                                >
                                  {s.name}
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 pt-3 border-t border-border">
                              <Link
                                href="/services"
                                className="block px-3 py-2 text-xs text-lime font-bold uppercase tracking-wider hover:bg-lime/5 rounded-lg transition-colors"
                              >
                                View All Services →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide uppercase group"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-lime"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-lime rounded-full"
                      transition={{ duration: 0.5, ease }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-lime text-black text-sm font-bold uppercase tracking-wider rounded hover:bg-lime-light btn-glow transition-all duration-300"
          >
            Book Now
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-lime/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.5, ease }}
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors text-white/70 hover:text-white hover:bg-white/5"
                      >
                        <span>{link.label}</span>
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease }}
                            className="overflow-hidden ml-4 border-l border-lime/20 mt-1"
                          >
                            {SERVICES.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="block px-4 py-2 text-sm text-white/60 hover:text-lime transition-colors"
                              >
                                {s.name}
                              </Link>
                            ))}
                            <Link
                              href="/services"
                              className="block px-4 py-2 text-xs text-lime font-bold uppercase tracking-wider"
                            >
                              View All →
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        pathname === link.href
                          ? "text-lime bg-lime/10"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.04, duration: 0.5, ease }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-lime text-black font-bold uppercase tracking-wider rounded hover:bg-lime-light transition-colors"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
