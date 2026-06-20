/**
 * Single source of truth for Grail Gym site content.
 * Pricing is CONFIRMED by the owner. Business details below are sourced from
 * grailgymtx.com and Instagram (@grailgym), June 2026.
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
  // GymMaster member portal — where signups & payments actually happen.
  joinUrl: "https://grailgym.gymmasteronline.com/portal/signup",
  // Personal training inquiry form (from IG bio).
  trainingFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfLzTHD30O_6iQo3JVp3Khf5bVm6EQLHJ-CaUGJ2XfgcatM1w/viewform",
  tagline: "Serious iron. No crowds. Open 24/7.",
  // Verbatim positioning copy from grailgymtx.com — keep this voice.
  whyWeExist:
    "We are a bodybuilding startup committed to bringing global equipment standards to southeast San Antonio. Grail Gym is focused on providing high-quality machines and a raw environment for athletes who demand the absolute best from their training space. Built for serious lifters, Grail Gym delivers commercial-grade bodybuilding equipment, a motivating atmosphere, and 24/7 access without the crowds of big-box gyms.",
};

/** Equipment partners called out on the current site. */
export const equipmentBrands = [
  "Arsenal Strength",
  "Intek Strength",
  "Mega Mass",
  "Booty Builder",
];

/**
 * Founding Members pricing. Confirmed with owner — do not change without sign-off.
 * Prices shown before applicable sales tax (GymMaster adds tax at checkout).
 */
export const pricing = {
  monthToMonth: {
    label: "Month-to-Month",
    price: 49.99,
    period: "/mo",
    signupFee: 49.99,
    note: "No contract · $49.99 one-time sign-up fee",
  },
  paidInFull: {
    label: "1 Year — Paid in Full",
    price: 480,
    period: "/year",
    effectiveMonthly: 40.0, // 480 / 12
    savingsVsDues: 119.88, // 12 × 49.99 − 480
    savingsWithSignup: 169.87, // (12 × 49.99 + 49.99) − 480
    note: "Just $40/mo — no sign-up fee",
  },
  military: {
    label: "Military",
    price: 39.99,
    period: "/mo",
    note: "Active & veteran — sign-up fee waived",
  },
  militaryPaidInFull: {
    label: "Military — Paid in Full",
    price: 360,
    period: "/year",
    effectiveMonthly: 30.0, // 360 / 12
    savingsVsDues: 119.88, // 12 × 39.99 − 360
    note: "Just $30/mo — no sign-up fee",
  },
  dayPass: {
    label: "Day Pass",
    price: 20,
    note: "Usable the day of purchase",
  },
} as const;
