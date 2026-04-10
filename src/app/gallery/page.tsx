"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { XMarkIcon, PlayIcon } from "@heroicons/react/24/outline";

const projectLabels: Record<number, { title: string; tag: string }> = {
  1: { title: "Full Front-End Collision Repair", tag: "Collision" },
  2: { title: "Bumper Replacement & Repaint", tag: "Body Work" },
  3: { title: "Side Panel Restoration", tag: "Collision" },
  4: { title: "Hail Damage — Paintless Dent Repair", tag: "PDR" },
  5: { title: "Complete Respray — Color Change", tag: "Paint" },
  6: { title: "Frame Straightening & Structural", tag: "Collision" },
  7: { title: "Rear-End Collision Restoration", tag: "Collision" },
  8: { title: "Motorcycle Custom Bodywork", tag: "Motorcycle" },
  9: { title: "Insurance Repair — Full Rebuild", tag: "Collision" },
  10: { title: "Door Ding Removal — PDR", tag: "PDR" },
  11: { title: "Premium Interior Detail", tag: "Detailing" },
  12: { title: "Quarter Panel Repair & Blend", tag: "Body Work" },
  13: { title: "Hood Replacement & Color Match", tag: "Paint" },
  14: { title: "Fender Repair — Minor Collision", tag: "Body Work" },
  15: { title: "Full Exterior Detail & Ceramic Coat", tag: "Detailing" },
  16: { title: "Windshield & Glass Replacement", tag: "Glass" },
  17: { title: "Classic Car Restoration", tag: "Paint" },
};

const images = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/${i + 1}.jpg`,
  title: projectLabels[i + 1]?.title ?? `Project ${i + 1}`,
  tag: projectLabels[i + 1]?.tag ?? "Repair",
}));

const videos = [
  { id: 1, src: "/videos/gallery/1.mp4", title: "Full Collision Repair — Start to Finish" },
  { id: 2, src: "/videos/gallery/2.mp4", title: "Paintless Dent Repair Process" },
  { id: 3, src: "/videos/gallery/3.mp4", title: "Complete Respray Timelapse" },
  { id: 4, src: "/videos/gallery/4.mp4", title: "Before & After Showcase" },
];

const allTags = ["All", ...Array.from(new Set(images.map((img) => img.tag)))];

type MediaItem =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [activeTag, setActiveTag] = useState("All");
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);

  const filteredImages =
    activeTag === "All"
      ? images
      : images.filter((img) => img.tag === activeTag);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,174,72,0.1),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Our Work"
            description="Real results from real customers. Browse 17 project photos and 4 videos showcasing our collision repairs, restorations, and detail work."
          />
        </div>
      </section>

      {/* ─── TABS ─── */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main tab buttons */}
          <div className="flex justify-center gap-4 mb-8">
            {(["photos", "videos"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 text-sm font-bold uppercase tracking-wider rounded transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-lime text-black"
                    : "bg-card border border-border text-muted hover:text-white hover:border-lime/30"
                }`}
              >
                {tab === "photos"
                  ? `Photos (${images.length})`
                  : `Videos (${videos.length})`}
              </button>
            ))}
          </div>

          {/* Category filters — photos only */}
          {activeTab === "photos" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                    activeTag === tag
                      ? "bg-lime/20 text-lime border border-lime/40"
                      : "text-muted border border-border hover:border-lime/20 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          )}

          {/* Photos Grid */}
          <AnimatePresence mode="wait">
            {activeTab === "photos" && (
              <motion.div
                key={`photos-${activeTag}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
              >
                {filteredImages.map((img, i) => (
                  <AnimatedSection key={img.id} delay={i * 0.04}>
                    <button
                      onClick={() =>
                        setLightbox({ type: "image", src: img.src })
                      }
                      className="group relative w-full rounded-xl overflow-hidden block break-inside-avoid img-glow"
                    >
                      <Image
                        src={img.src}
                        alt={img.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </button>
                  </AnimatedSection>
                ))}
              </motion.div>
            )}

            {activeTab === "videos" && (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {videos.map((vid, i) => (
                  <AnimatedSection key={vid.id} delay={i * 0.1}>
                    <button
                      onClick={() =>
                        setLightbox({ type: "video", src: vid.src })
                      }
                      className="group relative w-full aspect-video rounded-xl overflow-hidden bg-card border border-border hover:border-lime/30 transition-all duration-300 hover-glow"
                    >
                      <video
                        src={vid.src}
                        muted
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-lime/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3">
                          <PlayIcon className="w-7 h-7 text-black ml-1" />
                        </div>
                        <span className="text-white text-sm font-bold">
                          {vid.title}
                        </span>
                      </div>
                    </button>
                  </AnimatedSection>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === "image" ? (
                <Image
                  src={lightbox.src}
                  alt="Gallery preview"
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  className="w-full max-h-[85vh] rounded-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
