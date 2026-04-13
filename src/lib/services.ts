export type Service = {
  slug: string;
  name: string;
  short: string;
  image: string;
  tagline: string;
  description: string;
  features: string[];
  process: { title: string; desc: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "collision-repair",
    name: "Collision Repair",
    short: "Frame-to-finish restoration to factory specs.",
    image: "/images/services/glass-replacement.png",
    tagline: "Structural Repairs Done Right",
    description:
      "From minor fender benders to major impacts, we restore your vehicle's frame, panels, and finish to factory specifications. Computerized measuring systems, factory-spec equipment, and OEM parts ensure your car drives, looks, and protects exactly as it did before the accident.",
    features: [
      "Frame & unibody straightening",
      "Panel replacement & alignment",
      "Computerized color matching",
      "OEM parts available",
      "Lifetime warranty",
      "Insurance direct billing",
    ],
    process: [
      { title: "Damage Assessment", desc: "Digital documentation and itemized estimate." },
      { title: "Disassembly", desc: "Full inspection to uncover hidden damage." },
      { title: "Structural Repair", desc: "Frame straightening and panel replacement." },
      { title: "Refinishing", desc: "Color matching, paint, and clear coat." },
      { title: "Reassembly & QC", desc: "Multi-point inspection before delivery." },
    ],
  },
  {
    slug: "paintless-dent-repair",
    name: "Paintless Dent Repair",
    short: "Dents out, original paint preserved.",
    image: "/images/services/paintless-dent-repair.png",
    tagline: "Dings Removed, Factory Finish Kept",
    description:
      "Precision tools restore dented panels from behind — no sanding, fillers, or repainting. PDR preserves your factory paint finish and your vehicle's resale value, and most jobs are completed same-day.",
    features: [
      "Original paint preserved",
      "Maintains resale value",
      "Same-day service available",
      "No fillers or repainting",
      "Hail damage specialist",
      "Eco-friendly process",
    ],
    process: [
      { title: "Inspection", desc: "Assess dent location, depth, and panel access." },
      { title: "Access Setup", desc: "Remove panels or trim as needed for tool access." },
      { title: "Precision Work", desc: "Massage dents from behind with specialized tools." },
      { title: "Final Polish", desc: "Light polishing to ensure flawless finish." },
    ],
  },
  {
    slug: "glass-replacement",
    name: "Glass Replacement",
    short: "Safety-standard glass installation.",
    image: "/images/services/glass-replacement.png",
    tagline: "Safe, Precise Glass Installation",
    description:
      "Damaged windshield, side, or rear glass replaced to manufacturer safety standards. We use OEM and OEM-equivalent glass with proper urethane bonding for a leak-free, structurally sound install.",
    features: [
      "OEM & OEM-equivalent glass",
      "ADAS calibration",
      "Lifetime leak warranty",
      "Mobile service available",
      "Insurance accepted",
      "Same-day service",
    ],
    process: [
      { title: "Inspection", desc: "Assess damage and confirm glass type needed." },
      { title: "Removal", desc: "Carefully remove damaged glass and clean frame." },
      { title: "Installation", desc: "Bond new glass with urethane for safety." },
      { title: "Calibration", desc: "Recalibrate ADAS sensors if equipped." },
    ],
  },
  {
    slug: "auto-detailing",
    name: "Auto Detailing",
    short: "Interior and exterior brought back to showroom.",
    image: "/images/services/detailing.png",
    tagline: "Showroom Condition, Inside and Out",
    description:
      "Multi-stage interior and exterior restoration. From clay bar treatment and paint correction to ceramic coatings and deep interior conditioning — your vehicle leaves looking and feeling brand new.",
    features: [
      "Paint correction",
      "Ceramic coating",
      "Interior deep clean",
      "Engine bay detailing",
      "Headlight restoration",
      "Odor elimination",
    ],
    process: [
      { title: "Wash & Decontamination", desc: "Hand wash, clay bar, iron remover." },
      { title: "Paint Correction", desc: "Multi-stage polish to remove imperfections." },
      { title: "Interior Detail", desc: "Vacuum, shampoo, condition all surfaces." },
      { title: "Protection", desc: "Apply ceramic coating or wax for lasting protection." },
    ],
  },
  {
    slug: "full-mechanical",
    name: "Full Service Mechanical",
    short: "Engine, brakes, suspension — all under one roof.",
    image: "/images/services/full-service-mechanical.png",
    tagline: "Complete Mechanical Service",
    description:
      "Bumper-to-bumper mechanical work — engine diagnostics, transmission repair, brake systems, suspension, A/C, and electrical. One shop for collision and mechanical means less hassle and faster turnaround.",
    features: [
      "Engine & transmission",
      "Brakes & suspension",
      "A/C & heating",
      "Electrical diagnostics",
      "Tune-ups & maintenance",
      "Pre-purchase inspections",
    ],
    process: [
      { title: "Diagnostic", desc: "Computer scan and physical inspection." },
      { title: "Estimate", desc: "Detailed breakdown of repairs and parts." },
      { title: "Repair", desc: "ASE-certified technicians perform the work." },
      { title: "Road Test", desc: "Verify performance before returning the vehicle." },
    ],
  },
  {
    slug: "insurance-assistance",
    name: "Insurance Assistance",
    short: "We handle the entire claim process.",
    image: "/images/services/insurance-assistance.png",
    tagline: "We Handle Your Claim",
    description:
      "Filing, follow-up, adjuster communication, photo documentation, and direct billing. We work with all major carriers — State Farm, GEICO, Progressive, Allstate, USAA, Farmers, and more — so you only pay your deductible.",
    features: [
      "All major carriers accepted",
      "Direct billing",
      "Claims filing & follow-up",
      "Photo documentation",
      "Adjuster communication",
      "Rental car coordination",
    ],
    process: [
      { title: "File the Claim", desc: "We help you file with your carrier." },
      { title: "Estimate Submission", desc: "Provide insurance with detailed estimate." },
      { title: "Approval & Repair", desc: "Begin work as soon as approval comes in." },
      { title: "Direct Payment", desc: "Insurance pays us directly — you pay only your deductible." },
    ],
  },
  {
    slug: "lifetime-warranty",
    name: "Lifetime Warranty",
    short: "Every repair guaranteed for life.",
    image: "/images/services/lifetime-warranty.png",
    tagline: "Backed for the Life of Your Vehicle",
    description:
      "We stand behind every repair we make. Workmanship defects related to our work are fixed at no charge for as long as you own the vehicle. No deductibles, no fine print, no expiration.",
    features: [
      "Covers all workmanship",
      "No expiration date",
      "No deductibles",
      "Transferable on request",
      "Honored at our facility",
      "No fine print",
    ],
    process: [
      { title: "Repair Performed", desc: "All work documented in your file." },
      { title: "Warranty Issued", desc: "Coverage starts the day you pick up your vehicle." },
      { title: "Issue Found?", desc: "Bring it back — we'll inspect at no cost." },
      { title: "Free Fix", desc: "Defects related to our work fixed free, anytime." },
    ],
  },
  {
    slug: "motorcycle-repair",
    name: "Motorcycle Repair",
    short: "Specialized service for all makes.",
    image: "/images/services/motorcycle-repair.png",
    tagline: "Expert Motorcycle Service",
    description:
      "Collision repair, engine work, electrical diagnostics, and custom bodywork and paint for sport bikes, cruisers, and customs. Specialized training on all major motorcycle makes.",
    features: [
      "Collision & bodywork",
      "Engine & electrical",
      "Custom paint",
      "All makes serviced",
      "Insurance assistance",
      "Pickup & delivery",
    ],
    process: [
      { title: "Inspection", desc: "Detailed assessment of damage or service needs." },
      { title: "Estimate", desc: "Itemized quote with parts and labor." },
      { title: "Repair", desc: "Specialized motorcycle technicians do the work." },
      { title: "Test Ride", desc: "Verify safety and performance before delivery." },
    ],
  },
  {
    slug: "towing",
    name: "24/7 Towing",
    short: "Flatbed transport, day or night.",
    image: "/images/services/towing.png",
    tagline: "24/7 Emergency Towing",
    description:
      "Vehicle can't be driven? Call us anytime. We dispatch a flatbed to your location anywhere in LA County and transport your car or motorcycle directly to our facility. Free with qualifying repairs.",
    features: [
      "Available 24/7",
      "Flatbed for safety",
      "All of LA County",
      "Free with qualifying repairs",
      "Cars & motorcycles",
      "Insurance accepted",
    ],
    process: [
      { title: "Call Us", desc: "Reach our towing line anytime, day or night." },
      { title: "Dispatch", desc: "Flatbed dispatched to your location." },
      { title: "Transport", desc: "Vehicle safely loaded and brought to our facility." },
      { title: "Repair Begins", desc: "Estimate started as soon as your vehicle arrives." },
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
