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
  runClub: "https://www.instagram.com/grailrunclub",
  facebook: "https://www.facebook.com/share/1JfymF9Ecw/",
  reviews: "https://maps.app.goo.gl/4tunuwerZdsPjw1j9",
  // GymMaster member portal. Signups and payments happen here.
  joinUrl: "https://grailgym.gymmasteronline.com/portal/signup",
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
 * Prices shown before sales tax (GymMaster adds tax at checkout).
 * The 6-month plan comes from the official grailgymtx.com pricing table.
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
    note: "Active duty and veterans. Signup fee waived.",
  },
  militaryPaidInFull: {
    label: "Military, Paid in Full",
    price: 360,
    period: "/year",
    effectiveMonthly: 30.0, // 360 / 12
    savingsVsDues: 119.88, // 12 × 39.99 − 360
    note: "$30 per month. No signup fee.",
  },
  dayPass: {
    label: "Day Pass",
    price: 20,
    note: "Valid on the day of purchase during staffed hours",
  },
} as const;
