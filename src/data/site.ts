/**
 * Single source of truth for Grail Gym site content.
 * Pricing is CONFIRMED by the owner (except where noted). Business details are
 * sourced from grailgymtx.com and Instagram (@grailgym), June 2026.
 */

export const site = {
  name: "Grail Gym",
  cityState: "San Antonio, TX",
  region: "Southeast San Antonio",
  address: {
    street: "4654 Rigsby Ave, Suite 202",
    city: "San Antonio",
    state: "TX",
    zip: "78222",
  },
  hours: "Open 24/7 for members",
  phone: "(210) 382-7648",
  phoneHref: "tel:+12103827648",
  email: "info@grailgymtx.com",
  instagram: "https://www.instagram.com/grailgym",
  instagramHandle: "@grailgym",
  // Instagram reels embedded in the videos section (order = display order).
  instagramReels: [
    "https://www.instagram.com/reel/DattliaNVFD/",
    "https://www.instagram.com/reel/DZtvOu6t-jJ/",
    "https://www.instagram.com/reel/DZ0HDK2JnIt/",
  ],
  runClub: "https://www.instagram.com/grailrunclub",
  facebook: "https://www.facebook.com/share/1JfymF9Ecw/",
  reviews: "https://maps.app.goo.gl/4tunuwerZdsPjw1j9",
  // GymMaster member portal. Signups and payments happen here.
  joinUrl: "https://grailgym.gymmasteronline.com/portal/signup",
  // Plan-specific GymMaster signup pages (hashes verified against the live
  // portal 2026-07-16; each detail page shows the matching plan name).
  planUrls: {
    monthToMonth:
      "https://grailgym.gymmasteronline.com/portal/signup/details/f49f5b1ec7e4d662b4de31eebbda9683",
    sixMonth:
      "https://grailgym.gymmasteronline.com/portal/signup/details/6a3869cd64d73521f0faa3612ed36246",
    paidInFull:
      "https://grailgym.gymmasteronline.com/portal/signup/details/df1b7d86020482900e6f2c3bd32d04ac",
    dayPass:
      "https://grailgym.gymmasteronline.com/portal/signup/details/dab3f88798e27212f9e283ec7ea6b915",
    weekPass:
      "https://grailgym.gymmasteronline.com/portal/signup/details/88cd1df8b3a7a3e4214b9d2bc8b4f785",
  },
  // Personal training inquiry form (from IG bio).
  trainingFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfLzTHD30O_6iQo3JVp3Khf5bVm6EQLHJ-CaUGJ2XfgcatM1w/viewform",
  tagline: "A 24 hour strength and bodybuilding gym in San Antonio, Texas.",
  owner: "Hunter",
  // Google Maps embed for the footer (exact embed provided by owner).
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5906.589078605997!2d-98.40266592296909!3d29.397753448918163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf7e5c46956db%3A0xb292823ed3ed0b23!2sGrail%20Gym!5e1!3m2!1sen!2sus!4v1784228525750!5m2!1sen!2sus",
};

/** Equipment partners stocked on the floor today. */
export const equipmentBrands = [
  "Arsenal Strength",
  "Intek Strength",
  "Mega Mass",
  "Booty Builder",
];

/**
 * Membership pricing. Confirmed with owner. Do not change without sign-off.
 * Month to month carries a $49.99 one-time signup fee (owner confirmed
 * 2026-07-16); paid-in-full plans are flat. Sales tax applies at checkout
 * but is deliberately not mentioned on site.
 */
export const pricing = {
  monthToMonth: {
    label: "Month to Month",
    price: 49.99,
    period: "/mo",
    signupFee: 49.99,
    note: "No contract. $49.99 one-time signup fee.",
  },
  sixMonth: {
    label: "6 Months, Paid in Full",
    price: 275,
    period: "/6 mo",
    effectiveMonthly: 45.83, // 275 / 6
    note: "One payment covers six months.",
  },
  paidInFull: {
    label: "1 Year, Paid in Full",
    price: 480,
    period: "/year",
    effectiveMonthly: 40.0, // 480 / 12
    savingsVsDues: 119.88, // 12 × 49.99 − 480
    savingsWithSignup: 169.87, // (12 × 49.99 + 49.99) − 480
    note: "$40 per month. No signup fee.",
  },
  military: {
    label: "Military",
    price: 39.99,
    period: "/mo",
    note: "Active duty and veterans.",
  },
  militaryPaidInFull: {
    label: "Military, Paid in Full",
    price: 360,
    period: "/year",
    effectiveMonthly: 30.0, // 360 / 12
    savingsVsDues: 119.88, // 12 × 39.99 − 360
    note: "$30 per month.",
  },
  dayPass: {
    label: "Day Pass",
    price: 20,
    note: "Valid on the day of purchase during staffed hours",
  },
  weekPass: {
    label: "Week Pass",
    price: 34.95,
    note: "Seven days of access",
  },
} as const;
