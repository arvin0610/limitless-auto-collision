// ─── Single source of truth for all business data ───

export const BUSINESS = {
  name: "Limitless Auto Collision",
  tagline: "Where Quality Meets Precision",
  phone: "(818) 555-1234",
  phoneHref: "tel:+18185551234",
  towing: "(818) 555-5678",
  towingHref: "tel:+18185555678",
  email: "info@limitlessautocollision.com",
  emailHref: "mailto:info@limitlessautocollision.com",
  address: "San Fernando Valley, Los Angeles, CA 91340",
  region: "San Fernando Valley & Greater Los Angeles",
  hours: {
    weekday: "Mon – Fri: 8 AM – 6 PM",
    saturday: "Sat: 9 AM – 3 PM",
    sunday: "Sun: Closed",
  },
  stats: {
    years: "8+",
    vehicles: "5,000+",
    rating: "4.9",
    reviews: "500+",
  },
  certifications: [
    "I-CAR Gold Class",
    "ASE Certified",
    "PPG Certified",
    "All Insurance Accepted",
  ],
} as const;
