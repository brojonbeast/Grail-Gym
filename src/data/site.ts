/**
 * Single source of truth for Grail Gym site content.
 * Pricing here is CONFIRMED. Items marked `TODO` need real content from the
 * owner / Instagram (@grailgym) / the GymMaster portal.
 */

export const site = {
  name: "Grail Gym",
  // TODO: confirm exact city/region. Domain is grailgymtx.com → Texas.
  location: "Texas", // TODO: full street address + city, ST ZIP
  // TODO: confirm real staffed/access hours from Instagram or owner.
  hours: "24/7 Member Access", // placeholder — confirm
  instagram: "https://www.instagram.com/grailgym",
  instagramHandle: "@grailgym",
  // GymMaster member portal — where signups & payments actually happen.
  joinUrl: "https://grailgym.gymmasteronline.com/portal/login",
  email: "", // TODO
  phone: "", // TODO
  tagline: "Earn your strength.",
};

/**
 * Founding Members pricing.
 * Confirmed with owner — do not change without sign-off.
 */
export const pricing = {
  monthToMonth: {
    label: "Month-to-Month",
    price: 49.99,
    period: "/mo",
    signupFee: 49.99,
    note: "$49.99 one-time sign-up fee",
  },
  paidInFull: {
    label: "1 Year — Paid in Full",
    price: 480,
    period: "/year",
    effectiveMonthly: 40.0, // 480 / 12
    // Savings math, computed from the month-to-month plan:
    savingsVsDues: 119.88, // 12 × 49.99 − 480
    savingsWithSignup: 169.87, // (12 × 49.99 + 49.99) − 480
    note: "Just $40/mo — no sign-up fee",
  },
  military: {
    label: "Military",
    price: 39.99,
    period: "/mo",
    note: "Active & veteran — sign-up fee waived", // assumption: confirm with owner
  },
  militaryPaidInFull: {
    label: "Military — Paid in Full",
    price: 360,
    period: "/year",
    effectiveMonthly: 30.0, // 360 / 12
    savingsVsDues: 119.88, // 12 × 39.99 − 360
    note: "Just $30/mo — no sign-up fee",
  },
} as const;
