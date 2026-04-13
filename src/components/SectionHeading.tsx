"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="inline-block text-lime text-xs font-bold uppercase tracking-[0.3em] mb-4"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className={`font-body mt-6 text-lg text-muted leading-relaxed ${
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease }}
        className={`line-reveal mt-6 w-20 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
